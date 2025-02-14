import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/HomePage'
import HomePage from './components/Hero/HomePage'
import ReferralProcess from './components/referralProcess/ReferralProcess'
import Footer from './components/footer/Footer'
import { SlSupport } from 'react-icons/sl'
import Faq from './components/Faq/FAQPage'
import FAQPage from './components/Faq/FAQPage'
import ReferralBenefits from './components/Benifits/ReferralBenefits'

const App = () => {
  return (
    <div>
      <Navbar />
      <HomePage />
      <ReferralProcess />
      <ReferralBenefits />
      <FAQPage />
      <Footer />
    </div>
  )
}

export default App