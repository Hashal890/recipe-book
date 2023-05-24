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
import { useDispatch, useSelector } from "react-redux";
import { logoutAPI } from "../store/auth/auth.actions";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const dispatch = useDispatch();
  const { isAuthanticated } = useSelector((store) => store.auth);

  // console.log(isAuthanticated);

  const onSubmit = () => {
    // alert("logout");
    dispatch(logoutAPI());
  };

  return (
    <Box
      bg={useColorModeValue("gray.100", "gray.900")}
      px={4}
      position={"fixed"}
      w={"100%"}
      zIndex={10000}
      // mt={window.location.pathname === "/" ? -6 : 0}
      // mb={10}
    >
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Link to={"/"}>Home</Link>
        <Flex alignItems={"center"}>
          <Stack direction={"row"} spacing={[2, 3, 7]} alignItems={"center"}>
            {isAuthanticated ? (
              <>
                <Link to={"/savedrecipes"}>Saved Recipes</Link>
                <Link to={"/profile"}>Profile</Link>
                <Button
                  bg={"green.500"}
                  color={"whiteAlpha.900"}
                  _hover={{ bg: "yellow.500", color: "whiteAlpha.900" }}
                  onClick={onSubmit}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link to={"/signup"}>Signup</Link>
                <Link to={"/login"}>Login</Link>
              </>
            )}
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
}
