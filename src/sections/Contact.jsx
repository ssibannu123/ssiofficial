'use client';
import { GsapContext } from '@/context/GsapContext';
import React, { useContext } from 'react';
import 'remixicon/fonts/remixicon.css';
import { phoneNo, whatAppNo, tiktokUrl, facebookUrl,youtubeUrl, instagramUrl } from '@/utilities/filesAndLink';







const Contact = () => {




  let {
    contactHeadingRef,
    contactCardParentElementRef
  } = useContext(GsapContext)


  const contacts = [
    // { platform: 'Email', value: 'example@email.com', link: 'mailto:example@email.com', icon: 'ri-mail-line', color: 'text-red-500' },
    { platform: 'Phone', value: phoneNo, link: `tel:${phoneNo}`, icon: 'ri-phone-line', color: 'text-green-500' },
    { platform: 'WhatsApp', value: whatAppNo, link: `https://wa.me/${whatAppNo}`, icon: 'ri-whatsapp-line', color: 'text-green-600' },
    { platform: 'TikTok', value: '@username', link:tiktokUrl, icon: 'ri-tiktok-line', color: 'text-black' },
    { platform: 'Facebook', value: 'YourPage', link: facebookUrl, icon: 'ri-facebook-circle-line', color: 'text-blue-600' },
    { platform: 'YouTube', value: 'YourChannel', link: youtubeUrl, icon: 'ri-youtube-line', color: 'text-red-600' },
    { platform: 'Instagram', value: '@yourhandle', link: instagramUrl, icon: 'ri-instagram-line', color: 'text-pink-500' },
    // { platform: 'LinkedIn', value: 'YourName', link: 'https://www.linkedin.com/in/yourname/', icon: 'ri-linkedin-box-line', color: 'text-blue-700' }
  ];







  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert(`Copied: ${text}`);
  };













  return (
    <div
      id='contact'
      className="py-12 pt-20 px-4 sm:px-8 lg:px-16 mt-10 bg-zinc-50 hover:border-2 hover:border-gray-200 mb-20 rounded-lg mx-2 shadow-md shadow-zinc-200">
      
      
      
      
      <h2 ref={contactHeadingRef} className="opacity-0 text-4xl font-bold text-center mb-10 text-zinc-900 dark:text-zinc-200">
        Connect with <span className='text-orange-500'>Us</span>
        </h2>





      <div ref={contactCardParentElementRef} className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
       
      
        {contacts.map((contact, index) => (
          <div
            key={index}
            className="opacity-0 translate-y-10 group border rounded-2xl p-6 shadow-lg  hover:shadow-2xl transition-all duration-300 flex flex-col justify-between gap-4"
          >
            <div className="flex items-center gap-3 mb-2">
              <i className={`${contact.icon} text-3xl ${contact.color} group-hover:scale-110 transition`} />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-zinc-100 group-hover:text-blue-600">{contact.platform}</h3>
            </div>

            <div className="flex gap-3 mt-auto">
              <button
                onClick={() => handleCopy(contact.platform=="WhatsApp" || contact.platform=="Phone"?contact.value:contact.link)}
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm px-3 py-1.5 rounded-lg transition"
              >
                Copy
              </button>
              <a
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-1.5 rounded-lg text-center transition"
              >
                Open
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
