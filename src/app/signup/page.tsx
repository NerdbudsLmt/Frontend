'use client'

import React from "react";
import Link from "next/link";
import Image from "next/image";
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

const data = [
  {
    link: "/signup/company",
    imageSrc: "/images/company.svg",
    title: "For ",
    subtitle: "Companies",
    description:
      "We help companies with their branding and other services such as creation of products. A company account will give you access to these services and so much more.",
  },
  {
    link: "/signup/projectPal",
    imageSrc: "/images/student.svg",
    title: "For ",
    subtitle: "Students",

    description:
      "Investing in the youth is one of our drive so this account is for students who want to bring their idea to life. Don’t feel left out. Let us help you with your dreams.",
  },
  {
    link: "/signup/business",
    imageSrc: "/images/buisness.svg",
    title: "For ",
    subtitle: "Individuals",

    description:
      "Starting a business can be scary and tasking. Let us help make the process easier for you while making you profit at the same time.",
  },
];

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="mx-auto text-white w-[97%] tablet:w-[95%] max-w-[1380px]">
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
              // href={item.link}
              onClick={onOpen}
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
             
              <Modal
                isCentered
                onClose={onClose}
                isOpen={isOpen}
                size={'xl'}
                motionPreset="slideInBottom"
                >
                <ModalOverlay />
                <ModalContent
                className='bg-app-pblue'
                
                >
                  <ModalCloseButton />
                  <ModalBody>
                    <PreSignupForm />
                  </ModalBody>
                 
                </ModalContent>
              </Modal>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
