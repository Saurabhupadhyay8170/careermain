
import React, { useEffect, useState } from "react";
import './headersection.css'
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,
  FaPinterest,
  FaTelegramPlane,
  FaWhatsapp
} from "react-icons/fa";
import { SiQuora, SiThreads } from "react-icons/si";
import { HiMenu } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setShowPopUp } from "src/redux/loginSignupSlice"

const HeaderMain: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  const dispatch = useDispatch();
   // Add a scroll event listener to toggle `isScrolled`
   useEffect(() => {
     const handleScroll = () => {
       if (window.scrollY > 50) {
         setIsScrolled(true);
       } else {
         setIsScrolled(false);
       }
     };
     window.addEventListener("scroll", handleScroll);
     return () => {
       window.removeEventListener("scroll", handleScroll);
     };
   }, []);
  return (
    <header>
      {/* Top Header */}
      <div className="bg-[#EDEDE9] text-sm py-2 px-6 justify-between items-center hidden md:flex">
        <div className="flex space-x-4 text-[#983fd4]">
          <span className="flex items-center">
           <a
             href="tel:+918750092628"
             className="flex items-center text-sm hover:underline"
            >
             <FaPhoneAlt className="mr-2" />
             +91-8750092628
            </a>
           </span>
           <span className="flex items-center">
           <a
           href="mailto:info@careerbanao.org"
           className="flex items-center text-sm hover:underline"
           >
           <FaEnvelope className="mr-2" />
            info@careerbanao.org
           </a>

          </span>
        </div>
        <div className="flex space-x-4 text-[#983fd4]">
          <a href="https://www.facebook.com/careerbanao/" className="hover:text-[#e46ab3]">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/careerbanao20/" className="hover:text-[#e46ab3]">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/company/careerbanao1/" className="hover:text-[#e46ab3]">
            <FaLinkedinIn />
          </a>
          <a href="https://www.youtube.com/@CareerBanao" className="hover:text-[#e46ab3]">
            <FaYoutube />
          </a>
          <a href="https://x.com/career_banao" className="hover:text-[#e46ab3]">
            <FaTwitter />
          </a>
          <a href="https://www.threads.net/@careerbanao20" className="hover:text-[#e46ab3]">
            <SiThreads />
          </a>
          <a href="https://www.quora.com/profile/CareerBanao" className="hover:text-[#e46ab3]">
            <SiQuora />
          </a>
          <a href="https://in.pinterest.com/careerbanao20/" className="hover:text-[#e46ab3]">
            <FaPinterest />
          </a>
          <a href=" https://t.me/CareerBanao20" className="hover:text-[#e46ab3]">
            <FaTelegramPlane />
          </a>
          <a href="https://whatsapp.com/channel/0029VaAvuSnF6smrEwDwMc1U" className="hover:text-[#e46ab3]">
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* Main Header */}
      <div className={`main-header bg-gradient-to-r from-[#983fd4] to-[#e46ab3] px-4 flex justify-between items-center shadow transition-transform duration-300 ${isScrolled ? "fixed top-0 w-full z-50" : ""}`}>
        {/* Logo */}
        <div className="header-section flex justify-between items-center text-white px-4 py-3 rounded-t-lg">
            <div className="flex items-center gap-2  text-[32px] font-semibold">
              <img
                src="./logo/CBlogo.jpg"
                alt="CareerBanao"
                className="h-10 w-10 rounded-full"
              />
              <Link to={"/"}>
              <h1> CareerBanao</h1>
              </Link>
            </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden nav-header font-semibold md:flex gap-8 text-[18px]">
          {[{ name: "Home", path: "/" },
            { name: "Admission", path: "/admissions/engineering" },
            { name: "Counselling", path: "/counselling/engineering" },
            { name: "College Finder", path: "/CollegeFinder" },
            { name: "Contact", path: "/contact" },
            { name: "Career", path: "/career" }].map(
            (item,index) => (
              <Link
              key={index}
              to={item.path}
              className="px-4 py-2 hover:bg-[#e4a6ca] text-white rounded transition"
            >
              <p>{item.name}</p>
            </Link>
            )
          )}
        </nav>
        <div className="hidden md:block">          
          <button
            onClick={() => { dispatch(setShowPopUp()) }}                
            type="button"
            className="px-2 py-1 bg-[#983fd4] text-white rounded-full hover:bg-[#e46ab3] transition"
          >
            <CgProfile size={30} className="cursor-pointer"  />
          </button> 
              
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open Mobile Menu"
            className="text-[#983fd4] text-2xl"
          >
            <HiMenu />
          </button>
        </div>
      </div>

      {/* Mobile Menu (Side Drawer) */}
      <div
        className={`fixed top-0 left-0 z-10 h-full w-3/4 max-w-[300px] bg-[#983fd4] text-white transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center px-4 py-4 border-b border-gray-700">
          <div className="text-2xl font-bold">Career</div>
          <button
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close Mobile Menu"
            className="text-white text-2xl"
          >
            <IoClose />
          </button>
        </div>

        {/* Menu Items */}
        <nav className="flex flex-col space-y-4 px-4 py-6">
        {[{ name: "Home", path: "/" },
            { name: "Admission", path: "/admissions/engineering" },
            { name: "Counselling", path: "/counselling/engineering" },
            { name: "College Finder", path: "/CollegeFinder" },
            { name: "Contact", path: "/contact" },
            { name: "Career", path: "/career" }].map(
            (item,index) => (
              <Link
              key={index}
              to={item.path}
              onClick={(e) => {
                e.stopPropagation();
                setIsMenuOpen(false);
              }}
              className="flex items-center justify-between px-2 py-2 hover:bg-[#22247A] rounded"
            >
              <span className="text-lg">{item.name}</span>
              <FiArrowRight />
            </Link>
          ))}
        </nav>

      </div>

      {/* Overlay (Closes Menu on Click) */}
      {isMenuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-10 z-9"
          onClick={(e) => {
            e.stopPropagation();
            setIsMenuOpen(false);
          }}
          aria-label="Close Overlay"
        ></div>
      )}
    </header>
  );
};

export default HeaderMain;