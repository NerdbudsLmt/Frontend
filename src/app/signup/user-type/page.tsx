"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import Nav from "@/components/Nav/Nav";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import PreSignupForm from "@/components/PreSignupForm";
import useCustomToast from "@/components/Toast";

const data = [
  {
    userType: "company",
    imageSrc: "/images/company.svg",
    title: "For",
    subtitle: "companies",
    description:
      "We help companies with their branding and other services such as creation of products. A company account will give you access to these services and so much more.",
  },
  {
    userType: "student",
    imageSrc: "/images/student.svg",
    title: "For ",
    subtitle: "students",

    description:
      "Investing in the youth is one of our drive so this account is for students who want to bring their idea to life. Don’t feel left out. Let us help you with your dreams.",
  },
  {
    userType: "business",
    imageSrc: "/images/buisness.svg",
    title: "For ",
    subtitle: "individuals",

    description:
      "Starting a business can be scary and tasking. Let us help make the process easier for you while making you profit at the same time.",
  },
];

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export default function Home() {
  const router = useRouter();
  const toast = useCustomToast();

  const handleFormSubmit = async (userType: string) => {
    // Retrieve formData from localStorage
    const capitalizedUserType =
      userType.charAt(0).toUpperCase() + userType?.slice(1).toLowerCase();
    console.log(capitalizedUserType);
    const storedData = localStorage.getItem("signupData");
    const parsedData = storedData ? JSON.parse(storedData) : {};

    // Include the 'userType' value in the request body
    const requestData = { ...parsedData, userType: capitalizedUserType };
    try {
      // Send formData to the backend API endpoint
      const res: any = await fetch(`${apiUrl}/auth/form/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      if (res.status === 201) {
        const data = await res.json();
        localStorage.removeItem("signupData");
        console.log(data.data.accessToken);
        localStorage.setItem("token", JSON.stringify(data.data.accessToken));
        // localStorage.setItem("token", JSON.stringify(data.data.accessToken));
        toast(
          "Success",
          "success",
          true,
          2000,
          "UserType Selected",
          "top-right"
        );
        router.push(`/signup/${userType}`);
      } else {
        const errData = await res.json();
        toast("Error", "error", true, 2000, errData.message, "top-right");
        console.error(
          "Error occurred while sending data to the backend:",
          errData.message
        );
        router.push("/signup");
      }
    } catch (error: any) {
      toast("Error", "error", true, 2000, error, "top-right");
      console.error("Error occurred during fetch:", error);
      router.push("/signup");
    }
  };

  return (
    <div className="mx-auto text-white w-[97%] tablet:w-[95%] max-w-[1380px] min-h-[100dvh]">
      <Nav />
      <header className="pt-4">
        <div className="flex flex-col items-center mb-4">
          <div>
            <h1 className="text-3xl tablet:text-4xl w-[98%]  tablet:w-[400px] font-bold text-center text-app-sblue">
              What type of <span className="text-app-porange">account</span> do
              you need?
            </h1>
          </div>
        </div>
      </header>
      <div className="py-10 bg-app-pblue">
        <div className="flex justify-around gap-y-12 gap-x-3 flex-wrap">
          {data.map((item, index) => (
            <div
              key={index}
              // href={item.userType}
              onClick={() => handleFormSubmit(item.userType)}
              className="relative w-[85%] tablet_l:max-w-[272px] rounded-3xl cursor-pointer"
            >
              <Image
                src={item.imageSrc}
                className="min-h-fit h-fit max-h-[400px]"
                alt="Vercel Logo"
                width={400}
                height={400}
                priority
              />
              <div className="bg-sign mt-6 p-4 rounded-md">
                <h1 className="text-3xl font-bold text-app-sblue">
                  {item.title}
                  <span className="text-app-porange"> {item.subtitle}</span>
                </h1>
                <p className="text-[17px] mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
