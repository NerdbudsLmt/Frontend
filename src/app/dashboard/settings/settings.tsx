"use client";
import React, { useState } from "react";

const Settings = () => {
  const [currentPage, setCurrentPage] = useState("Profile");
  return (
    <div>
      <span className="flex items-center gap-2">
        <h2 className="text-[#676767] md:text-[30px] text-[20px] font-[600]">
          settings
        </h2>
        <span className="bg-[#363939] p-[6px] w-1 h-1 rounded-full"></span>
        <h3 className="font-[600] text-[#363939] md:text-[30px] text-[20px]">
          {currentPage === "Profile" && "Profile"}
          {currentPage === "Password" && "Password"}
          {currentPage === "Notification" && "Notification"}
        </h3>
      </span>
    </div>
  );
};

export default Settings;
