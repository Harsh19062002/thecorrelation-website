import React from "react";
import Image from "next/image";

const Scholarship = () => {
  return (
    <div>
      <section className="bg-white py-10 px-4 md:px-10 lg:px-15">
  <div className="flex flex-col md:flex-row items-center justify-between gap-8">
    
    {/* Image */}
    <div className=" md:w-1/2 flex justify-center">
  <Image
    src="/Scholarship-banner.jpg"
    alt="Scholarship Banner"
    width={600}     // half-sized (adjust if needed)
    height={250}
    className="rounded-2xl border border-gray-200 shadow-md"
  />
</div>

    {/* Content */}
    <div className="w-full md:w-1/2 text-center md:text-left">
      <h2 className="text-3xl md:text-4xl font-bold text-black leading-snug">
        Avail Upto{" "}
        <span className="text-red-600">
          50% Scholarship
        </span>{" "}
        on Select Courses!
      </h2>

      <p className="mt-4 text-gray-700 text-lg">
        Kickstart your career with our exclusive scholarships and financial aid options designed to support ambitious learners and high-potential professionals.
      </p>

      <p className="mt-3 text-gray-600">
        Our scholarship program is merit-based and aims to identify motivated candidates who demonstrate strong aptitude, commitment, and career focus.
      </p>

      <ul className="mt-5 space-y-4 text-gray-700 text-base">
        <li>• Scholarships are awarded based on a qualifying assessment test</li>
        <li>• Candidate background and profile verification is mandatory</li>
        <li>• Limited scholarships available per cohort</li>
        <li>• Applicable on select Data Science and AI programs</li>
      </ul>

      <p className="mt-4 text-gray-600 text-sm">
        *Scholarship percentage may vary based on performance in the assessment and eligibility criteria.
      </p>
    </div>

  </div>
</section>

    </div>
  );
};

export default Scholarship;
