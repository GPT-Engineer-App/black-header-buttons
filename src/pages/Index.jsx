import React from "react";
import { Box, Button, Flex, Spacer } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box bg="black" py={4}>
      <Flex maxW="container.lg" mx="auto" align="center">
        <Box>{/* Add your logo here */}</Box>
        <Spacer />
        <Box>
          <Button colorScheme="whiteAlpha" variant="ghost" mr={4}>
            Home
          </Button>
          <Button colorScheme="whiteAlpha" variant="ghost" mr={4}>
            Learn More
          </Button>
          <Button colorScheme="whiteAlpha" variant="ghost" mr={4}>
            Pricing
          </Button>
          <Button colorScheme="whiteAlpha" variant="ghost">
            Contact Us
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Index;
