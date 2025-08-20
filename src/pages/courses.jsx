"use client"; // Optional if you use app directory or want to ensure client-side rendering

import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import courseContent from "@/data/courseContent"; // adjust path if needed

const Courses = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedCourseKey, setSelectedCourseKey] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const handleDownloadClick = (courseKey) => {
    setSelectedCourseKey(courseKey);
    setShowForm(true);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (selectedCourseKey) {
      const selectedCourse = courseContent[selectedCourseKey];
      const brochureLink = selectedCourse?.brochure || "/brochure.pdf";
      const courseName = selectedCourse?.title || "Unknown Course";

      const link = document.createElement("a");
      link.href = brochureLink;
      link.download = `${courseName.replace(/\s+/g, "-")}-Brochure.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      toast.success("Brochure downloaded successfully!");
    }

    setFormData({ name: "", email: "", phone: "" });
    setShowForm(false);
  };

  return (
    <div className="bg-orange-50 min-h-screen">
      <Toaster position="top-center" />

      {/* Header */}
      <section className="text-center py-12 px-4">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-b from-orange-500 to-yellow-400 bg-clip-text text-transparent">
          Explore Our Courses
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          Unlock your full potential with our comprehensive, industry-ready courses crafted by experts.
        </p>
      </section>

      {/* Course Cards */}
      <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">
        {Object.entries(courseContent).map(([key, course]) => (
          <div
            key={key}
            className="bg-white rounded-2xl shadow-md p-6 space-y-4 transition duration-300 ease-in-out transform hover:shadow-xl hover:scale-[1.02]"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-40 object-contain rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold text-yellow-400">{course.title}</h3>
            <p className="text-gray-800">{course.description}</p>
            <ul className="list-disc list-inside text-gray-700">
              {course.topics.map((topic, i) => (
                <li key={i}>{topic}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href={course.paymentLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition inline-block text-center"
              >
                Enroll Now
              </a>
              <button
                onClick={() => handleDownloadClick(key)}
                className="px-4 py-2 rounded-lg border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-100 transition"
              >
                Download Brochure
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="py-12 text-center px-4 bg-white">
        <h2 className="text-3xl font-bold mb-3 text-gray-800">Ready to Upgrade Your Skills?</h2>
        <p className="mb-6 text-gray-600">Enroll today and step into your tech future.</p>
        <button className="px-6 py-3 rounded-full bg-orange-500 text-white transition hover:bg-orange-600">
          Browse All Programs
        </button>
      </section>

      {/* Form Popup */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <form
            onSubmit={handleFormSubmit}
            className="bg-white w-[90%] max-w-md p-6 rounded-xl shadow-2xl space-y-4 relative"
          >
            <h3 className="text-xl font-semibold mb-4 text-orange-500">Download Brochure</h3>

            <div>
              <label className="block text-sm font-medium text-gray-800">Your Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                placeholder="E.g. John Doe"
                required
                className="w-full border border-yellow-400 text-black px-4 py-2 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-800">Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                placeholder="E.g. john@doe.com"
                required
                className="w-full border border-yellow-400 text-black px-4 py-2 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-800">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleFormChange}
                placeholder="E.g. +1 3004005000"
                required
                className="w-full border border-yellow-400 text-black px-4 py-2 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div className="flex justify-between items-center mt-4">
              <button
                type="submit"
                className="px-6 py-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="text-gray-600 hover:underline"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Courses;
