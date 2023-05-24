import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Input,
  SimpleGrid,
  useToast,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import RecipeCard from "../components/RecipeCard";
import {
  getRandomRecipies,
  getSearchRecipies,
} from "../store/recipe/recipe.action";

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const { data } = useSelector((store) => store.recipe);
  const dispatch = useDispatch();
  const toast = useToast();

  // console.log(data, "home page");

  const createToast = (toastText) => {
    toast({
      title: `${toastText} process started, please wait for some time.`,
      position: "bottom-right",
      isClosable: true,
      status: "success",
    });
  };

  const searchRecipies = () => {
    // console.log(searchText);
    createToast("Searching");
    dispatch(getSearchRecipies(searchText));
  };

  useEffect(() => {
    createToast("Data fetching");
    dispatch(getRandomRecipies());
  }, []);

  return (
    <Box textAlign={"center"} pb={6}>
      <Flex alignItems={"center"} gap={6} maxW={"600px"} m={"auto"}>
        <Input
          placeholder={"Search recipies"}
          // value={searchText}
          // onChange={(e) => setSearchText(e.target.value)}
        />
        <Button colorScheme={"whatsapp"}>Search</Button>
      </Flex>
      <Flex alignItems={"center"} gap={6} maxW={"600px"} m={"auto"} mt={8}>
        <Input
          placeholder={"Search recipies"}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Button colorScheme={"whatsapp"} onClick={searchRecipies}>
          Search
        </Button>
      </Flex>
      <SimpleGrid columns={[1, 1, 2, 4]} gap={4} mt={6} px={6}>
        {data &&
          data.length > 1 &&
          data.map((recipe) => <RecipeCard key={recipe.idMeal} {...recipe} />)}
      </SimpleGrid>
    </Box>
  );
};

export default Home;
