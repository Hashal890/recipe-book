import React, { useState } from "react";
import { Box, Button, Flex, Input } from "@chakra-ui/react";
import { useSelector } from "react-redux";
// import axios from "axios";

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const data = useSelector((store) => store);

  const searchRecipies = () => {
    // console.log(searchText);
  };

  // axios
  //   .get("https://www.themealdb.com/api/json/v1/1/random.php")
  //   .then((res) => console.log(res.data.meals[0]));

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
    </Box>
  );
};

export default Home;
