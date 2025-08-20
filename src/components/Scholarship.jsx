import React from "react";

const Scholarship = () => {
  return (
    <div>
      <section className="bg-white py-10 px-4 md:px-10 lg:px-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Image instead of Lottie */}
          <div className="w-full md:w-1/2">
            <img
              src="/Dummy.png"
              alt="Scholarship Banner"
              className="w-full h-auto"
            />
          </div>

          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-black leading-snug">
              Avail Upto{" "}
              <span className="bg-gradient-to-b from-orange-500 to-yellow-400 bg-clip-text text-transparent">
                50% Scholarship
              </span>{" "}
              on Select Courses!
            </h2>
            <p className="mt-4 text-gray-700 text-lg">
              Kickstart your career with our exclusive scholarships and financial aid options.
            </p>
            <a
              href="/scholarship"
              className="inline-block mt-6 px-6 py-3 rounded-full bg-orange-500 text-white font-semibold hover:bg-orange-600 transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Scholarship;
