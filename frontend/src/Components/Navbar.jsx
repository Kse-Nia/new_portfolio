import React from "react";
import { Link, Box, Container } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const Navbar = () => {
  return (
    <Container
      sx={{
        background: "#2D2B2B",
        maxWidth: "100vw",
        minHeight: "8vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <header>
        <nav>
          <Box color="white">
            <Link href="/me" mr={4}>
              About
            </Link>
            <Link href="#skills" mr={4}>
              Skills
            </Link>
            <Link href="#projects" mr={4}>
              Mes projets
            </Link>
            <Link href="/contact" mr={4}>
              Contact
            </Link>
          </Box>
        </nav>
      </header>
    </Container>
  );
};

export default Navbar;
