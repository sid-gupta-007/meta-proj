import React from "react";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import Card from "./Card";
import { projects } from "../data";

const ProjectsSection = () => (
  <Box id="projects-section" py={16} px={8} backgroundColor="#1a1a2e">
    <Heading as="h1" size="xl" color="white" mb={8}>
      Featured Projects
    </Heading>
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
      {projects.map((project) => (
        <Card
          key={project.title}
          title={project.title}
          description={project.description}
          imageSrc={project.getImageSrc()}
        />
      ))}
    </SimpleGrid>
  </Box>
);

export default ProjectsSection;
