import {
  Box,
  FormControl,
  VStack,
  Input,
  InputLeftElement,
  Text,
  HStack,
  InputGroup,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { CiLock } from "react-icons/ci";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSession } from "next-auth/react";

interface UpdatePasswordData {
  oldPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

const Password: React.FC = () => {
  const { data: session } = useSession();
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const toast = useToast();

  const validationSchema = Yup.object().shape({
    oldPassword: Yup.string().required("required"),
    newPassword: Yup.string()
      .min(8, "New password must be at least 8 characters long")
      .required("required"),
    confirmNewPassword: Yup.string()
      .oneOf([Yup.ref("newPassword")], "Passwords must match")
      .required("required"),
  });

  const formik = useFormik<UpdatePasswordData>({
    initialValues: {
      oldPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await fetch(`${apiUrl}/users/password`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session?.user?.token || ""}`,
          },
          body: JSON.stringify({
            oldPassword: values.oldPassword,
            newPassword: values.newPassword,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          toast({
            title: "Password Updated Sucessfully",
            description: data.message,
            status: "success",
            duration: 5000,
            isClosable: true,
            position: "top-right",
          });
        } else {
          toast({
            title: "Password Update Failed",
            description: data.message,
            status: "error",
            duration: 5000,
            isClosable: true,
            position: "top-right",
          });
          console.error("Password update failed:", data.error);
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    },
  });

  return (
    <div>
      <Box
        bg="#F5F4F4"
        height="auto"
        width={{ base: "full", sm: "498px" }}
        rounded="10px"
        padding={6}
      >
        <Text fontSize="32px" color="#363939" fontWeight={600}>
          Password
        </Text>
        <form onSubmit={formik.handleSubmit}>
          <VStack spacing={4}>
            <FormControl>
              <InputGroup outline={"none"} size={"lg"}>
                <InputLeftElement>
                  <CiLock />
                </InputLeftElement>
                <Input
                  placeholder="Old Password"
                  outline={"none"}
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.oldPassword}
                  name="oldPassword"
                />
              </InputGroup>
              {formik.touched.oldPassword && formik.errors.oldPassword && (
                <Text color="red">{formik.errors.oldPassword}</Text>
              )}
            </FormControl>
            <FormControl>
              <InputGroup size={"lg"}>
                <InputLeftElement>
                  <CiLock />
                </InputLeftElement>
                <Input
                  placeholder="New Password"
                  outline={"#205584"}
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.newPassword}
                  name="newPassword"
                />
              </InputGroup>
              {formik.touched.newPassword && formik.errors.newPassword && (
                <Text color="red">{formik.errors.newPassword}</Text>
              )}
            </FormControl>
            <FormControl>
              <InputGroup size={"lg"}>
                <InputLeftElement>
                  <CiLock />
                </InputLeftElement>
                <Input
                  placeholder="Confirm New Password"
                  outline={"#205584"}
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.confirmNewPassword}
                  name="confirmNewPassword"
                />
              </InputGroup>
              {formik.touched.confirmNewPassword &&
                formik.errors.confirmNewPassword && (
                  <Text color="red">{formik.errors.confirmNewPassword}</Text>
                )}
            </FormControl>
          </VStack>
          <div className="mt-5">
            <HStack>
              <button
                className="bg-[#3F9BD5] text-white md:py-[10px] md:px-[21px] py-[10px] px-[14px] text-[15px] rounded-[10px]"
                type="submit"
                // disabled={!formik.isValid}
              >
                Save Changes
              </button>
              <button
                type="button"
                className="bg-[#B1AFAF] text-white py-[10px] px-[24px]  rounded-[10px]"
                onClick={formik.handleReset}
              >
                Cancel
              </button>
            </HStack>
          </div>
        </form>
      </Box>
    </div>
  );
};

export default Password;
