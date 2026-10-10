/**
 * Converts client-delivered source images in public/new-images/ into
 * web-servable WebP files in public/photos-to-use/.
 *
 * The source files are unservable as-is: top-level PNGs are 2-2.7 MB and the
 * pouch mockups are 10-21 MB at 5000x4000. Their names also contain spaces,
 * trailing spaces and "+" characters, which break Next <Image src>.
 *
 * Run:  node scripts/prepare-images.mjs
 *       node scripts/prepare-images.mjs --force   (re-convert existing)
 *
 * Re-run this whenever the client sends new assets — add entries to JOBS below.
 * new-images/ stays the untouched source of truth.
 */

import sharp from "sharp";
import { existsSync } from "node:fs";
import { mkdir, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SRC_DIR = path.join(ROOT, "public", "new-images");
const OUT_DIR = path.join(ROOT, "public", "photos-to-use");

const FORCE = process.argv.includes("--force");

/**
 * width   — target width in px (~2x the largest rendered size)
 * fit     — "cover" crops to the aspect ratio implied by width/height
 * extract — {left, top, width, height} as 0-1 fractions of the source, applied
 *           before resize
 */

/**
 * All five pouch mockups put the pouch in an identical box on a 5000x4000
 * canvas (verified by edge-density detection — the box came back as
 * 0.285,0.156 -> 0.705,0.897 on every one). sharp's trim() can't find it
 * because the surrounding canvas is a smooth peach gradient, not a flat
 * colour, so we crop by fraction instead. Padded ~1.5% on each side.
 */
const POUCH_CROP = { left: 0.271, top: 0.142, width: 0.449, height: 0.771 };
const JOBS = [
  // ── ExportProcess: replaces 3 of 4 Unsplash stock images ──────────────
  {
    src: "Origin Selection Image .png",
    out: "process-origin-selection.webp",
    width: 1200,
    height: 900,
    fit: "cover",
  },
  {
    src: "Food Manufacturer.png",
    out: "process-processing.webp",
    width: 1200,
    height: 900,
    fit: "cover",
  },
  {
    src: "Worldwide Distribution Image.png",
    out: "process-distribution.webp",
    width: 1200,
    height: 900,
    fit: "cover",
  },

  // ── "Who We Serve" — 4:5 portrait crops ──────────────────────────────
  {
    src: "Food Manufacturer.png",
    out: "serve-food-manufacturers.webp",
    width: 869,
    height: 1086,
    fit: "cover",
  },
  {
    src: "Hospitality and Culinary .png",
    out: "serve-hospitality.webp",
    width: 869,
    height: 1086,
    fit: "cover",
    // The chef and the branded pouch sit left of centre; a centre crop would
    // cut the pouch. Bias the crop toward the subject.
    position: "left",
  },
  {
    src: "Retail Brands photo.png",
    out: "serve-retail.webp",
    width: 869,
    height: 1086,
    fit: "cover",
  },

  // ── Packaging / private-label band. Trimmed to the pouch itself so the
  //    component controls the background instead of inheriting the mockup's. ─
  {
    src: "Pouch/Black Pepper/Supreme/New Mockup.png",
    out: "pouch-black-pepper.webp",
    width: 700,
    extract: POUCH_CROP,
  },
  {
    src: "Pouch/Cardamom/Supreme/New Mockup.png",
    out: "pouch-green-cardamom.webp",
    width: 700,
    extract: POUCH_CROP,
  },
  {
    src: "Pouch/Turmeric Powder/New Mockup.png",
    out: "pouch-turmeric.webp",
    width: 700,
    extract: POUCH_CROP,
  },
  {
    src: "Pouch/Red Chilli Powder/Kashmiri/New Mockup .png",
    out: "pouch-red-chilli.webp",
    width: 700,
    extract: POUCH_CROP,
  },
  {
    src: "Pouch/Black Pepper Powder/New Mockup .png",
    out: "pouch-black-pepper-powder.webp",
    width: 700,
    extract: POUCH_CROP,
  },

  // ── Founder portrait. 4:5 crop biased to the top so the subject fills the
  //    frame and the yellow wall is minimised. ──────────────────────────────
  {
    src: "Our Story F1.jpg",
    out: "founder-vismritha-v2.webp",
    width: 900,
    height: 1125,
    fit: "cover",
    position: "top",
  },
];

/**
 * Splits the flat navbar lockup into its two parts so the Logo component can
 * size the mark and the wordmark independently (the baked-in proportion made
 * the circular mark read as an afterthought).
 *
 * The gutter between them was found by scanning alpha-column density on
 * logo-navbar-*.png: content 0-238, gap 238-289, wordmark 289-1308.
 *
 * Source and output both live in photos-to-use/, so unlike JOBS this runs even
 * without the gitignored new-images/ folder.
 */
const LOGO_JOBS = [
  { part: "mark", box: { left: 0, top: 0, width: 238, height: 240 } },
  { part: "wordmark", box: { left: 289, top: 0, width: 1019, height: 240 } },
];

async function splitLogos() {
  for (const variant of ["dark", "light"]) {
    const src = path.join(OUT_DIR, `logo-navbar-${variant}.png`);
    if (!existsSync(src)) {
      console.error(`  MISSING  logo-navbar-${variant}.png`);
      continue;
    }

    for (const { part, box } of LOGO_JOBS) {
      const out = path.join(OUT_DIR, `logo-${part}-${variant}.png`);
      if (existsSync(out) && !FORCE) {
        console.log(`  skip     logo-${part}-${variant}.png (exists)`);
        continue;
      }
      // Two passes: chaining extract().trim() makes sharp validate the extract
      // box against the post-trim dimensions and throw "bad extract area".
      const cropped = await sharp(src).extract(box).png().toBuffer();
      await sharp(cropped).trim({ threshold: 1 }).png().toFile(out);
      const { width, height } = await sharp(out).metadata();
      console.log(`  ok       logo-${part}-${variant}.png`.padEnd(45) + `${width}x${height}`);
    }
  }
}

/**
 * Square thumbnails for the navbar Products dropdown.
 *
 * The full product images are 1.2-2.4 MB PNGs — fetching those when a menu
 * opens is exactly how a dropdown ends up feeling laggy. At 160px (2x of the
 * 80px render) they come out around 5 KB each and are effectively instant.
 *
 * Reads from photos-to-use/, so this runs without the gitignored new-images/.
 */
const THUMB_JOBS = [
  { src: "black-pepper.png", out: "thumb-black-pepper.webp" },
  { src: "green-cardmom.png", out: "thumb-green-cardamom.webp" },
  { src: "turmeric_roots.webp", out: "thumb-turmeric.webp" },
  { src: "red-chilli.png", out: "thumb-red-chilli.webp" },
];

async function buildThumbs() {
  for (const { src, out } of THUMB_JOBS) {
    const srcPath = path.join(OUT_DIR, src);
    const outPath = path.join(OUT_DIR, out);

    if (!existsSync(srcPath)) {
      console.error(`  MISSING  ${src}`);
      continue;
    }
    if (existsSync(outPath) && !FORCE) {
      console.log(`  skip     ${out} (exists)`);
      continue;
    }

    await sharp(srcPath)
      .resize({ width: 160, height: 160, fit: "cover", position: "centre" })
      .webp({ quality: 80, effort: 5 })
      .toFile(outPath);

    const { size } = await stat(outPath);
    console.log(`  ok       ${out.padEnd(34)} ${kb(size).padStart(8)}`);
  }
}

const kb = (bytes) => `${(bytes / 1024).toFixed(0)} KB`;

async function run() {
  await mkdir(OUT_DIR, { recursive: true });

  console.log("Logo lockup split:");
  await splitLogos();
  console.log("\nNavbar product thumbnails:");
  await buildThumbs();
  console.log("");

  // public/new-images/ is gitignored (679 MB of client source files), so a
  // fresh clone won't have it. The converted WebP outputs are committed, so
  // nothing in the app depends on this script having been run.
  if (!existsSync(SRC_DIR)) {
    console.log(
      `Nothing to do: ${path.relative(ROOT, SRC_DIR)} is not present.\n` +
        `It's gitignored — get the client source assets from the shared drive\n` +
        `if you need to re-convert. The web-ready images in public/photos-to-use/\n` +
        `are committed and already in use.`
    );
    return;
  }

  await mkdir(OUT_DIR, { recursive: true });

  let converted = 0;
  let skipped = 0;
  let failed = 0;
  let srcTotal = 0;
  let outTotal = 0;

  for (const job of JOBS) {
    const srcPath = path.join(SRC_DIR, job.src);
    const outPath = path.join(OUT_DIR, job.out);

    if (!existsSync(srcPath)) {
      console.error(`  MISSING  ${job.src}`);
      failed++;
      continue;
    }

    if (existsSync(outPath) && !FORCE) {
      console.log(`  skip     ${job.out} (exists — use --force to redo)`);
      skipped++;
      continue;
    }

    try {
      let pipeline = sharp(srcPath).rotate();

      if (job.extract) {
        const meta = await sharp(srcPath).metadata();
        pipeline = pipeline.extract({
          left: Math.round(job.extract.left * meta.width),
          top: Math.round(job.extract.top * meta.height),
          width: Math.round(job.extract.width * meta.width),
          height: Math.round(job.extract.height * meta.height),
        });
      }

      pipeline = pipeline.resize({
        width: job.width,
        height: job.height,
        fit: job.height ? (job.fit ?? "cover") : "inside",
        position: job.position ?? "centre",
        withoutEnlargement: true,
      });

      await pipeline.webp({ quality: 82, effort: 5 }).toFile(outPath);

      const [srcStat, outStat] = await Promise.all([stat(srcPath), stat(outPath)]);
      srcTotal += srcStat.size;
      outTotal += outStat.size;

      console.log(
        `  ok       ${job.out.padEnd(34)} ${kb(srcStat.size).padStart(9)} -> ${kb(outStat.size).padStart(8)}`
      );
      converted++;
    } catch (err) {
      console.error(`  FAILED   ${job.out}: ${err.message}`);
      failed++;
    }
  }

  console.log(
    `\n${converted} converted, ${skipped} skipped, ${failed} failed` +
      (converted ? `  —  ${kb(srcTotal)} -> ${kb(outTotal)}` : "")
  );

  if (failed) process.exitCode = 1;
}

run();
