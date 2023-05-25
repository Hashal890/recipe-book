import { Box, Button, Image, Text, useToast } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeRecipeFromProfile } from "../store/recipe/recipe.action";

const SavedRecipeCard = ({
  idMeal,
  strMealThumb,
  strMeal,
  strCategory,
  strArea,
}) => {
  const dispatch = useDispatch();
  const { isAuthanticated } = useSelector((store) => store.auth);
  const toast = useToast();

  const removeFromProfile = () => {
    dispatch(removeRecipeFromProfile(idMeal));
    toast({
      title: `${strMeal} removed from save collection!`,
      position: "bottom-right",
      isClosable: true,
      status: "success",
    });
  };

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
        <Button onClick={removeFromProfile} colorScheme={"cyan"}>
          Remove recipe
        </Button>
      )}
    </Box>
  );
};

export default SavedRecipeCard;
