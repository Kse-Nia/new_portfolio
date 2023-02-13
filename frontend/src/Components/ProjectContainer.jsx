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
} from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs";
import { IoOpenOutline } from "react-icons/io5";
import mySql from "../Assets/mysql.png";
import react from "../Assets/react.png";
import redux from "../Assets/redux.png";
import node from "../Assets/node.svg";
import express from "../Assets/express.svg";
import sass from "../Assets/sass.png";

const ProjectContainer = () => {
  return (
    <Container>
      <Stack spacing={4}>
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "200px" }}
            src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
            alt="Caffe Latte"
          />

          <Stack>
            <CardBody>
              <Heading size="md">Groupomania</Heading>
              <Text py="2">
                Réseau social d'entreprise avec les fonctionnalités CRUD
                (Create, Read, Update, Delete). Les utilisateurs peuvent publier
                des posts avec des images et du texte, les commenter et de liker
                les publications.
              </Text>
              <Text py="2">Technologies utilisées:</Text>
              <Box display="flex" flexDirection="row">
                <Image
                  maxWidth="10%"
                  height="auto"
                  m={1}
                  src={mySql}
                  alt="MySQL"
                />
                <Image
                  maxWidth="10%"
                  height="auto"
                  m={1}
                  src={react}
                  alt="React"
                />
                <Image
                  maxWidth="10%"
                  height="auto"
                  m={1}
                  src={redux}
                  alt="Redux"
                />
              </Box>
            </CardBody>
            <CardFooter>
              <Box>
                <Button m={2} variant="solid" colorScheme="blue">
                  <Icon as={IoOpenOutline} marginRight={2} />
                  Site
                </Button>
                <Button m={2} variant="solid" colorScheme="blue">
                  <Link href="https://github.com/Kse-Nia/Groupomania">
                    <Icon as={BsGithub} marginRight={2} />
                    Code source
                  </Link>
                </Button>
              </Box>
            </CardFooter>
          </Stack>
        </Card>

        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "200px" }}
            src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
            alt="Caffe Latte"
          />
          <Stack>
            <CardBody>
              <Heading size="md">Piiquante</Heading>
              <Text py="2">
                Mise en place du backend d'une application de gestion de sauces.
                Les clients peuvent créer une « galerie de sauces » qui permet
                de télécharger leurs sauces piquantes préférées et de liker ou
                disliker celles des autres.
              </Text>
              <Text py="2">Technologie utilisée:</Text>
              <Box display="flex" flexDirection="row">
                <Image maxWidth="10%" height="auto" src={node} alt="NodeJs" />
              </Box>
            </CardBody>
            <CardFooter>
              <Box>
                <Button m={2} variant="solid" colorScheme="blue">
                  <Icon as={IoOpenOutline} marginRight={2} />
                  Site
                </Button>
                <Button m={2} variant="solid" colorScheme="blue">
                  <Link href="https://github.com/Kse-Nia/P6_piiquante_mudrakova">
                    <Icon as={BsGithub} marginRight={2} />
                    Code source
                  </Link>
                </Button>
              </Box>
            </CardFooter>
          </Stack>
        </Card>

        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "200px" }}
            src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
            alt="Caffe Latte"
          />
          <Stack>
            <CardBody>
              <Heading size="md">OhMyFood</Heading>
              <Text py="2">
                Projet ohmyfood - Dynamisez une page web avec des animations
                CSS.
              </Text>
              <Text py="2">Technologie utilisée:</Text>
              <Box display="flex" flexDirection="row">
                <Image maxWidth="15%" height="auto" src={sass} alt="sass" />
              </Box>
            </CardBody>
            <CardFooter>
              <Box>
                <Button m={2} variant="solid" colorScheme="blue">
                  <Icon as={IoOpenOutline} marginRight={2} />
                  Site
                </Button>
                <Button m={2} variant="solid" colorScheme="blue">
                  <Link href="https://github.com/Kse-Nia/KseniyaMudrakova_3_18122020">
                    <Icon as={BsGithub} marginRight={2} />
                    Code source
                  </Link>
                </Button>
              </Box>
            </CardFooter>
          </Stack>
        </Card>
      </Stack>
    </Container>
  );
};

export default ProjectContainer;
