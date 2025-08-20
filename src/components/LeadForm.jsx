'use client';

import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    education: '',
    background: '',
    employment: '',
  });

  const [progress, setProgress] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOptionClick = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateForm = () => {
    if (!formData.name.trim()) return 'Name is required';
    if (!formData.phone.trim()) return 'Phone number is required';
    if (!formData.email.trim()) return 'Email is required';
    if (!validateEmail(formData.email)) return 'Invalid email format';
    if (!formData.education) return 'Education level is required';
    if (!formData.background) return 'Educational background is required';
    if (!formData.employment) return 'Employment status is required';
    return null;
  };

  useEffect(() => {
    const filled = Object.values(formData).filter((val) => val.trim()).length;
    setProgress(Math.round((filled / 6) * 100));
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = validateForm();
    if (error) return toast.error(error);

    console.log('Lead Form Submission:', formData);
    toast.success('Form submitted! We will connect with you soon.');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row mx-12 my-4 rounded-2xl shadow-xl overflow-hidden">
      <Toaster position="top-center" />

      {/* Left Side */}
      <div className="bg-gradient-to-br from-indigo-500 to-purple-600 lg:w-1/2 p-8 lg:p-12 text-white flex items-center justify-center">
        <div className="max-w-lg">
          <div className="text-6xl mb-6 font-bold text-yellow-300 animate-bounce">★</div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Transform Your Career with <span className="text-yellow-300">Expert Guidance</span>
          </h1>
          <p className="text-xl mb-8">Get personalized career counselling from industry experts.</p>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2"><span className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></span><span>1-on-1 Expert Consultation</span></li>
            <li className="flex items-center space-x-2"><span className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></span><span>Personalized Career Roadmap</span></li>
            <li className="flex items-center space-x-2"><span className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></span><span>100% Free Session</span></li>
          </ul>
          <div className="text-2xl font-semibold bg-yellow-300 text-purple-800 px-4 py-2 rounded-lg inline-block mt-8">
            Limited Time Offer!
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="bg-gradient-to-br from-indigo-500 to-purple-600 lg:w-1/2 p-8 lg:p-12 flex items-center justify-center">
        <div className="w-full max-w-md bg-white bg-opacity-90 backdrop-blur-md p-8 rounded-2xl shadow-xl">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-center mb-4">
                <h2 className="text-2xl font-bold text-gray-800">Book Your Free Session</h2>
                <p className="text-gray-600">Just 2 minutes to get started</p>
              </div>

              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Progress</span>
                  <span>{progress}% Complete</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-indigo-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>

              <input name="name" placeholder="Full Name" className="w-full p-3 rounded border" onChange={handleChange} />

              <div>
                <label className="block text-sm mb-1 font-medium">Education Level</label>
                <div className="flex gap-2">
                  {["schooling", "graduation", "postgraduate"].map((val) => (
                    <button
                      type="button"
                      key={val}
                      className={`option-btn px-3 py-2 rounded-lg text-sm border ${
                        formData.education === val ? 'bg-indigo-600 text-white' : 'bg-white text-black'
                      }`}
                      onClick={() => handleOptionClick('education', val)}
                    >
                      {val.charAt(0).toUpperCase() + val.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm mb-1 font-medium">Educational Background</label>
                <div className="grid grid-cols-2 gap-2">
                  {["commerce", "science-engineering", "arts", "others"].map((val) => (
                    <button
                      type="button"
                      key={val}
                      className={`option-btn px-3 py-2 rounded-lg text-sm border ${
                        formData.background === val ? 'bg-indigo-600 text-white' : 'bg-white text-black'
                      }`}
                      onClick={() => handleOptionClick('background', val)}
                    >
                      {val.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm mb-1 font-medium">Employment Status</label>
                <div className="flex gap-2">
                  {["studying", "working", "on-break"].map((val) => (
                    <button
                      type="button"
                      key={val}
                      className={`option-btn px-3 py-2 rounded-lg text-sm border ${
                        formData.employment === val ? 'bg-indigo-600 text-white' : 'bg-white text-black'
                      }`}
                      onClick={() => handleOptionClick('employment', val)}
                    >
                      {val.replace('-', ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
                    </button>
                  ))}
                </div>
              </div>

              <input name="phone" placeholder="Phone Number" className="w-full p-3 rounded border" onChange={handleChange} />
              <input name="email" placeholder="Email Address" className="w-full p-3 rounded border" onChange={handleChange} />

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded"
              >
                Get Free Counselling
              </button>
            </form>
          ) : (
            <div className="text-center p-6 bg-green-50 border border-green-200 rounded-lg">
              <div className="text-4xl text-green-600 font-bold mb-2">✓</div>
              <h3 className="text-xl font-semibold text-green-800 mb-1">Booking Confirmed!</h3>
              <p className="text-green-700">Our counsellor will contact you within 24 hours to schedule your free session.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeadForm;
