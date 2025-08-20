'use client'; // Only required for Next.js App Router with client-side features like toast

import React from 'react';
import { toast, Toaster } from 'react-hot-toast';

const ReachOutForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    const formData = Object.fromEntries(data.entries());
    console.log('Form Submitted:', formData);

    // ✅ You can later replace this with an API POST request
    toast.success("Thanks for reaching out! We’ll get back to you shortly.");
    form.reset();
  };

  return (
    <section className="bg-white py-16 px-4">
      <Toaster position="top-center" reverseOrder={false} />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div className="order-1 md:order-2">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-4">
            Reach out ——
          </h2>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Still Confused? <br />
            Get Guidance Now!
          </h3>
          <p className="text-gray-600 text-lg">
            Book a counseling session now. Fill out our form to begin your journey toward clarity.
            Start taking steps to a brighter, clearer future today.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-yellow-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition-all space-y-6 order-2 md:order-1"
        >
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-gray-700 mb-1 font-medium">
              Your Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="E.g. John Doe"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-1 font-medium">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="E.g. john@doe.com"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-gray-700 mb-1 font-medium">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              placeholder="E.g. +91 9876543210"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ReachOutForm;
