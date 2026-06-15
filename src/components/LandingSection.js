import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";

const greeting = "Hello, I am Siddharth!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const LandingSection = () => (
  <VStack
    id="landing-section"
    minH="100vh"
    justifyContent="center"
    alignItems="center"
    spacing={4}
  >
    <Avatar size="2xl" src="https://media.licdn.com/dms/image/v2/D5603AQESa8Q_HppTPA/profile-displayphoto-crop_800_800/B56ZtZNqGnHsAI-/0/1766728312867?e=1782950400&v=beta&t=kBo-AckGbkeKM3A3rgy6kh3CmzgW4A1InDqP-u-JdVw" name="Siddharth Gupta" />
    <Heading as="h4" size="md" noOfLines={1}>
      {greeting}
    </Heading>
    <Heading as="h1" size="3xl" noOfLines={1}>
      {bio1}
    </Heading>
    <Heading as="h1" size="3xl" noOfLines={1}>
      {bio2}
    </Heading>
  </VStack>
);

export default LandingSection;
