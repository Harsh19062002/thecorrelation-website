import axios from 'axios';

// In-memory cache
let cache = {
  data: null,
  timestamp: null,
  ttl: 5 * 60 * 1000 // 5 minutes in milliseconds
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
    // Check if cache is valid
    const now = Date.now();
    if (cache.data && cache.timestamp && (now - cache.timestamp < cache.ttl)) {
      
      return res.status(200).json({
        success: true,
        data: cache.data,
        source: 'cache',
        count: cache.data.length
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
      timeout: 10000
    });

    if (response.data && response.data.success) {
      // Update cache
      cache.data = response.data.data;
      cache.timestamp = now;
      
      
      
      return res.status(200).json({
        success: true,
        data: response.data.data,
        source: 'fresh',
        count: response.data.count || response.data.data.length,
        timestamp: response.data.timestamp
      });
    } else {
      return res.status(500).json({
        success: false,
        error: 'Failed to fetch blogs from Google Sheets'
      });
    }
  } catch (error) {
    console.error('❌ Error fetching blogs:', error.message);
    
    return res.status(500).json({
      success: false,
      error: 'Internal server error',
      message: error.message
    });
  }
}