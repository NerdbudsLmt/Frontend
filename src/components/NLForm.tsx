// newsletter form
"use client";
import { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";

const NLForm = () => {
  const [email, setEmail] = useState("");

  return (
    <form
      className=" flex justify-end items-center mt-5 ml-80"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="flex justify-between items-center w-[80%] space-x-2 p-2 border-2 border-white/40 rounded-md">
        <AiOutlineMail className="text-2xl text-white" />
        <input
          type="text"
          className="flex-grow bg-transparent text-white outline-none"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Enter your email"
        />
      </div>
      <button className=" ml-4 bg-[#3F9BD5] text-white text-[.9rem] p-2">
        Subscribe
      </button>
    </form>
  );
};

export default NLForm;
