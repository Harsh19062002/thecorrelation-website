'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import blogData, { categories } from '@/data/BlogData';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 9;

  const filteredBlogs = useMemo(() => {
    return selectedCategory === 'All'
      ? blogData
      : blogData.filter((blog) => blog.category === selectedCategory);
  }, [selectedCategory]);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>TheCorrelation Blogs</title>
        <meta name="description" content="Discover insightful articles, expert opinions, and the latest trends in our Blogs section at TheCorrelation." />
        <meta property="og:title" content="TheCorrelation Blogs" />
        <meta property="og:description" content="Read the latest blogs on AI, Data Science, and Technology by industry experts." />
        <meta property="og:image" content="/og-image.jpg" />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="bg-yellow-50 px-4 md:px-12 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-orange-500">
          TheCorrelation Blogs
        </h1>
        <p className="text-center text-gray-700 mb-8">
          Discover insightful articles, expert opinions, and the latest trends in our Blogs section.
        </p>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
                selectedCategory === cat
                  ? 'bg-orange-500 text-white border-orange-500'
                  : 'bg-white text-gray-800 border-gray-400 hover:bg-gray-100'
              }`}
              onClick={() => {
                setSelectedCategory(cat);
                setCurrentPage(1);
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentBlogs.map((blog, idx) => (
            <motion.a
              key={idx}
              whileHover={{ scale: 1.03 }}
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl shadow-xl overflow-hidden bg-white"
            >
              <div className="w-full h-36 relative">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg text-orange-500 font-semibold mb-1">{blog.title}</h3>
                <p className="text-gray-600 text-sm mb-2">
                  {blog.author} • {blog.date} • {blog.category}
                </p>
                <p className="text-sm text-gray-700">{blog.excerpt}</p>
                <span className="text-orange-500 text-sm mt-2 inline-block font-medium">
                  Read more ↗
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8 gap-2 flex-wrap">
          {[...Array(totalPages)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentPage(idx + 1)}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm transition ${
                currentPage === idx + 1
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              {idx + 1}
            </button>
          ))}
          {currentPage < totalPages && (
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              className="text-sm px-3 py-1 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition rounded-full"
            >
              Next »
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Blog;
