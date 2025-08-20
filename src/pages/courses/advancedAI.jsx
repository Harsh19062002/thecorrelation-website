"use client";

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      message: e.target.message.value,
    };

    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbwBPW2nzU7FV2QTNW8S7X0GHiN0MOeK4ql9amo0aPiCnyNvhuoBimhz7NoTvsJBMlRs/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
          mode: "no-cors", // Prevent CORS error
        }
      );

      alert("✅ Form submitted successfully!");
      e.target.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Contact Us</h2>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Name</label>
          <input
            name="name"
            type="text"
            placeholder="Enter your name"
            required
            className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Email</label>
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            required
            className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Phone</label>
          <input
            name="phone"
            type="tel"
            placeholder="Enter your phone number"
            className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Message</label>
          <textarea
            name="message"
            placeholder="Your message..."
            rows="4"
            className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
