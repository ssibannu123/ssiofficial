import React from 'react';
import Link from 'next/link';
import { facebookUrl, instagramUrl, tiktokUrl, youtubeUrl } from '@/utilities/filesAndLink';

const Footer = () => {
  return (
    <footer className="bg-[#0c4b70] text-[#ffffff] py-10 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-[#F28C28] mb-3">Syed Software Institute</h2>
          <p className="text-sm text-[#E0E0E0]">
Syed Software Institute offers affordable, practical training in Graphic Design, Web Development, 3D Modeling, and Freelancing. It's the region’s first software house and IT academy. </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#home" className="hover:text-white">Home</Link></li>
            <li><Link href="#about" className="hover:text-white">About</Link></li>
            <li><Link href="#services" className="hover:text-white">Services</Link></li>
            <li><Link href="#contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex gap-4 text-2xl">
            <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500"><i className="ri-facebook-circle-line"></i></a>
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-pink-500"><i className="ri-instagram-line"></i></a>
            {/* <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><i className="ri-linkedin-box-line"></i></a> */}
            <a href={youtubeUrl} target="_blank" rel="noopener noreferrer" className="hover:text-red-500"><i className="ri-youtube-line"></i></a>
            <a href={tiktokUrl} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-600"><i className="ri-tiktok-line"></i></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-xs text-gray-500 flex flex-wrap justify-center">
        © {new Date().getFullYear()} YourCompany. All rights reserved.
        <a href='https://ik-portfolio-org.vercel.app' target='_blank' className='ml-2'>developer@<span className='text-[#f28c28]'>ibrahim</span></a>
      </div>
    </footer>
  );
};

export default Footer;
