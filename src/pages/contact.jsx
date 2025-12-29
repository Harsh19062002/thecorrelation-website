"use client";

import React from "react";
import { toast, Toaster } from "react-hot-toast";
import Head from "next/head";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Us | TheCorrelation</title>

        <meta
          name="description"
          content="Get in touch with TheCorrelation for Data Science, AI, and Analytics programs. Contact our admissions team for guidance, support, and enrollment details."
        />
      </Head>
      <div className="bg-gray-100">
        <Toaster position="top-center" reverseOrder={false} />

        {/* How To Enroll Section */}
        <section className="py-24 px-4 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-red-600">
              Our Process ——
            </h2>
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">
              How To Enroll
            </h3>
            <p className="text-lg text-gray-600">
              Start your journey with The Correlation by scheduling a
              personalized consultation to discuss your data science goals.
              Receive tailored career counseling and choose from flexible
              payment options to suit your needs.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6 border border-red-100">
            <div>
              <h4 className="text-xl font-semibold mb-1 text-red-600">
                Book a Call
              </h4>
              <p className="text-gray-600">
                Schedule a personalized consultation to discuss your data
                science learning goals and needs.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-1 text-red-600">
                Career Counselling
              </h4>
              <p className="text-gray-600">
                Receive expert advice tailored to your career aspirations in
                data science and development.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-1 text-red-600">
                Flexible Payment Option
              </h4>
              <p className="text-gray-600">
                Choose from various payment plans to suit your financial
                situation and preferences.
              </p>
            </div>
          </div>
        </section>

        {/* Reach Out Form - Placeholder */}
        <section className="py-16 px-4 max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-red-100">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
              Reach Out to <span className="text-red-600">Us</span>
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Fill out the form below and we'll get back to you as soon as
              possible.
            </p>

            {/* Form placeholder - replace with your ReachOutForm component */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-red-600"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-red-600"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-red-600"
                  placeholder="+91 12345 67890"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-red-600"
                  placeholder="How can we help?"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-red-600"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>

              <div className="md:col-span-2 text-center">
                <button
                  type="button"
                  className="px-8 py-3 bg-red-600 text-white rounded-md font-medium hover:shadow-xl transition-shadow"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Office Location Section */}
        <section className="py-16 px-4 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg space-y-6 border border-red-100">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-red-600">
                Our Office –
              </h3>
              <p className="leading-relaxed text-gray-900">
                TheCorrelation, Third Floor, Plot No 275, PU4, <br />
                behind Malhar Mega Mall, Scheme 54 PU4, <br />
                Indore, Madhya Pradesh 452011
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 text-red-600">
                Contact –
              </h3>
              <p className="text-gray-600">📞 +91 74153 46222</p>
              <p className="text-gray-600">📧 admissions@thecorrelation.in</p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow-lg border border-red-100">
            <iframe
              title="TheCorrelation Location"
              src="https://www.google.com/maps?q=TheCorrelation,+Third+Floor,+Plot+No+275,+PU4,+behind+Malhar+Mega+Mall,+Scheme+54,+Indore,+Madhya+Pradesh+452011&output=embed"
              width="100%"
              height="350"
              className="rounded-xl w-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
