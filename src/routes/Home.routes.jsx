import React, { useEffect, useState } from "react";
import { Box, Button, Flex, Input, SimpleGrid } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import RecipeCard from "../components/RecipeCard";
import { getRandomRecipies } from "../store/recipe/recipe.action";

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const { data } = useSelector((store) => store.recipe);
  const dispatch = useDispatch();

  // console.log(data);

  const searchRecipies = () => {
    // console.log(searchText);
  };

  useEffect(() => {
    // dispatch(getRandomRecipies());
  });

  return (
    <Box textAlign={"center"}>
      <Flex alignItems={"center"} gap={6} maxW={"600px"} m={"auto"} mt={6}>
        <Input
          placeholder={"Search recipies"}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Button colorScheme={"whatsapp"} onClick={searchRecipies}>
          Search
        </Button>
      </Flex>
      <SimpleGrid columns={[1, 1, 2, 4]}>
        {data &&
          data.forEach((recipe) => {
            <RecipeCard key={recipe.idMeal} {...recipe} />;
          })}
      </SimpleGrid>
    </Box>
  );
};

export default Home;
