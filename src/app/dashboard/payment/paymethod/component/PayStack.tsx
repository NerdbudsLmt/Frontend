import React from "react";
import { useState } from "react";
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
  const [name, setName] = useState("");
  const [payresult, setPayresult] = useState("");

  const url = "/";

  const form = new FormData();
  form.append("email", email);
  form.append("amount", amount);
  form.append("name", name);

  async function paystackpay(e: { preventDefault: () => void; }) {
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
        window.location.href = data.data.authorization_url;
        return null;
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
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>payment</p>
            <p>{payresult}</p>
            urgjek;oj
            <form>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  id="email"
                />
              </div>

              <div>
                <label htmlFor="email">Amount</label>
                <input
                  type="email"
                  onChange={(e) => setAmount(e.target.value)}
                  value={amount}
                  id="email"
                />
              </div>
              <div>
                <label htmlFor="email">Name</label>
                <input
                  type="email"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  id="email"
                />
              </div>

              <div>
                <input
                  type="submit"
                  onClick={paystackpay}
                  value='Pay with paystack'
                  id="email"
                />
              </div>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
