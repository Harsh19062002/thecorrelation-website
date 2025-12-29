const GOOGLE_APPS_SCRIPT_URL = process.env.GOOGLE_APPS_SCRIPT_URL_Submit;


export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      error: 'Method not allowed. Only POST requests are accepted.' 
    });
  }

  try {
    const formData = req.body;

    // Validate required fields
    const requiredFields = ['name', 'phone', 'email', 'education', 'background', 'employment'];
    const missingFields = requiredFields.filter(field => !formData[field]);
    
    if (missingFields.length > 0) {
      return res.status(400).json({
        success: false,
        error: `Missing required fields: ${missingFields.join(', ')}`
      });
    }

    // Validate phone number length
    if (formData.phone.length < 9 || formData.phone.length > 10) {
      return res.status(400).json({
        success: false,
        error: 'Phone number must be 9 or 10 digits long'
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid email format'
      });
    }

    // Add timestamp and URL info
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const year = now.getFullYear();
    const formattedTimestamp = `${hours}:${minutes} - ${day}/${month}/${year}`;

    const submissionData = {
      ...formData,
      timestamp: formattedTimestamp,
      baseUrl: req.headers.origin || 'unknown',
      fullUrl: req.headers.referer || 'unknown',
    };

    // Submit to your Google Apps Script (which handles sheets + email)
    const result = await submitToGoogleAppsScript(submissionData);

    

    return res.status(200).json({
      success: true,
      message: 'Form submitted successfully!',
      result: result
    });

  } catch (error) {
   
    return res.status(500).json({
      success: false,
      error: error.message || 'Internal server error'
    });
  }
}

// Submit to Google Apps Script (your existing setup handles sheets + email)
async function submitToGoogleAppsScript(data) {
  try {
    // Convert JSON to form-urlencoded format
    const formBody = new URLSearchParams();
    Object.keys(data).forEach(key => {
      formBody.append(key, data[key] || '');
    });

    

    const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'User-Agent': 'Next.js API Route'
      },
      body: formBody.toString(),
      redirect: 'follow' // Follow redirects if any
    });

    

    const responseText = await response.text();
    

    // Check if response is HTML (success page, error page, or redirect)
    if (responseText.includes('<html') || responseText.includes('<HTML') || responseText.includes('<!DOCTYPE')) {
      
      // Since the script is working (data is stored, email sent), 
      // we'll treat this as a successful submission
      if (response.status === 200) {
        
        return {
          success: true,
          message: 'Form submitted successfully (HTML response received but data was processed)',
          note: 'Google Apps Script returned HTML instead of JSON, but submission appears successful'
        };
      } else {
        // Try to extract error message from HTML
        let errorMessage = 'Unknown error';
        const titleMatch = responseText.match(/<title>(.*?)<\/title>/i);
        if (titleMatch) {
          errorMessage = titleMatch[1];
        }
        throw new Error(`Google Apps Script returned HTML error: ${errorMessage}`);
      }
    }

    // Try to parse JSON response
    let result;
    try {
      result = JSON.parse(responseText);
    } catch (parseError) {
      console.error('JSON parse error:', parseError);
      console.error('Response that failed to parse:', responseText);
      
      // If we get here but status is 200, assume success
      if (response.status === 200) {
        return {
          success: true,
          message: 'Form submitted successfully (non-JSON response received but data was processed)',
          note: 'Could not parse JSON response, but submission appears successful'
        };
      }
      
      throw new Error(`Invalid response format: ${responseText.substring(0, 200)}...`);
    }

    if (!result.success) {
      throw new Error(result.error || "Google Apps Script submission failed");
    }

    return result;

  } catch (error) {
    
    throw error;
  }
}