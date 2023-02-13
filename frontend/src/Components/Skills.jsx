import React from "react";
import {
  Link,
  Box,
  Container,
  Card,
  CardBody,
  Text,
  Stack,
  Heading,
  CardFooter,
  Image,
  Button,
  Icon,
  HStack,
  VStack,
  Flex,
} from "@chakra-ui/react";
import react from "../Assets/react.svg";
import javascript from "../Assets/javascript.svg";
import sass from "../Assets/sass.svg";
import node from "../Assets/nodejs.svg";
import mysql from "../Assets/mysql.svg";
import mongodb from "../Assets/mongodb.svg";
import adobe from "../Assets/adobexd.svg";
import figma from "../Assets/figma.svg";

const Skills = () => {
  return (
    <Box>
      <Container minWidth="100vw">
        <Card overflow="hidden" variant="outline">
          <Heading>Compétences</Heading>
          <Flex justifyContent="space-between">
            <Box>
              <Box display="flex" flexDirection="column">
                <Heading>Backend</Heading>
                <Box display="flex" flexDirection="row">
                  <Image
                    maxWidth="25%"
                    height="auto"
                    m={1}
                    src={node}
                    alt="NodeJs"
                  />
                  <Image
                    maxWidth="30%"
                    height="auto"
                    m={1}
                    src={mysql}
                    alt="MySql"
                  />
                  <Image
                    maxWidth="30%"
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
                <Heading>Frontend</Heading>
                <Box display="flex" flexDirection="row">
                  <Image
                    maxWidth="25%"
                    height="auto"
                    m={1}
                    src={react}
                    alt="React"
                  />
                  <Image
                    maxWidth="30%"
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
                <Heading>Design</Heading>
                <Box display="flex" flexDirection="row">
                  <Image
                    maxWidth="25%"
                    height="auto"
                    m={1}
                    src={adobe}
                    alt="Adobe XD"
                  />
                  <Image
                    maxWidth="30%"
                    height="auto"
                    m={1}
                    src={figma}
                    alt="Figma"
                  />
                </Box>
              </Box>
            </Box>
          </Flex>
          <Box></Box>
        </Card>
      </Container>
    </Box>
  );
};

export default Skills;
