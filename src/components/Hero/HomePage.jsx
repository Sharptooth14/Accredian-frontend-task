import React, { useState } from "react";
import axios from "axios";
import image2 from "../../assets/phone.png";

const Navbar = () => {
  return (
    <nav className="flex justify-center py-4">
      <div className="flex gap-6 bg-gray-100 px-6 py-2 rounded-full shadow-md">
        {["Refer", "Benefits", "FAQ's", "Support"].map((item, index) => (
          <a
            key={index}
            href="#"
            className={`px-4 py-2 rounded-full text-gray-600 hover:text-blue-600`}
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
};

const Hero = ({ onOpen }) => {
  return (
    <section className="relative w-full bg-[#F8FAFF] py-12 md:py-20">
      <div className="shadow-md max-w-6xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="text-center md:text-left md:w-1/2 pb-8 md:pb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Let&apos;s Learn <br /> & Earn
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Get a chance to earn <span className="text-blue-600 font-semibold">₹10,000</span> for every friend who enrolls!
          </p>
          <button
            className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
            onClick={onOpen}
          >
            Refer Now
          </button>
        </div>
        <div className="relative md:w-1/2 flex justify-center">
          <img
            src={image2}
            alt="Refer & Earn"
            className="w-full max-w-lg"
          />
        </div>
      </div>
    </section>
  );
};

const ReferralModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    referrerName: "",
    referrerEmail: "",
    refereeName: "",
    refereeEmail: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccessMessage("");

    try {
      const response = await axios.post("https://accredian-backend-task-av8l.onrender.com/api/referral/create", formData);

      if (!response.status === 200) {
        throw new Error("Failed to submit referral.");
      }

      setSuccessMessage("Referral submitted successfully!");
      setFormData({
        referrerName: "",
        referrerEmail: "",
        refereeName: "",
        refereeEmail: "",
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Success Message Overlay */}
        {successMessage && (
          <div className="absolute inset-0 bg-white bg-opacity-95 rounded-2xl flex flex-col items-center justify-center p-6 z-10">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Thank You!</h3>
            <p className="text-gray-600 text-center mb-6">{successMessage}</p>
            <button
              onClick={onClose}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Close
            </button>
          </div>
        )}

        <h2 className="text-2xl font-bold mb-6 text-gray-800">Refer a Friend</h2>
        <p className="text-gray-600 mb-6">Share the benefits with your friends and earn rewards!</p>

        {error && (
          <div className="bg-red-50 text-red-500 p-3 rounded-lg mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
            <input
              type="text"
              name="referrerName"
              placeholder="Enter your name"
              value={formData.referrerName}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
            <input
              type="email"
              name="referrerEmail"
              placeholder="Enter your email"
              value={formData.referrerEmail}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Friend's Name</label>
            <input
              type="text"
              name="refereeName"
              placeholder="Enter friend's name"
              value={formData.refereeName}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Friend's Email</label>
            <input
              type="email"
              name="refereeEmail"
              placeholder="Enter friend's email"
              value={formData.refereeEmail}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg font-medium hover:bg-blue-700 transition flex items-center justify-center"
            disabled={loading}
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting...
              </>
            ) : (
              'Submit Referral'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

const HomePage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero onOpen={() => setModalOpen(true)} />
      <ReferralModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default HomePage;