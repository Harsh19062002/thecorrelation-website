import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { ArrowLeft, User, Calendar, Tag, Share2, Twitter, Linkedin } from 'lucide-react';

const BlogDetail = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) return;

    const fetchBlog = async () => {
      try {
        setLoading(true);
        setError(null);

        console.log('Fetching blog:', slug);
        
        const response = await fetch(`/api/blogs/${slug}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Fetched blog data:', data);

        if (data.success && data.data) {
          setBlog(data.data);
        } else {
          setError('Blog not found');
        }
      } catch (err) {
        console.error('Error fetching blog:', err);
        setError('Unable to load blog. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

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
            <p className="text-gray-700 text-lg font-medium">Loading blog...</p>
          </div>
        </div>
      </>
    );
  }

  // Error state
  if (error || !blog) {
    return (
      <>
        <Head>
          <title>Blog Not Found | TheCorrelation</title>
        </Head>
        <div className="bg-yellow-50 px-4 md:px-12 py-8 min-h-screen flex items-center justify-center">
          <div className="text-center max-w-md">
            <div className="text-red-500 text-6xl mb-4">📝</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Blog Not Found</h2>
            <p className="text-gray-600 mb-6">{error || 'The blog you are looking for does not exist.'}</p>
            <Link href="/blog" legacyBehavior>
              <a className="inline-block px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors font-medium shadow-lg">
                Back to Blogs
              </a>
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>{blog.title} | TheCorrelation Blogs</title>
        <meta name="description" content={blog.excerpt} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.excerpt} />
        <meta property="og:image" content={blog.image} />
        <meta property="og:type" content="article" />
        <meta name="author" content={blog.author} />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="bg-yellow-50 min-h-screen">
        {/* Back Button */}
        <div className="px-4 md:px-12 py-14">
          <Link href="/blog" legacyBehavior>
            <a className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-medium transition-colors">
              <ArrowLeft className="w-5 h-5" />
              Back to Blogs
            </a>
          </Link>
        </div>

        {/* Blog Container */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto px-4 md:px-8 pb-12"
        >
          {/* Featured Image */}
          {blog.image && (
            <div className="w-full h-64 md:h-96 relative rounded-2xl overflow-hidden shadow-2xl mb-8">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 896px"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
          )}

          {/* Blog Header */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 mb-8">
            {/* Category Badge */}
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold">
                {blog.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              {blog.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 text-gray-600 text-sm md:text-base mb-6 pb-6 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 text-orange-500" />
                <span className="font-medium">{blog.author}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-orange-500" />
                <span>{new Date(blog.date).toDateString()}</span>
              </div>

              {blog.tags && (
                <div className="flex items-center gap-2">
                  <Tag className="w-5 h-5 text-orange-500" />
                  <span className="text-sm">{blog.tags}</span>
                </div>
              )}
            </div>

            {/* Excerpt */}
            {blog.excerpt && (
              <p className="text-lg md:text-xl text-gray-700 italic border-l-4 border-orange-500 pl-4 mb-6">
                {blog.excerpt}
              </p>
            )}
          </div>

          {/* Blog Content */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10">
            <div 
              className="prose prose-lg max-w-none
                prose-headings:text-gray-900 prose-headings:font-bold
                prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
                prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
                prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4
                prose-a:text-orange-500 prose-a:no-underline hover:prose-a:text-orange-600
                prose-strong:text-gray-900 prose-strong:font-semibold
                prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-4
                prose-ol:list-decimal prose-ol:pl-6 prose-ol:mb-4
                prose-li:text-gray-700 prose-li:mb-2
                prose-blockquote:border-l-4 prose-blockquote:border-orange-500 prose-blockquote:pl-4 prose-blockquote:italic
                prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
                prose-img:rounded-lg prose-img:shadow-lg"
              dangerouslySetInnerHTML={{ __html: blog.content.replace(/\n/g, '<br />') }}
            />
          </div>

          {/* Share Section */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Share this article</h3>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => {
                  const url = window.location.href;
                  const text = `Check out this article: ${blog.title}`;
                  if (navigator.share) {
                    navigator.share({ title: blog.title, text: text, url: url });
                  } else {
                    navigator.clipboard.writeText(url);
                    alert('Link copied to clipboard!');
                  }
                }}
                className="px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors font-medium shadow-lg flex items-center gap-2"
              >
                <Share2 className="w-5 h-5" />
                Share
              </button>
              
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.title)}&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors font-medium shadow-lg flex items-center gap-2"
              >
                <Twitter className="w-5 h-5" />
                Twitter
              </a>

              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-medium shadow-lg flex items-center gap-2"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Back to Blog Button */}
          <div className="text-center mt-8">
            <Link href="/blog" legacyBehavior>
              <a className="inline-block px-8 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors font-medium shadow-lg">
                View All Blogs
              </a>
            </Link>
          </div>
        </motion.article>
      </div>
    </>
  );
};

export default BlogDetail;