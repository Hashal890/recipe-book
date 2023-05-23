import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

const RecipeCard = ({
  idMeal,
  strMealThumb,
  strMeal,
  strCategory,
  strArea,
}) => {
  return (
    <Box>
      <Image src={strMealThumb} alt={strMeal} />
      <Text>Recipe Name: {strMeal}</Text>
      <Text>Recipe belongs to {strArea}</Text>
      <Text>Recipe Category: {strCategory}</Text>
    </Box>
  );
};

export default RecipeCard;
