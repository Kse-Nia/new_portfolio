import React, { useState, useEffect } from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import mockupFood from "../Assets/mockupFood.png";
import mockupGrp from "../Assets/mockupGrp.png";

function ParallaxExample() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function handleWindowScroll() {
      setScrollY(window.pageYOffset);
    }

    window.addEventListener("scroll", handleWindowScroll);

    return () => window.removeEventListener("scroll", handleWindowScroll);
  }, []);

  return (
    <Box bg="#2D2B2B" maxH="800px" minH="60vh">
      <Box
        w="100%"
        h="400px"
        bg="#2D2B2B"
        bgImage={mockupFood}
        bgSize="cover"
        bgAttachment="fixed"
        /*    bgPos="50% 100%" */
        bgPos="right"
        pos="relative"
        bgRepeat="no-repeat"
      >
        <Box>
          <Text>OhMyFood</Text>
          <Text>Projet 3</Text>
          <Text className="description" color="white">
            Dynamisez une page web avec des animations CSS.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default ParallaxExample;
