// pages/blog.js or pages/blogs/index.js
// Blog Listing Page - Red & White Theme

import React, { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import { User, Calendar, Tag } from "lucide-react";
import Head from "next/head";

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
        

        if (data.success && data.data) {
          setBlogData(data.data);

          const uniqueCategories = [
            ...new Set(data.data.map((blog) => blog.category)),
          ];
          setCategories(["All", ...uniqueCategories]);

          
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

  // Debug: Check image URLs after data loads
  useEffect(() => {
    if (blogData.length > 0) {
      console.log('=== IMAGE DEBUG ===');
      blogData.slice(0, 3).forEach((blog, i) => {
        console.log(`Blog ${i + 1}:`, {
          title: blog.title,
          hasImage: !!blog.image,
          imageUrl: blog.image,
          urlLength: blog.image?.length,
          startsCorrectly: blog.image?.startsWith('https://drive.google.com/uc'),
          fullImage: blog.image
        });
      });
    }
  }, [blogData]);

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
      <div className="bg-gray-100 px-4 md:px-12 py-8 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-red-600 mx-auto mb-4"></div>
          <p className="text-gray-900 text-lg font-medium">
            Loading blogs...
          </p>
          <p className="text-gray-600 text-sm mt-2">Please wait</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="bg-gray-100 px-4 md:px-12 py-8 min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="text-red-600 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Oops! Something went wrong
          </h2>
          <p className="text-red-600 text-lg mb-6">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-red-600 text-white rounded-full hover:shadow-xl transition-shadow font-medium"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
    

<Head>
  {/* Primary SEO */}
  <title>Data Science & AI Blog | The Correlation</title>
  <meta
    name="description"
    content="Explore expert-written blogs on Data Science, Machine Learning, AI, Analytics, and career guidance. Learn from industry professionals at The Correlation."
  />
  <meta
    name="keywords"
    content="Data Science Blog, Machine Learning Blog, AI Blog, Analytics Blog, Data Science Tutorials, AI Careers, Machine Learning Insights, The Correlation"
  />
  
</Head>

    <div className="bg-gray-100 px-4 md:px-12 py-24 min-h-screen">
      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
        TheCorrelation <span className="text-red-600">Blogs</span>
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
                ? "bg-red-600 text-white border-red-600 shadow-lg"
                : "bg-white text-gray-800 border-gray-300 hover:border-red-600 hover:shadow-md"
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
          <p className="text-gray-900 text-xl font-medium">
            No blogs found in this category
          </p>
          <p className="text-gray-600 mt-2">
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
                className="h-full"
              >
                <a 
                  href={`/blog/${blog.slug}`}
                  className="flex flex-col h-full rounded-2xl shadow-lg overflow-hidden bg-white border border-red-100 hover:shadow-2xl transition-shadow"
                >
                  {/* Blog Image - Fixed Height */}
                  <div className="w-full h-48 relative bg-gray-200 overflow-hidden flex-shrink-0">
                    {blog.image ? (
                      <img
                        src={`/api/image-proxy?url=${encodeURIComponent(blog.image)}`}
                        alt={blog.title}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover"
                        style={{ display: 'block' }}
                        onError={(e) => {
                          console.error('❌ Image failed to load:', {
                            title: blog.title,
                            url: blog.image,
                            error: e
                          });
                          e.target.style.display = 'none';
                          const fallback = document.createElement('div');
                          fallback.className = 'w-full h-full flex items-center justify-center bg-gray-200 text-gray-400 text-4xl';
                          fallback.textContent = '📄';
                          e.target.parentElement.appendChild(fallback);
                        }}
                        
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400 text-4xl">
                        📄
                      </div>
                    )}
                  </div>

                  {/* Blog Content - Flex Grow */}
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="text-lg text-gray-900 font-semibold mb-2 line-clamp-2  transition-colors">
                      {blog.title}
                    </h3>

                    <div className="text-gray-600 text-sm mb-3 flex flex-col gap-2">
                      {/* Author */}
                      <span className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0">
                          <User size={12} className="text-white" />
                        </div>
                        <span>{blog.author}</span>
                      </span>

                      {/* Date */}
                      <span className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0">
                          <Calendar size={12} className="text-white" />
                        </div>
                        <span>{new Date(blog.date).toDateString()}</span>
                      </span>

                      {/* Category */}
                      <span className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0">
                          <Tag size={12} className="text-white" />
                        </div>
                        <span className="px-2 py-1 bg-red-50 text-red-600 rounded-full text-xs font-medium border border-red-100">
                          {blog.tags}
                        </span>
                      </span>
                    </div>

                    <p className="text-sm text-gray-700 line-clamp-3 mb-3 flex-grow">
                      {blog.excerpt}
                    </p>

                    <span className="text-red-600 text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all mt-auto">
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
                  className="px-4 py-2 border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-colors rounded-full font-medium"
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
                          ? "bg-red-600 text-white shadow-lg"
                          : "bg-white text-gray-800 border border-gray-300 hover:border-red-600 hover:shadow-md"
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
                  className="px-4 py-2 border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-colors rounded-full font-medium"
                >
                  Next »
                </button>
              )}
            </div>
          )}

          {/* Results Info */}
          <p className="text-center text-gray-600 text-sm mt-6">
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