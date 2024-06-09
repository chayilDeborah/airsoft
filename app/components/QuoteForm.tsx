"use client"
import React, { useState } from 'react';

const QuoteForm: React.FC = () => {
  const [interest, setInterest] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectDetails, setProjectDetails] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ interest, name, email, projectDetails });
    alert('Form submitted!');
  };

  return (
    <form onSubmit={handleSubmit} className="text-black ">
      <div className="mb-4">
        <p className="mb-[30px] text-[30px] leading-[39px] ">I&#39;m interested in...</p>
        <div className="flex space-x-[20px] ">
          <button
            type="button"
            className={`w-[287px] h-[70px] rounded-[34.64px] border-[2.1px] border-[#1B1C1E] text-[20px] leading-[27px] text-[#1B1C1E] ${interest === 'Fantasy Character Art' ? 'bg-gray-200' : 'bg-[#F5F5F5'}`}
            onClick={() => setInterest('Fantasy Character Art')}
          >
            Fantasy Character Art
          </button>
          <button
            type="button"
            className={`w-[287px] h-[70px] rounded-[34.64px] border-[2.1px] border-[#1B1C1E] text-[20px] leading-[27px] text-[#1B1C1E] ${interest === 'Fantasy Landscape Art' ? 'bg-gray-200' : 'bg-[#F5F5F5] '}`}
            onClick={() => setInterest('Fantasy Landscape Art')}
          >
            Fantasy Landscape Art
          </button>
        </div>
      </div>
      <div className="mt-[52px] ">
        <label htmlFor="name" className="block text-[30px] leading-[39px]">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-[613px] h-[30px] pl-[10px] border-b-[1px] border-b-[#1B1C1E] outline outline-none bg-[#F5F5F5] "
          required
        />
      </div>
      <div className="my-[80px] ">
        <label htmlFor="email" className="block text-[30px] leading-[39px]">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-[613px] h-[30px] pl-[10px] border-b-[1px] border-b-[#1B1C1E] outline outline-none bg-[#F5F5F5] "
          required
        />
      </div>
      <div className="">
        <label htmlFor="projectDetails" className="block text-[30px] leading-[39px] mb-[30px]">Project Details</label>
        <textarea
          id="projectDetails"
          value={projectDetails}
          onChange={(e) => setProjectDetails(e.target.value)}
         className="w-[613px] h-[229px] pl-[10px] border-[1px] border-[#1B1C1E] outline outline-none bg-[#F5F5F5] "
          required
        ></textarea>
      </div>
      <button type="submit" className="my-[80px] bg-[#1B1C1E] border-[2px] border-[#1B1C1E] w-[180px] h-[70px] rounded-[34.6px] text-[20px] leading-[27px] text-white hover:bg-black ">Get Quote</button>
    </form>
  );
};

export default QuoteForm;
