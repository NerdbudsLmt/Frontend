"use client";

import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react'

import Link from "next/link";
import PayStack from "./PayStack";

export default function PayM() {
  const [activeTab, setActiveTab] = useState("Paystack");
  const { isOpen, onOpen, onClose } = useDisclosure()

  const openTab = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      <p className="text-3xl text-gray-500  ml-1 inline">
        payments <img className="inline" src="/Dot.png" alt="" />
      </p>
      <p className="ml-3 text-3xl inline font-semibold">Payment Methods</p>

      <div className="tab-titles">
        <p
          className={`tab-links ${
            activeTab === "Paystack" ? "active-link" : ""
          }`}
          onClick={() => openTab("Paystack")}
        >
          Paystack
        </p>
        <p
          className={`tab-links ${
            activeTab === "BankTransfer" ? "active-link" : ""
          }`}
          onClick={() => openTab("BankTransfer")}
        >
          Bank Transfer
        </p>
      </div>

      <div
        className={`tab-contents ${
          activeTab === "Paystack" ? "active-tab" : ""
        }`}
      >
        {/* <Link href="/dashboard/payment/paymethod"> */}
          <button onClick={onOpen} className="bg-[#205584] block font-semibold text-white ml-1 mt-10 w-72 h-10 rounded-md">
            Make payment with Paystack
          </button>
        {/* </Link> */}
        <div className="flex items-center mt-8 ml-1">
          <input
            className=" mt-[-1px] cursor-pointer"
            type="checkbox"
            name=""
            id=""
          />
          <p className="ml-2 text-[0.85rem] font-semibold">
            Save card for future purchases.
          </p>
        </div>
      </div>

      <div
        className={`tab-contents ${
          activeTab === "BankTransfer" ? "active-tab" : ""
        }`}
      >
        <div
          className={`tab-contents ${
            activeTab === "BankTransfer" ? "active-tab" : ""
          }`}
        >
          <div className="responsive-div">
            <div className="content-left">
              <p className=" text-[#151515] font-bold ml-5 ">
                You can also transfer money directly to the Nerdbuds account
                displayed <br /> below.
              </p>
              <p className=" mt-5 ml-5">
                Bank Name:{" "}
                <span className=" text-[#132E40] font-semibold">
                  Ecobank Plc
                </span>{" "}
                <br />
                Account Name:
                <span className=" text-[#132E40] font-semibold">
                  {" "}
                  Nerdbuds Ltd
                </span>{" "}
                <br />
                Account Number:{" "}
                <span className=" text-[#132E40 font-semibold">
                  09998712345
                </span>
              </p>
              <p className=" mt-5 ml-5">
                If you have having any problem with payment reach out to{" "}
                <a
                  href="https://example.com/customer-support"
                  className="underline text-[#132E40]"
                >
                  support@nerdbuds.com
                </a>
                .
              </p>{" "}
            </div>
            <div className="vertical-line"></div>
            <div className="content-right hidden lg:block">
              <img
                className=" hidden lg:block w-[18.5rem] mt-[-1rem] ml-14 "
                src="/payimage.png"
                alt="payimage"
              />
            </div>
          </div>
        </div>

        <PayStack isOpen={isOpen} onClose={onClose} />
      </div>

      <style jsx>{`
        .tab-titles {
          margin: 30px 0.25rem;
          display: flex;
        }

        .tab-links {
          margin-right: 50px;
          font-size: 17px;
          font-weight: 500;
          cursor: pointer;
          position: relative;
        }

        .tab-links::after {
          content: "";
          width: 0;
          height: 3px;
          background-color: #132e40;
          position: absolute;
          left: 0;
          bottom: -8px;
          cursor: pointer;
          transition: 0.5s;
        }

        .active-link::after {
          width: 100%;
        }

        .tab-contents ul li {
          list-style: none;
          margin: 0px 35px;
        }

        .tab-contents ul li span {
          color: #6495ed;
          font-size: 14px;
        }

        .tab-contents {
          display: none;
        }

        .active-tab {
          display: block;
        }

        .responsive-div {
          display: flex;
          flex-direction: row;
          align-items: stretch;
          width: 97%;
          max-width: 900px;
          height: 50vh;
          background-color: #f5f4f4;
          border: 2px solid #b1afaf;
          border-radius: 10px;
          margin: 4% 0.25rem;
        }

        @media screen and (min-width: 768px) {
          .responsive-div {
            height: 40vh; /* Adjusted height for medium screens */
          }
        }

        // .vertical-line {
        //   border-left: 1px solid #b1afaf;
        //   height: 100%;
        //   margin: 0 0 0 8%;
        // }

        .content-left,
        .content-right {
          flex: 1;
          padding: 20px;
        }
      `}</style>
    </div>
  );
}
