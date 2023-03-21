import React from "react";
import {
  Link,
  Box,
  Container,
  Text,
  Heading,
  Image,
  Icon,
  Flex,
} from "@chakra-ui/react";
import react2 from "../Assets/icons/react2.png";
import javascript from "../Assets/javascript.svg";
import sass from "../Assets/sass.svg";
import node from "../Assets/nodejs.svg";
import mysql from "../Assets/icons/mysql.png";
import mongodb from "../Assets/mongodb.svg";
import adobe from "../Assets/adobexd.svg";
import figma from "../Assets/icons/figma.png";
import seo2 from "../Assets/icons/seo2.png";

const Skills = () => {
  return (
    <Box
      id="skills"
      sx={{ backgroundColor: "white", minHeight: "30vh", marginTop: "5vh" }}
    >
      <Container maxWidth="100vw">
        <Heading m={4}>Compétences</Heading>
        <Flex justifyContent="space-between">
          <Box ml={5} mr={5}>
            <Box display="flex" flexDirection="column">
              <Heading fontSize="1.7rem">Backend</Heading>
              <Box display="flex" flexDirection="row">
                <Image
                  maxWidth="40%"
                  height="auto"
                  m={1}
                  src={node}
                  alt="NodeJs"
                />
                <Image
                  maxWidth="40%"
                  height="auto"
                  m={1}
                  src={mysql}
                  alt="MySql"
                />
                <Image
                  maxWidth="35%"
                  height="auto"
                  m={1}
                  src={mongodb}
                  alt="MongoDB"
                />
              </Box>
            </Box>
          </Box>
          <Box>
            <Box display="flex" flexDirection="column">
              <Heading fontSize="1.7rem">Frontend</Heading>
              <Box display="flex" flexDirection="row">
                <Image
                  maxWidth="40%"
                  height="auto"
                  m={1}
                  src={react2}
                  alt="React"
                />
                <Image
                  maxWidth="40%"
                  height="auto"
                  m={1}
                  src={sass}
                  alt="Sass"
                />
              </Box>
            </Box>
          </Box>
          <Box>
            <Box display="flex" flexDirection="column">
              <Heading fontSize="1.7rem">Design</Heading>
              <Box display="flex" flexDirection="row">
                <Image
                  maxWidth="35%"
                  height="auto"
                  m={1}
                  src={adobe}
                  alt="Adobe XD"
                />
                <Image
                  maxWidth="35%"
                  height="auto"
                  m={1}
                  src={figma}
                  alt="Figma"
                />
              </Box>
            </Box>
          </Box>
          <Box>
            <Box display="flex" flexDirection="column">
              <Heading fontSize="1.7rem">Autre</Heading>
              <Box display="flex" flexDirection="column">
                {/*    <Text>SEO</Text> */}
                <Image
                  maxWidth="35%"
                  height="auto"
                  m={1}
                  src={seo2}
                  alt="seo"
                />
                <Text>Responsive</Text>
              </Box>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Skills;
