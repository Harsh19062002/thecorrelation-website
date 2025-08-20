"use client";

import React from "react";
import { toast, Toaster } from "react-hot-toast";
import ReachOutForm from "@/components/ReachOutForm";

const Contact = () => {
  return (
    <div className="bg-orange-200">
      <Toaster position="top-center" reverseOrder={false} />

      {/* How To Enroll Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-orange-500">
            Our Process ——
          </h2>
          <h3 className="text-2xl font-semibold mb-4 text-gray-900">
            How To Enroll
          </h3>
          <p className="text-lg text-gray-600">
            Start your journey with The Correlation by scheduling a personalized
            consultation to discuss your data science goals. Receive tailored
            career counseling and choose from flexible payment options to suit
            your needs.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
          <div>
            <h4 className="text-xl font-semibold mb-1 text-orange-500">
              Book a Call
            </h4>
            <p className="text-gray-600">
              Schedule a personalized consultation to discuss your data science
              learning goals and needs.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-1 text-orange-500">
              Career Counselling
            </h4>
            <p className="text-gray-600">
              Receive expert advice tailored to your career aspirations in data
              science and development.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-1 text-orange-500">
              Flexible Payment Option
            </h4>
            <p className="text-gray-600">
              Choose from various payment plans to suit your financial situation
              and preferences.
            </p>
          </div>
        </div>
      </section>

      {/* Reach Out Form */}
      <ReachOutForm />

      {/* Office Location Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="bg-white p-8 rounded-2xl shadow-lg space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-orange-500">
              Our Office –
            </h3>
            <p className="leading-relaxed text-gray-900">
              TheCorrelation, Second Floor, Plot No 275, PU4, <br />
              behind Malhar Mega Mall, Scheme 54 PU4, <br />
              Indore, Madhya Pradesh 452011
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 text-orange-500">
              Contact –
            </h3>
            <p className="text-gray-600">📞 +91 74153 46222</p>
            <p className="text-gray-600">📧 admissions@thecorrelation.in</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl shadow-lg">
          <iframe
            title="TheCorrelation Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.4556758032895!2d75.885938!3d22.714909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fc65e9155a55%3A0x8b6d9e41f7c5b82f!2sMalhar%20Mega%20Mall%2C%20Indore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1684488441685"
            width="100%"
            height="350"
            className="rounded-xl w-full"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
