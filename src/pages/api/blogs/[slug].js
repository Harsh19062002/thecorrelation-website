import axios from 'axios';

// In-memory cache for individual blogs
let cache = {};

const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

export default async function handler(req, res) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ 
      success: false, 
      error: 'Method not allowed' 
    });
  }

  const { slug } = req.query;

  if (!slug) {
    return res.status(400).json({
      success: false,
      error: 'Slug parameter is required'
    });
  }

  try {
    // Check cache for this specific blog
    const now = Date.now();
    const cachedBlog = cache[slug];
    
    if (cachedBlog && (now - cachedBlog.timestamp < CACHE_TTL)) {
      
      return res.status(200).json({
        success: true,
        data: cachedBlog.data,
        source: 'cache'
      });
    }

    // Fetch from Google Sheets
    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL_Blog;
    
    if (!GOOGLE_SCRIPT_URL) {
      return res.status(500).json({
        success: false,
        error: 'Google Script URL not configured'
      });
    }

    
    
    const response = await axios.get(GOOGLE_SCRIPT_URL, {
      params: { slug: slug },
      timeout: 10000
    });

    if (response.data && response.data.success && response.data.data) {
      // Cache the blog
      cache[slug] = {
        data: response.data.data,
        timestamp: now
      };
      
      
      
      return res.status(200).json({
        success: true,
        data: response.data.data,
        source: 'fresh'
      });
    } else {
      return res.status(404).json({
        success: false,
        error: 'Blog not found',
        slug: slug
      });
    }
  } catch (error) {
    console.error(`❌ Error fetching blog ${slug}:`, error.message);
    
    return res.status(500).json({
      success: false,
      error: 'Internal server error',
      message: error.message
    });
  }
}