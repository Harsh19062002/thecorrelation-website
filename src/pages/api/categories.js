import axios from 'axios';

// In-memory cache
let cache = {
  data: null,
  timestamp: null,
  ttl: 5 * 60 * 1000 // 5 minutes
};

export default async function handler(req, res) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ 
      success: false, 
      error: 'Method not allowed' 
    });
  }

  try {
    // Check cache
    const now = Date.now();
    if (cache.data && cache.timestamp && (now - cache.timestamp < cache.ttl)) {
      
      return res.status(200).json({
        success: true,
        data: cache.data,
        source: 'cache'
      });
    }

    // Fetch from Google Sheets
    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;
    
    if (!GOOGLE_SCRIPT_URL) {
      return res.status(500).json({
        success: false,
        error: 'Google Script URL not configured'
      });
    }

   
    
    const response = await axios.get(GOOGLE_SCRIPT_URL, {
      timeout: 10000
    });

    if (response.data && response.data.success && response.data.data) {
      // Extract unique categories
      const blogs = response.data.data;
      const uniqueCategories = [...new Set(blogs.map(blog => blog.category))].filter(Boolean);
      const categories = ['All', ...uniqueCategories];
      
      // Update cache
      cache.data = categories;
      cache.timestamp = now;
      
     
      
      return res.status(200).json({
        success: true,
        data: categories,
        source: 'fresh',
        count: categories.length
      });
    } else {
      return res.status(500).json({
        success: false,
        error: 'Failed to fetch categories'
      });
    }
  } catch (error) {
    console.error('❌ Error fetching categories:', error.message);
    
    return res.status(500).json({
      success: false,
      error: 'Internal server error',
      message: error.message
    });
  }
}