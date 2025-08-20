import React from "react";
import Image from "next/image";

const PlacementOverview = () => {
  return (
    <div>
      <section className="bg-white py-12 px-4 md:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-yellow-500 font-medium mb-2">OVERVIEW ——</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What our{" "}
              <span className="bg-gradient-to-b from-orange-500 to-yellow-400 text-transparent bg-clip-text">
                Students
              </span>{" "}
              have accomplished
            </h2>
            <p className="text-gray-600 max-w-2xl mb-8 leading-relaxed">
              <span className="text-yellow-500 font-semibold">
                TheCorrelation
              </span>{" "}
              is a platform that provides online learning services that can help
              improve skills to prepare for future careers. We have been
              established since 5 years ago.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://thecorrelation.co.in/about-us"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 rounded-lg bg-orange-500 text-white font-semibold hover:bg-orange-600 transition text-center"
              >
                Contact Us
              </a>
              <a
                href="https://thecorrelation.co.in/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 rounded-lg bg-gray-200 text-gray-800 font-semibold hover:bg-gray-300 transition text-center"
              >
                Download Placement Report
              </a>
            </div>
          </div>

          <div>
            <img
              src="https://thecorrelation.co.in/wp-content/uploads/2024/03/learnsphere_banner.webp"
              alt="Student accomplishments"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlacementOverview;
