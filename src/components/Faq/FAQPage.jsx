import { useState } from "react";
import { FaHeadset } from "react-icons/fa";

const FAQPage = () => {
  const [activeTab, setActiveTab] = useState("Eligibility");
  const [openQuestion, setOpenQuestion] = useState(null);

  const tabs = ["Eligibility", "How To Use?", "Terms & Conditions"];
  const faqs = [
    {
      question: "Do I need prior Product Management and Project Management experience to enroll?",
      answer: "No, the program is designed for all levels of experience, covering topics from the basics.",
    },
    {
      question: "What is the minimum system configuration required?",
      answer: "A stable internet connection and a modern web browser are sufficient to access the program.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center px-2 sm:px-4 py-6 sm:py-10">
      {/* Header */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center mb-4 sm:mb-6">
        Frequently Asked <span className="text-blue-600">Questions</span>
      </h2>

      {/* Main Content: Sidebar & FAQ */}
      <div className="flex flex-col md:flex-row gap-4 sm:gap-8 w-full max-w-5xl">
        {/* Left Sidebar */}
        <div className="w-full md:w-1/3 flex flex-col gap-2 sm:gap-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`w-full px-4 sm:px-6 py-2 sm:py-3 border rounded-md text-left text-sm sm:text-base transition-all ${activeTab === tab
                ? "bg-blue-600 text-white font-semibold shadow-md"
                : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Right Side - FAQ List */}
        <div className="w-full md:w-2/3">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b py-3 sm:py-4">
              <button
                className="w-full text-left font-semibold text-blue-600 flex justify-between items-center text-sm sm:text-base"
                onClick={() =>
                  setOpenQuestion(openQuestion === index ? null : index)
                }
              >
                {faq.question}
                <span className="text-gray-500 ml-2">
                  {openQuestion === index ? "🠩" : "🠫"}
                </span>
              </button>
              {openQuestion === index && (
                <p className="text-gray-700 mt-2 text-sm sm:text-base">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full max-w-5xl mt-8 sm:mt-12">
        <div className="bg-blue-600 text-white p-4 sm:p-6 rounded-lg flex flex-col md:flex-row items-center justify-between shadow-lg relative overflow-hidden">
          {/* Background Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-500 opacity-30 rounded-lg"></div>

          {/* Left Section */}
          <div className="flex items-center gap-3 sm:gap-4 relative z-10">
            <div className="bg-white p-2 sm:p-3 rounded-lg shadow-md">
              <FaHeadset className="text-blue-600 text-2xl sm:text-3xl" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold">
                Want to delve deeper into the program?
              </h3>
              <p className="text-xs sm:text-sm opacity-90">
                Share your details to receive expert insights from our team!
              </p>
            </div>
          </div>

          {/* Right Section */}
          <button className="mt-4 md:mt-0 px-4 sm:px-5 py-2 bg-white text-blue-600 font-semibold rounded-md shadow-md hover:bg-gray-100 transition relative z-10 text-sm sm:text-base w-full md:w-auto">
            Get in touch →
          </button>
        </div>
      </div>
    </div>
  );
}

export default FAQPage;