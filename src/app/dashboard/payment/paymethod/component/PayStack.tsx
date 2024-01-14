import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
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

export default function PayStack({ isOpen, onClose }: any) {
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [name, setName] = useState("");
  const [payresult, setPayresult] = useState("");
  const router = useRouter();

  const url = "/";

  const form = new FormData();
  form.append("email", email);
  form.append("amount", amount);
  form.append("firstName", firstName);
  form.append("lastName", lastName);

  async function paystackpay(e: { preventDefault: () => void }) {
    e.preventDefault();
    await axios
      .post(url, form, {
        headers: {
          "": "",
        },
      })
      .then((response) => {
        let data = JSON.parse(response.data);
        console.log(data.data.authorization_url);
        setPayresult(data.data.authorization_url);
        router.push(data.data.authorization_url)
        
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
         Enter Your details
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p></p>
            <p>{payresult}</p>

            <form 
                className="mb-4"
            >
              <div className="my-3">
                <label
                  htmlFor="email"
                  className="block text-[16px]"
                >
                  Email
                </label>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  id="email"
                  className="border-[1.5px] border-black w-full text-[16px] rounded-md bg-white text-black px-3 py-2 mt-1 outline-primary"
                />
              </div>

              <div className="my-3">
                <label
                  htmlFor="email"
                  className="block text-[16px]"
                >
                  Amount
                </label>
                <input
                  type="email"
                  onChange={(e) => setAmount(e.target.value)}
                  value={amount}
                  id="email"
                  className="border-[1.5px] border-black w-full text-[16px] rounded-md bg-white text-black px-3 py-2 mt-1 outline-primary"
                />
              </div>
              <div className="my-3">
                <label
                  htmlFor="email"
                  className="block text-[16px]"
                >
                  First Name
                </label>
                <input
                  type="email"
                  onChange={(e) => setfirstName(e.target.value)}
                  value={firstName}
                  id="email"
                  className="border-[1.5px] border-black w-full text-[16px] rounded-md bg-white text-black px-3 py-2 mt-1 outline-primary"
                />
              </div>

             

              <div className="my-3">
                <label
                  htmlFor="email"
                  className="block text-[16px]"
                >
                  Last Name
                </label>
                <input
                  type="email"
                  onChange={(e) => setfirstName(e.target.value)}
                  value={lastName}
                  id="email"
                  className="border-[1.5px] border-black  w-full text-[16px] rounded-md bg-white text-black px-3 py-2 mt-1 outline-primary"
                />
              </div>

              <div>
                <input
                  type="submit"
                  onClick={paystackpay}
                  value="Pay with paystack"
                  id="email"
                  className="bg-[#205584] block font-semibold text-white ml-1 mt-10 w-full h-10 rounded-md"
                />
              </div>
            </form>
          </ModalBody>

          
        </ModalContent>
      </Modal>
    </div>
  );
}
