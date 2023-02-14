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
      sx={{
        background: "#2D2B2B",
        maxWidth: "100vw",
        minHeight: "10vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <header>
        <nav>
          <Box color="white">
            <ul>
              <li>
                <Link className="link" href="/me" mr={4}>
                  About
                </Link>
              </li>
              <li>
                <Link className="link" href="#skills" mr={4}>
                  Skills
                </Link>
              </li>
              <li>
                <Link className="link" href="#projects" mr={4}>
                  Mes projets
                </Link>
              </li>
              <li>
                <Link className="link" href="/contact" mr={4}>
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
