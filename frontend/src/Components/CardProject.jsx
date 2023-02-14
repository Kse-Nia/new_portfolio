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
  Fade,
  ScaleFade,
  Slide,
  SlideFade,
} from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

import { BsGithub } from "react-icons/bs";
import { IoOpenOutline } from "react-icons/io5";
import mySql from "../Assets/mysql.png";
import react from "../Assets/react.png";
import redux from "../Assets/redux.png";
import node from "../Assets/node.svg";
import express from "../Assets/express.svg";
import sass from "../Assets/sass.png";

// Websites screenshots
import food from "../Assets/ohmyfood.webp";
import groupomania from "../Assets/groupomania.webp";

function Feature({ title, image, desc, techno, href, linkcode, ...rest }) {
  const handleClick = (event) => {
    event.preventDefault();
    window.open(href, "_blank");
  };
  return (
    <Box p={4} {...rest}>
      <Card
        direction={{ base: "column", sm: "column" }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          objectFit="cover"
          /* maxW={{ base: "100%", sm: "200px" }} */
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
                  Live
                </Button>
              </Link>
              <Link href={linkcode}>
                <Button m={2} variant="solid" colorScheme="blue">
                  <Icon as={BsGithub} marginRight={2} />
                  Code
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
  // Animation on scroll
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.2, // Delay each project
      },
    },
  };

  const item = {
    initial: {
      opacity: 0,
      scale: 0.9,
    },
    animate: {
      opacity: 1,
      scale: 1,
    },
  };

  return (
    <motion.div
      m={5}
      ref={ref}
      variants={stagger}
      initial="initial"
      animate={inView ? "animate" : "initial"}
    >
      <Heading id="projects" color="white">
        Mes projets
      </Heading>
      <Stack spacing={6} direction="row">
        <motion.div variants={item}>
          <ScaleFade in={inView} transition={{ duration: 0.5 }}>
            <Feature
              title="Groupomania"
              desc="Réseau social d'entreprise avec les fonctionnalités CRUD
        (Create, Read, Update, Delete). Les utilisateurs peuvent publier
        des posts avec des images et du texte, les commenter et de liker
        les publications."
              image={groupomania}
              linkcode="https://github.com/Kse-Nia/Groupomania"
              techno="MySQL, Sequelize, Node, React, Redux Toolkit"
            />
          </ScaleFade>
        </motion.div>
        <motion.div variants={item}>
          <ScaleFade in={inView} transition={{ duration: 0.5 }}>
            <Feature
              title="Piiquante"
              desc=" Mise en place du backend d'une application de gestion de sauces.
        Les clients peuvent créer une « galerie de sauces » qui permet
        de télécharger leurs sauces piquantes préférées et de liker ou
        disliker celles des autres."
              linkcode="https://github.com/Kse-Nia/P6_piiquante_mudrakova"
              techno="Node, Express, MongoDB, Mongoose, Multer, Helmet"
            />
          </ScaleFade>
        </motion.div>
        <motion.div variants={item}>
          <ScaleFade in={inView} transition={{ duration: 0.5 }}>
            <Feature
              title="OhMyFood"
              image={food}
              desc="  Projet ohmyfood - Dynamisez une page web avec des animations
        CSS."
              linkcode="https://github.com/Kse-Nia/KseniyaMudrakova_3_18122020"
              href="https://kse-nia.github.io/ohmyfood/"
              techno="HTML, CSS, SASS"
            />
          </ScaleFade>
        </motion.div>
      </Stack>
    </motion.div>
  );
};

export default CardProject;
