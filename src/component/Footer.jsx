 import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#1f2b36] text-white px-6 md:px-20 lg:px-40 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-8">
            Ready to get started?
          </h2>

          <button className="bg-[#f7c7d4] text-indigo-600 font-semibold px-8 py-4 rounded-xl">
            Get Started
          </button>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-[#ffc6d0] font-bold mb-6">Services</h3>
          <ul className="space-y-4">
            <li>Email Marketing</li>
            <li>Campaigns</li>
            <li>Branding</li>
            <li>Offline</li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h3 className="text-[#ffc6d0] font-bold mb-6">About</h3>
          <ul className="space-y-4">
            <li>Our Story</li>
            <li>Benefits</li>
            <li>Team</li>
            <li>Careers</li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-[#ffc6d0] font-bold mb-6">Help</h3>
          <ul className="space-y-4">
            <li>FAQs</li>
            <li>Contact Us</li>
            <li>Benefits</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-16 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex gap-6">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>

        <div className="flex gap-6 text-xl">
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
        </div>
      </div>
    </footer>
  );
}

 

export default Footer;