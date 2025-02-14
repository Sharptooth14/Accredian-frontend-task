import React from 'react'
import image1 from "../../assets/referal.svg"
import image2 from "../../assets/referal_v.svg"

const ReferralProcess = () => {
    return (
        <div className="bg-blue-50 py-10 px-5 md:px-20 item-center">
            <div>
                <h2 className="text-center text-2xl font-semibold text-gray-800">
                    How Do I <span className="text-blue-600">Refer?</span>
                </h2>
            </div>
            <div className='flex items-center justify-center'>
                <div className="flex block md:hidden mt-5 flex justify-center items-center">
                    <img
                        src={image2}
                        alt="Referral Process"
                        className="w-full max-w-xs"
                    />
                </div>
                <img src={image1} alt="Referal" className='hidden md:flex flex-row items-center justify-center gap-10 mt-10' />
            </div>
            <div className="flex justify-center mt-10">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 transition" href="#">
                    Refer Now
                </button>
            </div>
        </div>
    )
}

export default ReferralProcess;
