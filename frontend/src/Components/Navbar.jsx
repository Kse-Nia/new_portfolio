import React from "react";
import {
  Link,
  Box,
  Container,
  Fade,
  ScaleFade,
  Slide,
  SlideFade,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const Navbar = () => {
  return (
    <Container
      className="header"
      position="fixed"
      top="0"
      left="0"
      right="0"
      bg="white"
      p={1}
      backgroundColor="#2D2B2B"
      minH="6vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      maxW="100vw"
      zIndex="1000"
    >
      <header>
        <nav>
          <Box color="white" fontSize="xl">
            <ul>
              <li>
                <Link
                  _hover={{
                    textShadow:
                      "0 0 .1em hotpink, 0 0 .2em hotpink, 0 0 .3em hotpink",
                  }}
                  className="link"
                  href="/me"
                  mr={4}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  _hover={{
                    textShadow:
                      "0 0 .1em hotpink, 0 0 .2em hotpink, 0 0 .3em hotpink",
                  }}
                  className="link"
                  href="#skills"
                  mr={4}
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  _hover={{
                    textShadow:
                      "0 0 .1em hotpink, 0 0 .2em hotpink, 0 0 .3em hotpink",
                  }}
                  className="link"
                  href="#projects"
                  mr={4}
                >
                  Mes projets
                </Link>
              </li>
              <li>
                <Link
                  _hover={{
                    textShadow:
                      "0 0 .1em hotpink, 0 0 .2em hotpink, 0 0 .3em hotpink",
                  }}
                  className="link"
                  href="/contact"
                  mr={4}
                >
                  Contact
                </Link>
              </li>
            </ul>
            <div className="hover-bar"></div>
          </Box>
        </nav>
      </header>
    </Container>
  );
};

export default Navbar;
