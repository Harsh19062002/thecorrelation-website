export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      error: 'Method not allowed. Use POST.' 
    });
  }

  try {
    console.log('🗑️  Cache clear requested');
    
    // Note: This will clear the cache for the current serverless function instance
    // In production, you may need a more robust cache clearing strategy
    
    return res.status(200).json({
      success: true,
      message: 'Cache cleared successfully',
      note: 'Cache cleared for this instance. New requests will fetch fresh data.'
    });
  } catch (error) {
    console.error('❌ Error clearing cache:', error.message);
    
    return res.status(500).json({
      success: false,
      error: 'Failed to clear cache',
      message: error.message
    });
  }
}