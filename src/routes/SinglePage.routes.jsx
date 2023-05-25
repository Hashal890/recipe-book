import { AspectRatio, Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getRecipiesByID } from "../store/recipe/recipe.action";

const SinglePage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { singleRecipe } = useSelector((store) => store.recipe);
  const [url, setUrl] = useState(null);

  // console.log(singleRecipe);

  const getNewYoutubeURL = (ytURL) => {
    let newURL = "https://www.youtube.com/embed/";
    let address = ytURL.split("=")[1];
    // console.log("address", address);
    newURL += address;
    // console.log("url" , newURL);
    setUrl(newURL);
  };

  useEffect(() => {
    if (singleRecipe) getNewYoutubeURL(singleRecipe.strYoutube);
  }, [singleRecipe]);

  useEffect(() => {
    // console.log(params);
    dispatch(getRecipiesByID(params.id));
  }, []);

  // useEffect(() => console.log(url), [url]);

  return (
    <Box p={6} maxW={"1200px"} m={"auto"}>
      {singleRecipe && (
        <VStack justifyContent={"center"} alignItems={"center"}>
          <Flex gap={4}>
            <Image
              src={singleRecipe.strMealThumb}
              alt={singleRecipe.strMeal}
              maxW={"400px"}
              borderRadius={10}
              border={"3px dotted gray"}
            />
            <Box>
              <Text>
                <span style={{ fontWeight: "bold", color: "green" }}>
                  Name:
                </span>{" "}
                {singleRecipe.strMeal}
              </Text>
              <Text>
                <span style={{ fontWeight: "bold", color: "green" }}>
                  Process:
                </span>{" "}
                {singleRecipe.strInstructions}
              </Text>
              <Text>
                <span style={{ fontWeight: "bold", color: "green" }}>
                  Category:
                </span>{" "}
                {singleRecipe.strCategory}
              </Text>
              <Text>
                <span style={{ fontWeight: "bold", color: "green" }}>
                  Created from:
                </span>{" "}
                {singleRecipe.strArea}
              </Text>
              <Text>
                <span style={{ fontWeight: "bold", color: "green" }}>
                  Alternative availble:
                </span>{" "}
                {singleRecipe.strDrinkAlternate
                  ? singleRecipe.strDrinkAlternate
                  : "None"}
              </Text>
              {singleRecipe.strSource && (
                <Flex gap={2}>
                  <span style={{ fontWeight: "bold", color: "green" }}>
                    Get more information:
                  </span>{" "}
                  <Link to={singleRecipe.strSource}>
                    {singleRecipe.strSource}
                  </Link>
                </Flex>
              )}
            </Box>
          </Flex>
          {url && (
            <AspectRatio maxW={"560px"} ratio={16 / 9}>
              <iframe title={singleRecipe.strMeal} src={url} allowFullScreen />
            </AspectRatio>
          )}
        </VStack>
      )}
    </Box>
  );
};

export default SinglePage;
