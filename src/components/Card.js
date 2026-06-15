import React from "react";
import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, description, imageSrc }) => (
  <VStack
    color="white"
    backgroundColor="gray.700"
    borderRadius="xl"
    overflow="hidden"
    align="start"
    spacing={0}
  >
    <Image src={imageSrc} alt={title} w="100%" h="200px" objectFit="cover" />
    <VStack align="start" spacing={2} p={4}>
      <Heading as="h3" size="md">
        {title}
      </Heading>
      <Text color="gray.300" fontSize="sm">
        {description}
      </Text>
      <HStack spacing={2} pt={1}>
        <Text fontWeight="bold" fontSize="sm">
          See more
        </Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
    </VStack>
  </VStack>
);

export default Card;
