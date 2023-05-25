import { Box, Button, Image, Text, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { saveRecipeToProfile } from "../store/recipe/recipe.action";

const RecipeCard = (recipe) => {
  const dispatch = useDispatch();
  const { idMeal, strMealThumb, strMeal, strCategory, strArea } = recipe;
  const { isAuthanticated } = useSelector((store) => store.auth);
  const toast = useToast();
  const { savedRecipes } = useSelector((store) => store.recipe);
  const [isPresent, setIsPresent] = useState(false);

  const checkRecipeSavedOrNot = () => {
    let temp = false;
    for (let i = 0; i < savedRecipes.length; i++) {
      if (savedRecipes[i].idMeal === idMeal) {
        temp = true;
      }
    }
    if (temp) setIsPresent(true);
  };

  const saveToProfile = () => {
    if (!isPresent) {
      dispatch(saveRecipeToProfile(recipe));
      toast({
        title: `${strMeal} saved successfully!`,
        position: "bottom-right",
        isClosable: true,
        status: "success",
      });
      setIsPresent(true);
    }
  };

  useEffect(() => {
    checkRecipeSavedOrNot();
  }, []);

  return (
    <Box borderRadius={6} border={"1px dotted gray"} py={2} px={4}>
      <Image src={strMealThumb} alt={strMeal} borderRadius={6} mb={2} />
      <Text>Name: {strMeal}</Text>
      <Text>Area: {strArea}</Text>
      <Text>Category: {strCategory}</Text>
      <Box textDecor={"underline"} _hover={{ color: "yellow.900" }} py={2}>
        <Link to={`/recipe/${idMeal}`}>View Details</Link>
      </Box>
      {isAuthanticated && (
        <Button
          onClick={saveToProfile}
          colorScheme={"cyan"}
          disabled={isPresent}
        >
          Save recipe
        </Button>
      )}
    </Box>
  );
};

export default RecipeCard;
