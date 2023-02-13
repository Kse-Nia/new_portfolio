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
} from "@chakra-ui/react";

import { BsGithub } from "react-icons/bs";
import { IoOpenOutline } from "react-icons/io5";
import mySql from "../Assets/mysql.png";
import react from "../Assets/react.png";
import redux from "../Assets/redux.png";
import node from "../Assets/node.svg";
import express from "../Assets/express.svg";
import sass from "../Assets/sass.png";

function Feature({ title, image, desc, techno, href, linkcode, ...rest }) {
  return (
    <Box p={4} borderWidth="1px" {...rest}>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src={image}
          alt="Caffe Latte"
        />
        <Stack>
          <CardBody>
            <Heading size="md">{title}</Heading>
            <Text py="2">{desc}</Text>
            <Text py="2">Technologies utilisées:</Text>
            <Box display="flex" flexDirection="row">
              <Text>{techno}</Text>
            </Box>
          </CardBody>
          <CardFooter>
            <Box>
              <Link href={href}>
                <Button m={2} variant="solid" colorScheme="blue">
                  <Icon as={IoOpenOutline} marginRight={2} />
                  Site
                </Button>
              </Link>
              <Link href={linkcode}>
                <Button m={2} variant="solid" colorScheme="blue">
                  <Icon as={BsGithub} marginRight={2} />
                  Code source
                </Button>
              </Link>
            </Box>
          </CardFooter>
        </Stack>
      </Card>
    </Box>
  );
}

const CardProject = () => {
  return (
    <Stack spacing={6} direction="row">
      <Feature
        title="Groupomania"
        desc="Réseau social d'entreprise avec les fonctionnalités CRUD
        (Create, Read, Update, Delete). Les utilisateurs peuvent publier
        des posts avec des images et du texte, les commenter et de liker
        les publications."
        linkcode="https://github.com/Kse-Nia/Groupomania"
        techno="MySQL, Node, React, Redux"
      />
      <Feature
        title="Piiquante"
        desc=" Mise en place du backend d'une application de gestion de sauces.
        Les clients peuvent créer une « galerie de sauces » qui permet
        de télécharger leurs sauces piquantes préférées et de liker ou
        disliker celles des autres."
        linkcode="https://github.com/Kse-Nia/P6_piiquante_mudrakova"
        techno="Node, Express, MongoDB, Mongoose, Multer, Helmet"
      />
      <Feature
        title="OhMyFood"
        desc="  Projet ohmyfood - Dynamisez une page web avec des animations
        CSS."
        linkcode="https://github.com/Kse-Nia/KseniyaMudrakova_3_18122020"
        techno="HTML, CSS, SASS"
      />
    </Stack>
  );
};

export default CardProject;
