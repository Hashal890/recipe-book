import { Box, Divider, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import SavedRecipeCard from "../components/SavedRecipeCard";

const SavedRecipes = () => {
  const { savedRecipes } = useSelector((store) => store.recipe);
  const { fName, lName, email } = useSelector((store) => store.auth);

  return (
    <Box p={6} textAlign={"center"}>
      <Flex justifyContent={"center"} gap={2} alignItems={"center"} pb={6}>
        <Text p={2} color={"cyan"} fontSize={"20px"}>
          Profile Details
        </Text>
        <Box textAlign={"initial"}>
          <Text>
            <span style={{ fontWeight: "bold", color: "green" }}>Name:</span>{" "}
            {fName + " " + lName}
          </Text>
          <Text>
            <span style={{ fontWeight: "bold", color: "green" }}>Email:</span>{" "}
            {email}
          </Text>
        </Box>
      </Flex>
      <Divider />
      <SimpleGrid columns={[1, 1, 2, 4]} gap={4} mt={[4, 4, 6]} px={[0, 0, 6]}>
        {savedRecipes.length > 1 &&
          savedRecipes.map((recipe) => (
            <SavedRecipeCard key={recipe.idMeal} {...recipe} />
          ))}
      </SimpleGrid>
    </Box>
  );
};

export default SavedRecipes;
