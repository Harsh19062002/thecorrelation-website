import React from "react";
import {
  UserCheck,
  ClipboardList,
  BadgePercent,
  CreditCard,
  BookOpen,
  Briefcase,
  ShieldCheck,
} from "lucide-react";

const YourJourneySection = () => {
  const steps = [
    {
      title: "Step 1",
      heading: "Connect with Our Experts",
      desc: "Schedule a free one-on-one consultation with our experienced mentors. They'll guide you through career possibilities, explain the curriculum structure, and ensure the program aligns with your aspirations.",
      image: "/step-1.jpg",
      IconComponent: UserCheck,
    },
    {
      title: "Step 2",
      heading: "Registration & Profile Evaluation",
      desc: "Complete your registration and submit your profile. Our admission team will thoroughly assess your background, interests, and goals to ensure you're a strong fit for the program.",
      image: "/step-2.jpg",
      IconComponent: ClipboardList,
    },
    {
      title: "Step 3",
      heading: "Scholarship Assessment",
      desc: "Participate in an aptitude and profile-based assessment to unlock merit scholarships. This step helps determine your eligibility for financial aid and awards based on your skills and potential.",
      image: "/step-3.jpg",
      IconComponent: BadgePercent,
    },
    {
      title: "Step 4",
      heading: "Fee & EMI Options",
      desc: "Explore personalized fee structures and benefit from flexible EMI options tailored to your budget. We'll ensure that finances don't become a barrier to your learning journey.",
      image: "/step-4.jpg",
      IconComponent: CreditCard,
    },
    {
      title: "Step 5",
      heading: "9 Months Curriculum",
      desc: "Dive into an intensive 9-month learning journey featuring live classes, real-world projects, capstones, assignments, and peer learning. Stay industry-ready through hands-on experience.",
      image: "/step-5.jpg",
      IconComponent: BookOpen,
    },
    {
      title: "Step 6",
      heading: "Paid Internship",
      desc: "Apply your skills in real-world environments through our paid internship programs. Work with live clients, solve actual business problems, and build an impressive portfolio.",
      image: "/step-6.jpg",
      IconComponent: Briefcase,
    },
    {
      title: "Step 7",
      heading: "Job Placement & Certification",
      desc: "Get placed in top-tier companies with our 100% job guarantee. Walk away with recognized industry certification and the experience needed to excel in your new role.",
      image: "/step-7.jpg",
      IconComponent: ShieldCheck,
    },
  ];

  return (
  <div className="overflow-x-hiddenc">
     <section id="steps-journey" className="relative">
      {/* Header */}
      <div className="py-8 px-4 flex items-center justify-center">
        <h1 className="text-6xl font-bold text-center">Your Journey With Us</h1>
      </div>

      {/* Steps */}
      <div className="relative">
        {steps.map((step, index) => {
          const Icon = step.IconComponent;
          return (
            <div
              key={index}
              className="sticky top-0 h-[50vh] md:h-[40vh] flex items-center justify-center transition-all duration-300 overflow-hidden"
              style={{
                zIndex: 10 + index,
                marginTop: index > 0 ? "-1vh" : "0",
              }}
            >
              {/* Background Image with Overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${step.image})` }}
              />
              <div className="absolute inset-0 bg-black/50" />

              <div className="flex flex-col md:flex-row items-center md:items-start justify-start max-w-5xl w-full px-4 md:px-8 text-center md:text-left relative z-10">
                {/* Icon */}
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                  <Icon className="w-14 h-14 text-white" />
                </div>

                {/* Content */}
                <div className="text-white">
                  <h2 className="text-lg md:text-xl font-semibold mb-1">{step.title}</h2>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">{step.heading}</h3>
                  <p className="text-base md:text-lg leading-relaxed opacity-90">
                    {step.desc}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  </div>

  );
};

export default YourJourneySection;
