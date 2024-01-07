"use client";


import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { IoCloseOutline } from "react-icons/io5";
import Image from "next/image";

export default function ExistingModal({Close}: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  

  return (
    <div className="flex gap-3 py-4 mx-auto items-center">
      <Image
        src="/svgs/delete.svg"
        alt="lang"
        width={130}
        height={130}
        //   priority
      />
      <div>
        <p className="font-bold text-lg">Request delete</p>
        <p className="text-[#7D8484] my-3">
          Are you sure you want to delete? Once confirmed this action cannot be
          reversed.
        </p>
        <div className="flex text-center justify-between ">
          <button
            onClick={Close}
            className="w-[46%]  text-sm border-[#B1AFAF]  border text-[#7D8484] hover:text-black py-2 px-3 rounded-lg hover:bg-[#B1AFAF] "
          >
            No, Cancel
          </button>
          <button onClick={onOpen}
           className="w-[46%] text-sm bg-[#FEF2F2] text-[#F04C53] hover:bg-[#F04C53] hover:text-[#FEF2F2] py-2 rounded-lg">
            Yes, Delete
          </button>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size='xl'   motionPreset='slideInBottom'>
        <ModalOverlay />
        <ModalContent>
          {/* <ModalHeader>Modal Title</ModalHeader> */}
          <ModalCloseButton />
          <ModalBody>
          <div className="flex gap-3 py-4 mx-auto items-center">
      <Image
        src="/svgs/delete.svg"
        alt="lang"
        width={130}
        height={130}
        //   priority
      />
      <div>
        <p className="font-bold text-lg">Request delete</p>
        <p className="text-[#7D8484] my-3">
        Your request has been sent and is being processed. 
        </p>
        <div className="flex text-center justify-between ">
          <button
            onClick={(() => {
              Close()
              onClose()
            })}
            className="w-full text-sm border-[#B1AFAF]  border text-[#7D8484] hover:text-black py-2 px-3 rounded-xl hover:bg-[#B1AFAF] "
          >
            <p className=" flex gap-2 items-center w-fit mx-auto">

        Close <IoCloseOutline size={25} />
            </p>
          </button>
         
        </div>
      </div>
      </div>
          </ModalBody>

         
        </ModalContent>
      </Modal>
    </div>
  );
}
