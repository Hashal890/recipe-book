import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { initLoginState } from "../assets/data";
import { useDispatch } from "react-redux";
import authReducer from "../store/auth/authReducer";
import { loginAPI } from "../store/auth/auth.actions";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [creds, setCreds] = useState(initLoginState);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch(authReducer);
  const navigate = useNavigate();
  const userToken = localStorage.getItem("userToken") || null;

  // console.log(auth);

  const onChange = (e) => {
    const { name, value } = e.target;
    setCreds({
      ...creds,
      [name]: value,
    });
    // console.log(creds);
  };

  const onSubmit = async () => {
    if (!creds.email || !creds.password)
      alert("Please enter all required fields");
    else {
      await dispatch(loginAPI(creds));
      navigate("/");
    }
  };

  // if (userToken) navigate("/");

  return (
    <Container maxW={"lg"} mt={8}>
      <Stack spacing="8">
        {userToken ? (
          <Heading textAlign={"center"}>You are logged In!</Heading>
        ) : (
          <Stack spacing="6">
            <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
              <Heading size={{ base: "xs", md: "sm" }}>
                Log in to your account
              </Heading>
            </Stack>
          </Stack>
        )}
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={"6"} alignItems={"center"} justifyContent={"center"}>
            <Stack spacing={"5"}>
              <FormControl isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type={"email"}
                  name={"email"}
                  minW={"400px"}
                  onChange={onChange}
                />
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
            </Stack>
            <br />
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
                colorScheme={"linkedin"}
                minW={"200px"}
                onSubmit={onSubmit}
                // disabled={userToken !== null}
              >
                Log in
              </Button>
            )}
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default Login;
