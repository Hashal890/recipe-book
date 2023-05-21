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

const Login = () => {
  const [loginState, setLoginState] = useState(initLoginState);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Container maxW={"lg"} mt={8}>
      <Stack spacing="8">
        <Stack spacing="6">
          <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
            <Heading size={{ base: "xs", md: "sm" }}>
              Log in to your account
            </Heading>
          </Stack>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={"6"} alignItems={"center"} justifyContent={"center"}>
            <Stack spacing={"5"}>
              <FormControl name={"email"} isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type={"email"} minW={"400px"} />
              </FormControl>
              <FormControl name={"password"} isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? "text" : "password"} />
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
            <Button colorScheme={"linkedin"} minW={"200px"}>
              Log in
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default Login;
