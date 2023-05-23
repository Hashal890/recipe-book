import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutAPI } from "../store/auth/auth.actions";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const dispatch = useDispatch();

  const onSubmit = () => {
    // alert("logout");
    dispatch(logoutAPI());
  };

  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Link to={"/"}>Recipe Book</Link>
        <Flex alignItems={"center"}>
          <Stack direction={"row"} spacing={7} alignItems={"center"}>
            <Link to={"/"}>Home</Link>
            <Link to={"/signup"}>Signup</Link>
            <Link to={"/login"}>Login</Link>
            <Button
              bg={"green.500"}
              color={"whiteAlpha.900"}
              _hover={{ bg: "yellow.500", color: "whiteAlpha.900" }}
              onClick={onSubmit}
            >
              Logout
            </Button>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
}
