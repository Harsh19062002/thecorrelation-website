'use client';
import React from 'react';
import {
  Users,
  Award,
  Briefcase,
  GraduationCap,
} from 'lucide-react';

const CommitmentCard = () => {
  return (
    <section className="py-16 bg-yellow-50">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-orange-500 text-center mb-8">
            Our Commitment is Your Success
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <Users className="w-6 h-6 text-orange-500 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 text-lg">
                  One on One Counselling
                </h3>
                <p className="text-gray-600">With Teachers and Mentors</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Award className="w-6 h-6 text-orange-500 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 text-lg">
                  Real-time practicing faculties
                </h3>
                <p className="text-gray-600">From top colleges and companies</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Briefcase className="w-6 h-6 text-orange-500 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 text-lg">
                  Job Guarantee
                </h3>
                <p className="text-gray-600">
                  Placement opportunity in reputed companies
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <GraduationCap className="w-6 h-6 text-orange-500 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 text-lg">
                  Scholarship Available
                </h3>
                <p className="text-gray-600">
                  Pay Later Facilities for eligible students
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommitmentCard;
