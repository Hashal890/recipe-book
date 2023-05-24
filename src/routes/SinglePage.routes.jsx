import { AspectRatio, Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getRecipiesByID } from "../store/recipe/recipe.action";

const SinglePage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { singleRecipe } = useSelector((store) => store.recipe);

  // console.log(singleRecipe);

  useEffect(() => {
    // console.log(params);
    dispatch(getRecipiesByID(params.id));
  }, []);

  return (
    <Box>
      {singleRecipe && (
        <>
          <AspectRatio maxW="560px" ratio={16 / 9}>
            <iframe
              title={singleRecipe.idMeal}
              src={singleRecipe.strYoutube}
              allowFullScreen
            />
          </AspectRatio>
        </>
      )}
    </Box>
  );
};

export default SinglePage;
