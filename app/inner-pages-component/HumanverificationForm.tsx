"use client";

import { memo, useState } from "react";

const HumanverificationForm = ({ description }: { description: string }) => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!firstName || !email) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, email }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Something went wrong");

      setSuccess("Your message has been sent!");
      setFirstName("");
      setEmail("");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className=" grid items-center justify-center pb-[30px] md:pb-[50px] px-4">
      <form onSubmit={handleSubmit} className="max-w-[1000px] w-full grid grid-cols-1 gap-4 mb-6 rounded-lg text-gray-300 font-poppins" noValidate>
        <div className="field">
          <label className="block text-white text-sm font-medium mb-2">First Name</label>
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required
            className="w-full px-4 py-3 md:py-4 bg-transparent text-gray-300 border border-lime-600 rounded-md placeholder-gray-300 focus:border-lime-400 focus:ring-0 focus:ring-lime-400 focus:ring-opacity-20 transition-all outline-none"
            placeholder="First Name"/>
        </div>

        <div className="field">
          <label className="block text-white text-sm font-medium my-2">Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required
            className="w-full px-4 py-3 md:py-4 bg-transparent text-gray-300 border border-lime-600 rounded-md placeholder-gray-300 focus:border-lime-400 focus:ring-0 focus:ring-lime-400 focus:ring-opacity-20 transition-all outline-none"
            placeholder="Email"
          />
        </div>
        {error && <p className="text-red-400 mb-0">{error}</p>}
        {success && <p className="text-green-500 mb-0">{success}</p>}


        <p className="text-white text-[12px] md:text-sm leading-[23px] md:leading-[28px] my-3">{description}</p>
       

        <button type="submit" className="cursor-pointer bg-[#B4FE5D] flex items-center gap-[3px] w-full sm:w-fit text-[#154617] font-bold py-3 px-6 rounded-full hover:bg-[#fff] hover:text-[#154617] transition-colors duration-300 justify-center text-sm sm:text-base">
          Submit →
        </button>
      </form>
    </div>
  );
};

export default memo(HumanverificationForm);