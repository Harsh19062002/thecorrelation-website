'use client';

function ColorCards() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-10xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            What's your favorite color?
          </h1>
        </div>

        {/* Color Cards Section */}
        <div className="flex justify-center items-center overflow-visible px-2">
          {/* Teal Card */}
          <div className="relative -mr-3 z-10 transition-transform duration-[400ms] ease-in-out transform-gpu origin-center hover:scale-[1.1] hover:z-50">
            <div className="w-20 h-40 md:w-60 md:h-120 bg-gradient-to-b from-teal-300 to-teal-600 rounded-2xl shadow-lg overflow-hidden">
              <img 
                src="/api/placeholder/96/192" 
                alt="Teal artwork"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Blue Card (with label) */}
          <div className="relative -mr-3 z-20 transition-transform duration-[400ms] ease-in-out transform-gpu origin-center hover:scale-[1.1] hover:z-50">
            <div className="w-20 h-40 md:w-60 md:h-120 bg-gradient-to-b from-blue-300 to-blue-600 rounded-2xl shadow-lg relative overflow-hidden">
              <img 
                src="/api/placeholder/96/192" 
                alt="Blue artwork"
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-3 left-3 text-white font-medium text-sm z-10">
                Blue
              </span>
            </div>
          </div>

          {/* Purple Card */}
          <div className="relative -mr-3 z-10 transition-transform duration-[400ms] ease-in-out transform-gpu origin-center hover:scale-[1.1] hover:z-50">
            <div className="w-20 h-40 md:w-60 md:h-120 bg-gradient-to-b from-purple-300 to-purple-600 rounded-2xl shadow-lg overflow-hidden">
              <img 
                src="/api/placeholder/96/192" 
                alt="Purple artwork"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Pink Card */}
          <div className="relative -mr-3 z-10 transition-transform duration-[400ms] ease-in-out transform-gpu origin-center hover:scale-[1.1] hover:z-50">
            <div className="w-20 h-40 md:w-60 md:h-120 bg-gradient-to-b from-pink-300 to-pink-600 rounded-2xl shadow-lg overflow-hidden">
              <img 
                src="/api/placeholder/96/192" 
                alt="Pink artwork"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Red Card */}
          <div className="relative -mr-3 z-10 transition-transform duration-[400ms] ease-in-out transform-gpu origin-center hover:scale-[1.1] hover:z-50">
            <div className="w-20 h-40 md:w-60 md:h-120 bg-gradient-to-b from-red-300 to-red-600 rounded-2xl shadow-lg overflow-hidden">
              <img 
                src="/api/placeholder/96/192" 
                alt="Red artwork"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          

          
          
        </div>

       
      </div>
    </div>
  );
}

export default ColorCards;