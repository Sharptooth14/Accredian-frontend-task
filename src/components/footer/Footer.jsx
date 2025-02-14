import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8 sm:py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
                {/* Programs Section */}
                <div className="w-full">
                    <h2 className="text-lg font-semibold">Programs</h2>
                    <ul className="mt-4 space-y-2 text-sm sm:text-base">
                        {[
                            "Data Science & AI",
                            "Product Management",
                            "Business Analytics",
                            "Digital Transformation",
                            "Business Management",
                            "Project Management",
                            "Strategy & Leadership",
                            "Senior Management",
                            "Fintech",
                        ].map((program, index) => (
                            <li key={index} className="flex justify-between items-center hover:text-gray-300 transition-colors">
                                {program} <span className="text-xl">+</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Section */}
                <div className='w-full'>
                    <h2 className="text-lg font-semibold">Contact Us</h2>
                    <ul className="mt-4 space-y-2 text-xs sm:text-sm">
                        <li className="break-words">Email us (For Data Science): <a href="mailto:admissions@accredian.com" className="text-blue-400 hover:text-blue-300">admissions@accredian.com</a></li>
                        <li className="break-words">Email us (For Product Management): <a href="mailto:pm@accredian.com" className="text-blue-400 hover:text-blue-300">pm@accredian.com</a></li>
                        <li className="break-words">Data Science Helpline: +91 9079653292 (9 AM - 7 PM)</li>
                        <li className="break-words">Product Management Helpline: +91 9625811095</li>
                        <li className="break-words">Student Helpline: +91 7969322507</li>
                        <li className="break-words">Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122015</li>
                    </ul>
                    <h3 className="mt-6 font-semibold">Follow Us</h3>
                    <div className="flex space-x-4 mt-2">
                        {[FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram, FaYoutube].map((Icon, index) => (
                            <Icon
                                key={index}
                                className="text-lg sm:text-xl cursor-pointer hover:text-gray-300 transition-colors"
                            />
                        ))}
                    </div>
                </div>

                {/* About Section */}
                <div className="w-full">
                    <h2 className="text-lg font-semibold">Accredian</h2>
                    <ul className="mt-4 space-y-2 text-xs sm:text-sm">
                        {["About", "Career", "Blog", "Admission Policy", "Referral Policy", "Privacy Policy", "Terms Of Service", "Master FAQs"].map((item, index) => (
                            <li key={index} className="cursor-pointer hover:text-gray-300 transition-colors">{item}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="text-center text-xs sm:text-sm mt-8 sm:mt-12 border-t border-gray-700 pt-6 px-4">
                © 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
            </div>
        </footer>
    );
};

export default Footer;
