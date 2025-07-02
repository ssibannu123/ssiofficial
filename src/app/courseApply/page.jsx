'use client'
import { heroSectionBgImg } from '@/utilities/filesAndLink';
import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { MyContext } from '@/context/MyContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Page = () => {


  let router= useRouter()

  let [loading, setLoading]=useState(false)

    let {
        currentClickedCourseDetails
    }= useContext(MyContext)


  const [formData, setFormData] = useState({
    name: '',
    fatherName: '',
    phoneNo: '',
    email: '',
    address: '',
    education: '',
    referredBy: '',
    terms: false,
    applyFor:""
  });




  useEffect(()=>{
    if(currentClickedCourseDetails){
          setFormData({...formData,applyFor:currentClickedCourseDetails?.name})

    }else{
      router.push("/")
    }
  },[currentClickedCourseDetails])






  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };






  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log(formData)
    const { name, phoneNo, address, terms } = formData;
    if (!name || !phoneNo || !address) {
      alert('Please fill in all required fields: Name, Phone Number, and Address.');
      return;
    }
    if (!terms) {
      alert('You must agree to the terms and conditions before submitting.');
      return;
    }
    try {
          setLoading(true)


      const response = await axios.post('/api/courseApplyApi', formData);
      // console.log('Form submitted:', response.data);
      if(response?.data?.success==true){
        alert("Applied successfully!")
      }else{
        alert(response?.data?.reason)
      }


            setLoading(false)


    } catch (error) {
      setLoading(false)
      console.error('Submission error:', error);
    }
  };







  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">





      <div className="relative w-full max-w-2xl bg-white p-8 rounded-2xl shadow-xl">
        <h1 className='mb-10 text-center font-bold text-2xl'>Apply for <span className='text-orange-400 font-extrabold'>{currentClickedCourseDetails?.name}</span></h1>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-2 font-medium text-gray-700">Name*</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="fatherName" className="mb-2 font-medium text-gray-700">Father's Name (optional)</label>
            <input
              type="text"
              id="fatherName"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              placeholder="Enter your father's name"
              className="h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="phoneNo" className="mb-2 font-medium text-gray-700">Phone Number*</label>
            <input
              type="tel"
              id="phoneNo"
              name="phoneNo"
              value={formData.phoneNo}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 font-medium text-gray-700">Email (optional)</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col md:col-span-2">
            <label htmlFor="address" className="mb-2 font-medium text-gray-700">Address*</label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              rows="3"
              placeholder="Enter your address"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
          </div>

          <div className="flex flex-col md:col-span-2">
            <label htmlFor="education" className="mb-2 font-medium text-gray-700">Educational Background</label>
            <input
              type="education"
              id="education"
              name="education"
              value={formData.education}
              onChange={handleChange}
              placeholder="Enter your education (metric, Fsc....)"
              className="h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex flex-col md:col-span-2">
            <label htmlFor="referredBy" className="mb-2 font-medium text-gray-700">Who Referred You?</label>
            <select
              id="referredBy"
              name="referredBy"
              value={formData.referredBy}
              onChange={handleChange}
              className="h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select an option</option>
              <option value="Friend">Friend</option>
              <option value="SSI student">SSI student</option>
              <option value="collage">collage</option>
              <option value="seminar">Seminar</option>
            </select>
          </div>

          <div className="flex items-center md:col-span-2">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
              className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="terms" className="ml-3 text-gray-700 text-sm">
              I agree with <Link href="termsCondition" className="text-blue-600 hover:underline">terms and conditions</Link>
            </label>
          </div>

          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="mt-6 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {loading?"Loading...":"Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
