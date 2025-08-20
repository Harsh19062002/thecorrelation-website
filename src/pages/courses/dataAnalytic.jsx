import React, { useState } from "react";
import toast from "react-hot-toast";

const DataAnalytic = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

   console.log("Brochure form submitted:");
    console.log("User Details:", formData);
    console.log("Course: Career Acceleration");

    const brochureLink = "/brochures/applied-data-science.pdf";
    const link = document.createElement("a");
    link.href = brochureLink;
    link.download = "Applied-Data-Science-Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success("Brochure downloaded!");
    setShowForm(false);
    setFormData({ name: "", email: "", phone: "" });
  };

  return (
    <section className="bg-orange-50 py-16 px-4 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <div className="space-y-4">
          <div className="flex gap-2 flex-wrap">
            <span className="bg-orange-500 text-white px-3 py-1 text-sm rounded-full">
              Bestseller
            </span>
            <span className="bg-yellow-400 text-white px-3 py-1 text-sm rounded-full">
              Popular
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold">
            <span className="bg-gradient-to-b from-orange-500 to-yellow-400 bg-clip-text text-transparent">
              Data Analytic
            </span>
          </h2>

          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Program
          </h3>

          <p className="text-gray-600">
            The Certification Programs at TheCorrelation are designed to help
            students / working professionals excel at being Data Scientist
            without leaving their Studies / Jobs.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow text-gray-800 font-medium">
              Type: PG Program
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-gray-800 font-medium">
              Mode: Offline / Hybrid
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-gray-800 font-medium">
              Duration: 1 Year / 12 Months
            </div>
          </div>

          <div className="flex gap-4 mt-6 flex-wrap">
            <a
              href="https://buy.stripe.com/test_pg-data-science"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg text-sm font-medium transition-all"
            >
              Enroll Now
            </a>
            <button
              onClick={() => setShowForm(true)}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg text-sm font-medium transition-all"
            >
              Download Brochure
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <img
            src="/Dummy.png"
            alt="Data Science Program"
            className="max-w-full w-full md:max-w-[90%] lg:max-w-[80%] mx-auto"
          />
        </div>
      </div>

      {/* Popup Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-[90%] max-w-md shadow-xl">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Download Brochure
            </h3>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleFormChange}
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleFormChange}
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleFormChange}
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>

              <div className="flex justify-between mt-4">
                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default DataAnalytic;
