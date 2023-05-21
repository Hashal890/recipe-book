import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import { initSignupState } from "../assets/data";
import { useDispatch } from "react-redux";
import authReducer from "../store/auth/authReducer";
import { signupAPI } from "../store/auth/auth.actions";

const Signup = () => {
  const [creds, setCreds] = useState(initSignupState);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch(authReducer);
  const navigate = useNavigate();
  const userToken = localStorage.getItem("userToken") || null;

  // console.log(userToken !== null);

  const onChange = (e) => {
    const { name, value } = e.target;
    setCreds({
      ...creds,
      [name]: value,
    });
    // console.log(creds);
  };

  const onSubmit = async () => {
    if (!creds.fName || !creds.email || !creds.password)
      alert("Please enter all required fields");
    else {
      await dispatch(signupAPI(creds));
      navigate("/");
    }
  };

  // if (userToken) navigate("/");

  return (
    <Flex bg={useColorModeValue("gray.50", "gray.800")}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        {userToken ? (
          <Heading textAlign={"center"}>You are logged In!</Heading>
        ) : (
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Sign up
            </Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
        )}
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" name={"fName"} onChange={onChange} />
                </FormControl>
              </Box>
              <Box>
                <FormControl>
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" name={"lName"} onChange={onChange} />
                </FormControl>
              </Box>
            </HStack>
            <FormControl isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" name={"email"} onChange={onChange} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  name={"password"}
                  onChange={onChange}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              {userToken ? (
                <Button
                  onClick={() => navigate("/")}
                  colorScheme={"telegram"}
                  w={"220px"}
                  m={"auto"}
                >
                  Go Home
                </Button>
              ) : (
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  onClick={onSubmit}
                  // disabled={userToken !== null}
                  w={"220px"}
                  m={"auto"}
                >
                  Sign up
                </Button>
              )}
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user?{" "}
                <Link color={"blue.400"} to={"/login"}>
                  Login
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Signup;
