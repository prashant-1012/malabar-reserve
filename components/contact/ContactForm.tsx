"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { Send } from "lucide-react";

const products = [
  "Black Pepper",
  "Green Cardamom",
  "Cinnamon",
  "All Products",
];

interface FormState {
  name: string;
  company: string;
  country: string;
  product: string;
  quantity: string;
  message: string;
}

const empty: FormState = {
  name: "",
  company: "",
  country: "",
  product: "",
  quantity: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(empty);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!form.name || !form.company || !form.country || !form.product || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    // Simulate network delay
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);

    toast.success(
      "Thank you! We'll get back to you within 24 hours.",
      { duration: 5000, icon: "🌿" }
    );
    setForm(empty);
  };

  const inputClass =
    "w-full font-inter text-sm text-brown bg-white border border-cream rounded-lg px-4 py-3 placeholder:text-brown/35 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-colors duration-200";

  const labelClass = "block font-inter text-xs font-semibold uppercase tracking-wider text-brown/60 mb-1.5";

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">

      {/* Name + Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelClass}>
            Full Name <span className="text-gold">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="John Smith"
            className={inputClass}
            required
          />
        </div>
        <div>
          <label htmlFor="company" className={labelClass}>
            Company Name <span className="text-gold">*</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={form.company}
            onChange={handleChange}
            placeholder="Acme Imports Ltd."
            className={inputClass}
            required
          />
        </div>
      </div>

      {/* Country + Product */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="country" className={labelClass}>
            Country <span className="text-gold">*</span>
          </label>
          <input
            id="country"
            name="country"
            type="text"
            value={form.country}
            onChange={handleChange}
            placeholder="United States"
            className={inputClass}
            required
          />
        </div>
        <div>
          <label htmlFor="product" className={labelClass}>
            Product Interest <span className="text-gold">*</span>
          </label>
          <select
            id="product"
            name="product"
            value={form.product}
            onChange={handleChange}
            className={`${inputClass} cursor-pointer`}
            required
          >
            <option value="" disabled>Select a product</option>
            {products.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Quantity */}
      <div>
        <label htmlFor="quantity" className={labelClass}>
          Quantity Required
        </label>
        <input
          id="quantity"
          name="quantity"
          type="text"
          value={form.quantity}
          onChange={handleChange}
          placeholder="e.g. 500 kg / month"
          className={inputClass}
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelClass}>
          Message <span className="text-gold">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          placeholder="Tell us about your requirements, timeline, or any specific questions..."
          className={`${inputClass} resize-none`}
          required
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="flex items-center justify-center gap-2.5 font-inter font-semibold text-sm px-8 py-4 rounded-lg bg-forest text-white hover:bg-forest/85 disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-200 mt-1"
      >
        {loading ? (
          <>
            <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
            Sending...
          </>
        ) : (
          <>
            <Send size={15} />
            Send Inquiry
          </>
        )}
      </button>

      <p className="font-inter text-xs text-brown/40 text-center">
        We respond to all inquiries within 24 business hours.
      </p>
    </form>
  );
}
