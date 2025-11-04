// pages/blog.js or pages/blogs/index.js
// Blog Listing Page - Using Internal Next.js API

import React, { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { User, Calendar, Tag } from "lucide-react";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [blogData, setBlogData] = useState([]);
  const [categories, setCategories] = useState(["All"]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const blogsPerPage = 9;

  // Fetch blogs from internal API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        setError(null);

        console.log("Fetching blogs from internal API...");

        const response = await fetch("/api/blogs", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Fetched data:", data);

        if (data.success && data.data) {
          setBlogData(data.data);

          // Extract unique categories from blogs
          const uniqueCategories = [
            ...new Set(data.data.map((blog) => blog.category)),
          ];
          setCategories(["All", ...uniqueCategories]);

          console.log("Blogs loaded:", data.data.length);
          console.log("Categories:", uniqueCategories);
        } else {
          setError(data.error || "Failed to load blogs");
        }
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setError("Unable to load blogs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Filter blogs by selected category
  const filteredBlogs = useMemo(() => {
    if (selectedCategory === "All") {
      return blogData;
    }
    return blogData.filter((blog) => blog.category === selectedCategory);
  }, [selectedCategory, blogData]);

  // Pagination calculations
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  // Reset to page 1 when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  // Loading state
  if (loading) {
    return (
      <>
        <Head>
          <title>Loading... | TheCorrelation Blogs</title>
        </Head>
        <div className="bg-yellow-50 px-4 md:px-12 py-8 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-orange-500 mx-auto mb-4"></div>
            <p className="text-gray-700 text-lg font-medium">
              Loading blogs...
            </p>
            <p className="text-gray-500 text-sm mt-2">Please wait</p>
          </div>
        </div>
      </>
    );
  }

  // Error state
  if (error) {
    return (
      <>
        <Head>
          <title>Error | TheCorrelation Blogs</title>
        </Head>
        <div className="bg-yellow-50 px-4 md:px-12 py-8 min-h-screen flex items-center justify-center">
          <div className="text-center max-w-md">
            <div className="text-red-500 text-6xl mb-4">⚠️</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Oops! Something went wrong
            </h2>
            <p className="text-red-500 text-lg mb-6">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors font-medium shadow-lg"
            >
              Try Again
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>TheCorrelation Blogs | Insights & Articles</title>
        <meta
          name="description"
          content="Discover insightful articles, expert opinions, and the latest trends in our Blogs section at TheCorrelation."
        />
        <meta property="og:title" content="TheCorrelation Blogs" />
        <meta
          property="og:description"
          content="Read the latest blogs on AI, Data Science, and Technology by industry experts."
        />
        <meta property="og:image" content="/og-image.jpg" />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="bg-yellow-50 px-4 md:px-12 py-14 min-h-screen">
        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-orange-500">
          TheCorrelation Blogs
        </h1>
        <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto">
          Discover insightful articles, expert opinions, and the latest trends
          in our Blogs section.
        </p>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-orange-500 text-white border-orange-500 shadow-lg scale-105"
                  : "bg-white text-gray-800 border-gray-400 hover:bg-gray-100 hover:border-orange-300"
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Cards Grid */}
        {currentBlogs.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📝</div>
            <p className="text-gray-600 text-xl font-medium">
              No blogs found in this category
            </p>
            <p className="text-gray-500 mt-2">
              Try selecting a different category
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {currentBlogs.map((blog) => (
                <motion.div
                  key={blog.slug}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link href={`/blog/${blog.slug}`} legacyBehavior>
                    <a className="block rounded-2xl shadow-xl overflow-hidden bg-white hover:shadow-2xl transition-shadow">
                      {/* Blog Image */}
                      <div className="w-full h-48 relative bg-gray-200">
                        {blog.image ? (
                         <img
  src={blog.image}
  alt={blog.title}
  loading="lazy"
  className="object-cover w-full h-full rounded-xl"
/>

                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400 text-4xl">
                            📄
                          </div>
                        )}
                      </div>

                      {/* Blog Content */}
                      <div className="p-5">
                        <h3 className="text-lg text-orange-500 font-semibold mb-2 line-clamp-2 hover:text-orange-600 transition-colors">
                          {blog.title}
                        </h3>

                        <p className="text-gray-600 text-sm mb-3 flex flex-col gap-2">
                          {/* Author */}
                          <span className="flex items-center gap-2">
                            <User size={14} className="text-orange-500" />
                            <span>{blog.author}</span>
                          </span>

                          {/* Date */}
                          <span className="flex items-center gap-2">
                            <Calendar size={14} className="text-orange-500" />
                            <span>{new Date(blog.date).toDateString()}</span>
                          </span>

                          {/* Category */}
                          <span className="flex items-center gap-2">
                            <Tag size={14} className="text-orange-500" />
                            <span className="px-2 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-medium">
                              {blog.tags}
                            </span>
                          </span>
                        </p>

                        <p className="text-sm text-gray-700 line-clamp-3 mb-3">
                          {blog.excerpt}
                        </p>

                        <span className="text-orange-500 text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                          Read more
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </span>
                      </div>
                    </a>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center mt-8 gap-2 flex-wrap">
                {/* Previous Button */}
                {currentPage > 1 && (
                  <button
                    onClick={() => setCurrentPage(currentPage - 1)}
                    className="px-4 py-2 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors rounded-full font-medium"
                  >
                    « Previous
                  </button>
                )}

                {/* Page Numbers */}
                {[...Array(totalPages)].map((_, idx) => {
                  const pageNum = idx + 1;
                  if (
                    pageNum === 1 ||
                    pageNum === totalPages ||
                    (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)
                  ) {
                    return (
                      <button
                        key={idx}
                        onClick={() => setCurrentPage(pageNum)}
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
                          currentPage === pageNum
                            ? "bg-orange-500 text-white shadow-lg scale-110"
                            : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  } else if (
                    pageNum === currentPage - 2 ||
                    pageNum === currentPage + 2
                  ) {
                    return (
                      <span key={idx} className="text-gray-400">
                        ...
                      </span>
                    );
                  }
                  return null;
                })}

                {/* Next Button */}
                {currentPage < totalPages && (
                  <button
                    onClick={() => setCurrentPage(currentPage + 1)}
                    className="px-4 py-2 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors rounded-full font-medium"
                  >
                    Next »
                  </button>
                )}
              </div>
            )}

            {/* Results Info */}
            <p className="text-center text-gray-500 text-sm mt-6">
              Showing {indexOfFirstBlog + 1} -{" "}
              {Math.min(indexOfLastBlog, filteredBlogs.length)} of{" "}
              {filteredBlogs.length} blogs
              {selectedCategory !== "All" && ` in ${selectedCategory}`}
            </p>
          </>
        )}
      </div>
    </>
  );
};

export default Blog;
