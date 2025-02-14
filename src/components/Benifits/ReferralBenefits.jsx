import { useState } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { Switch } from "@headlessui/react";

const ReferralBenefits = () => {
    const [enrolled, setEnrolled] = useState(false);
    const [showMore, setShowMore] = useState(false);

    const categories = [
        "PRODUCT MANAGEMENT",
        "STRATEGY & LEADERSHIP",
        "BUSINESS MANAGEMENT",
        "FINTECH",
        "SENIOR MANAGEMENT",
        "DATA SCIENCE",
        "DIGITAL TRANSFORMATION",
        "BUSINESS ANALYTICS",
    ];

    const programs = [
        { name: "Professional Certificate Program in Product Management", referrer: "₹ 7,000", referee: "₹ 9,000" },
        { name: "PG Certificate Program in Strategic Product Management", referrer: "₹ 9,000", referee: "₹ 11,000" },
        { name: "Executive Program in Data Driven Product Management", referrer: "₹ 10,000", referee: "₹ 10,000" },
        { name: "Executive Program in Product Management and Digital Transformation", referrer: "₹ 10,000", referee: "₹ 10,000" },
        { name: "Executive Program in Product Management", referrer: "₹ 10,000", referee: "₹ 10,000" },
        { name: "Advanced Certification in Product Management", referrer: "₹ 10,000", referee: "₹ 10,000" },
        { name: "Executive Program in Product Management and Project Management", referrer: "₹ 10,000", referee: "₹ 10,000" },
    ];

    return (
        <div className="flex flex-col items-center px-4 py-10">
            {/* Heading */}
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
                What Are The <span className="text-blue-600">Referral Benefits?</span>
            </h2>

            {/* Enrolled Toggle - Moved outside and to the right */}
            <div className="w-full max-w-6xl mb-4">
                <div className="flex justify-end">
                    <div className="flex items-center space-x-3">
                        <span className="text-lg font-semibold">Enrolled</span>
                        <Switch
                            checked={enrolled}
                            onChange={setEnrolled}
                            className={`${enrolled ? "bg-blue-600" : "bg-gray-300"} relative inline-flex h-6 w-11 items-center rounded-full`}
                        >
                            <span className="sr-only">Toggle Enrolled</span>
                            <span
                                className={`${enrolled ? "translate-x-6 bg-white" : "translate-x-1 bg-white"
                                    } inline-block h-4 w-4 transform rounded-full transition`}
                            />
                        </Switch>
                    </div>
                </div>
            </div>

            {/* Main Container */}
            <div className="flex flex-col md:flex-row w-full max-w-6xl gap-6">
                {/* Left Sidebar */}
                <div className="w-full md:w-1/3 bg-white shadow-lg rounded-lg">
                    {/* Top Section */}
                    <div className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-t-lg">
                        ALL PROGRAMS →
                    </div>
                    {/* Category Buttons */}
                    <div className="flex flex-col divide-y">
                        {categories.map((category, index) => (
                            <button key={index} className="text-left px-6 py-3 hover:bg-gray-100">
                                {category} →
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right Section */}
                <div className="w-full md:w-2/3 bg-white shadow-lg rounded-lg p-4">
                    {/* Table */}
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-blue-100 text-left text-blue-600">
                                <th className="px-4 py-2">Programs</th>
                                <th className="px-4 py-2">Referrer Bonus</th>
                                <th className="px-4 py-2">Referee Bonus</th>
                            </tr>
                        </thead>
                        <tbody>
                            {programs.slice(0, showMore ? programs.length : 5).map((program, index) => (
                                <tr key={index} className="border-b">
                                    <td className="px-4 py-3 flex items-center gap-2">
                                        <FaGraduationCap className="text-blue-500" />
                                        {program.name}
                                    </td>
                                    <td className="px-4 py-3">{program.referrer}</td>
                                    <td className="px-4 py-3">{program.referee}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Show More Button */}
                    <div className="flex justify-end mt-3">
                        <button
                            className="px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-100"
                            onClick={() => setShowMore(!showMore)}
                        >
                            {showMore ? "Show Less" : "Show More"}
                        </button>
                    </div>
                </div>
            </div>

            {/* Refer Now Button */}
            <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition">
                Refer Now
            </button>
        </div>
    );
}

export default ReferralBenefits;
