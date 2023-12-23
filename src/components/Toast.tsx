import { ChakraProvider, Box, Button, useToast } from "@chakra-ui/react";

type ToastProps = {
  title: string;
  status: "success" | "error" | "warning" | "info";
  isClosable: boolean;
  duration: number;
  description: string;
};

type Status = "success" | "error" | "warning" | "info";
type Position =
  | "top"
  | "bottom"
  | "top-right"
  | "top-left"
  | "bottom-right"
  | "bottom-left";

const useCustomToast = () => {
  const toast = useToast();

  const showToast = (
    title: string,
    status: Status,
    isClosable: boolean,
    duration: number,
    description: string,
    position: Position
  ) => {
    toast({
      title,
      description,
      status,
      duration,
      isClosable: true,
      position,
    });
  };

  return showToast;
};

export default useCustomToast;
