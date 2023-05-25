import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import SavedRecipeCard from "../components/SavedRecipeCard";

const SavedRecipes = () => {
  const { savedRecipes } = useSelector((store) => store.recipe);

  return (
    <Box p={6} textAlign={"center"}>
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
