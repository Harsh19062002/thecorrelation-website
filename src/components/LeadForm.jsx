"use client";

import React, { useState, useEffect } from "react";
import { 
  BookOpen, Users, TrendingUp, Award, Target, Star, CheckCircle, ArrowRight, Sparkles
} from "lucide-react";

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    education: "",
    background: "",
    employment: "",
  });

  const [progress, setProgress] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("");
  const [courseName, setCourseName] = useState("");
  const [courseDisplayName, setCourseDisplayName] = useState("");

  // Course mapping for display names
  const courseMapping = {
    "chartered-data-scientist": "Chartered Data Scientist",
    "chartered-business-analytics": "Chartered Business Analytics", 
    "post-graduation-program": "Post Graduation Program",
    "general": "Our Program"
  };

  // Extract course name from URL on component mount
  useEffect(() => {
    const extractCourseFromURL = () => {
      const currentPath = window.location.pathname;
      const pathSegments = currentPath.replace(/^\/+/, '').split('/');
      const courseFromURL = pathSegments[0] || 'general';
      
      setCourseName(courseFromURL);
      setCourseDisplayName(
        courseMapping[courseFromURL] || 
        courseFromURL.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
      );
    };

    extractCourseFromURL();
  }, []);

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        setToastMessage("");
        setToastType("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOptionClick = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const showToast = (message, type) => {
    setToastMessage(message);
    setToastType(type);
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateForm = () => {
    if (!formData.name.trim()) return "Name is required";
    if (!formData.phone.trim()) return "Phone number is required";
    if (!formData.email.trim()) return "Email is required";
    if (!validateEmail(formData.email)) return "Invalid email format";
    if (!formData.education) return "Education level is required";
    if (!formData.background) return "Educational background is required";
    if (!formData.employment) return "Employment status is required";
    return null;
  };

  useEffect(() => {
    const filled = Object.values(formData).filter((val) => val.trim()).length;
    setProgress(Math.round((filled / 6) * 100));
  }, [formData]);

  // Submit to Next.js API route - No more CORS issues!
  const submitForm = async (data) => {
  try {
    
    
    const response = await fetch('/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    

    const result = await response.json();
    

    if (!response.ok || !result.success) {
      return { success: false, error: result.error || `HTTP error! status: ${response.status}` };
    }

    return { success: true, message: result.message, result };

  } catch (error) {
    
    return { success: false, error: error.message || "Unexpected error occurred" };
  }
};

  const handleSubmit = async (e) => {
  e.preventDefault();
  const error = validateForm();
  if (error) return showToast(error, "error");

  setIsSubmitting(true);

  try {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const year = now.getFullYear();
    const formattedTimestamp = `${hours}:${minutes} - ${day}/${month}/${year}`;

    const submissionData = {
      ...formData,
      courseName: courseName,
      timestamp: formattedTimestamp,
    };

    

    const result = await submitForm(submissionData);

    if (!result.success) {
      showToast(result.error || "Submission failed", "error");
      return;
    }

    showToast(result.message || "Submission successful", "success");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 8000);

  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <div id="contact-form" className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 mt-4 mb-4">
      {/* Toast Notification */}
      {toastMessage && (
        <div className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 rounded-lg shadow-lg transition-all duration-300 ${
          toastType === "success" 
            ? "bg-green-500 text-white" 
            : "bg-red-500 text-white"
        }`}>
          <div className="flex items-center space-x-2">
            {toastType === "success" ? (
              <CheckCircle className="h-5 w-5" />
            ) : (
              <div className="h-5 w-5 rounded-full border-2 border-white flex items-center justify-center">
                <span className="text-xs font-bold">!</span>
              </div>
            )}
            <span className="font-medium">{toastMessage}</span>
          </div>
        </div>
      )}
      
      <div className="flex min-h-screen">
        {/* Left Side - Dynamic Content Based on Course */}
        <div className="hidden md:flex md:w-1/2 lg:w-1/2 bg-gradient-to-br from-violet-500 via-purple-600 to-indigo-700 p-8 lg:p-16 flex-col justify-center relative overflow-hidden rounded-xl ml-4">
          <div className="relative z-10 text-white">
            <Star className="h-10 w-10 fill-yellow-400 text-yellow-400 animate-bounce ml-20 mb-15"/>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 mb-8">
              <Sparkles className="h-4 w-4 text-amber-400 mr-2" />
              <span className="text-sm font-medium text-amber-200">Limited Time Offer</span>
            </div>

            <div className="mb-12">
              <h1 className="text-6xl lg:text-7xl font-bold mb-6 leading-none">
                <span className="bg-gradient-to-r from-white via-purple-100 to-pink-100 bg-clip-text text-transparent">
                  Master
                </span>
                <br />
                <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
                  {courseDisplayName || "Your Career"}
                </span>
              </h1>
              <p className="text-xl text-purple-100 leading-relaxed max-w-md">
                {courseDisplayName 
                  ? `Become an expert in ${courseDisplayName.toLowerCase()} with our comprehensive program` 
                  : "Take the first step towards transforming your career with our exclusive program"
                }
              </p>
            </div>

            <div className="space-y-4 mb-12">
              <div className="flex items-center space-x-4 group">
                <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full group-hover:scale-150 transition-transform"></div>
                <span className="text-lg text-purple-100">Personalized Learning Path</span>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full group-hover:scale-150 transition-transform"></div>
                <span className="text-lg text-purple-100">Industry Expert Mentorship</span>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full group-hover:scale-150 transition-transform"></div>
                <span className="text-lg text-purple-100">Lifetime Community Access</span>
              </div>
            </div>

            <div className="flex items-center text-amber-300 group cursor-pointer">
              <span className="text-lg font-medium mr-3">Start your journey</span>
              <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
            </div>

            <div className="absolute -bottom-8 -right-8 opacity-10">
              <div className="w-64 h-64 border border-white/20 rounded-full"></div>
              <div className="absolute top-8 left-8 w-48 h-48 border border-white/20 rounded-full"></div>
              <div className="absolute top-16 left-16 w-32 h-32 border border-white/20 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 lg:w-2/5 flex items-center justify-center p-4 lg:p-8">
          <div className="w-full max-w-md bg-white bg-opacity-95 backdrop-blur-md p-6 lg:p-8 rounded-2xl shadow-2xl border border-white/20">
            {!submitted ? (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    {courseDisplayName ? `Apply for ${courseDisplayName}` : "Let's Get Started"}
                  </h2>
                  <p className="text-gray-600">Just a minute to get started</p>
                  
                </div>

                <div className="mb-6">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Progress</span>
                    <span>{progress}% Complete</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </div>

                <input
                  name="name"
                  placeholder="Full Name"
                  className="w-full p-3 rounded-lg border text-black border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  onChange={handleChange}
                  value={formData.name}
                />

                <div>
                  <label className="block text-sm mb-2 font-medium text-gray-700">
                    Education Level
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {["schooling", "graduation", "postgraduate", "Diploma"].map((val) => (
                      <button
                        type="button"
                        key={val}
                        className={`w-full px-3 py-2 rounded-lg text-sm font-medium border-2 transition-all duration-200 ${
                          formData.education === val
                            ? "bg-indigo-600 text-white border-indigo-600"
                            : "bg-white text-gray-700 border-gray-300 hover:border-indigo-400"
                        }`}
                        onClick={() => handleOptionClick("education", val)}
                      >
                        {val.charAt(0).toUpperCase() + val.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-2 font-medium text-gray-700">
                    Educational Background
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {["commerce", "science-engineering", "arts", "others"].map((val) => (
                      <button
                        type="button"
                        key={val}
                        className={`px-3 py-2 rounded-lg text-sm font-medium border-2 transition-all duration-200 ${
                          formData.background === val
                            ? "bg-indigo-600 text-white border-indigo-600"
                            : "bg-white text-gray-700 border-gray-300 hover:border-indigo-400"
                        }`}
                        onClick={() => handleOptionClick("background", val)}
                      >
                        {val.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-2 font-medium text-gray-700">
                    Employment Status
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    {["studying", "working", "Self-Employed", "on-break"].map((val) => (
                      <button
                        type="button"
                        key={val}
                        className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium border-2 transition-all duration-200 ${
                          formData.employment === val
                            ? "bg-indigo-600 text-white border-indigo-600"
                            : "bg-white text-gray-700 border-gray-300 hover:border-indigo-400"
                        }`}
                        onClick={() => handleOptionClick("employment", val)}
                      >
                        {val.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                      </button>
                    ))}
                  </div>
                </div>

                <input
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full p-3 rounded-lg border text-black border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  onChange={handleChange}
                  value={formData.phone}
                />

                <input
                  name="email"
                  placeholder="Email Address"
                  className="w-full p-3 rounded-lg border text-black border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  onChange={handleChange}
                  value={formData.email}
                />

                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`w-full py-3 font-semibold rounded-lg transition-all duration-200 ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 hover:shadow-lg transform hover:scale-105"
                  } text-white`}
                >
                  {isSubmitting ? "Submitting..." : "Apply Now"}
                </button>
              </div>
            ) : (
              <div className="text-center p-6 bg-green-50 border border-green-200 rounded-lg">
                <div className="text-4xl text-green-600 font-bold mb-2">✓</div>
                <h3 className="text-xl font-semibold text-green-800 mb-1">
                  Application Submitted!
                </h3>
                <p className="text-green-700">
                  Our experts will contact you within 24 hours{courseDisplayName && ` for ${courseDisplayName}`}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadForm;