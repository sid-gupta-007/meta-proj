import React, { useEffect, useRef, useState } from "react";
import { Box, HStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socials } from "../data";

const Header = () => {
  const [transform, setTransform] = useState("translateY(0)");
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setTransform(
        currentScrollY > prevScrollY.current ? "translateY(-200px)" : "translateY(0)"
      );
      prevScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (anchor) => (e) => {
    e.preventDefault();
    const el = document.getElementById(anchor);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    window.history.pushState(null, "", `/#${anchor}`);
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration="0.3s"
      transitionTimingFunction="ease-in-out"
      style={{ transform }}
      backgroundColor="#18181b"
      zIndex={100}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack px={16} py={4} justifyContent="space-between" alignItems="center">
          <nav>
            <HStack spacing={4}>
              {socials.map(({ icon, url }) => (
                <a key={url} href={url} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={icon} size="2x" />
                </a>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href="/#projects-section" onClick={handleClick("projects-section")}>
                Projects
              </a>
              <a href="/#contactme-section" onClick={handleClick("contactme-section")}>
                Contact Me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
