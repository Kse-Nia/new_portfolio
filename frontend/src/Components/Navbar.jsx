import React from "react";
import { Link, Box } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const Navbar = () => {
  return (
    <header>
      <nav>
        <Box display="flex" justifyContent="center">
          <Link href="/me" color="teal.500" mr={4}>
            About
          </Link>
          <Link href="/projects" color="teal.500" mr={4}>
            Projects
          </Link>
          <Link href="/contact" color="teal.500" mr={4}>
            Contact
          </Link>
        </Box>
      </nav>
    </header>
  );
};

export default Navbar;
