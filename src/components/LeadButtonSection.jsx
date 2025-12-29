import { PhoneCall } from "lucide-react";

export default function CareerExpertCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-red-500 to-red-600">
      <div className="container mx-auto px-6 text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-10">
          Your success is our goal — from day one to your job placement.
        </h2>

        <div className="flex justify-center">
          <button

          onClick={() => {
                    const formElement = document.getElementById("contact-form");
                    if (formElement) formElement.scrollIntoView({ behavior: "smooth" });
                  }}
          
          className="bg-transparent border-2 border-white text-white hover:bg-green-600 hover:text-white font-bold py-4 px-10 rounded-full text-xl transition-all duration-300 hover:scale-105 flex items-center gap-3">
            <PhoneCall className="w-6 h-6" />
            Talk to Career Expert
          </button>
        </div>
      </div>
    </section>
  );
}
