import React, { useState, useEffect } from "react";
import {
  Link,
  Box,
  Card,
  CardBody,
  Text,
  Stack,
  Heading,
  CardFooter,
  Image,
  Button,
  Icon,
  ScaleFade,
  Slide,
  SlideFade,
} from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

import { BsGithub } from "react-icons/bs";
import { IoOpenOutline } from "react-icons/io5";

import mockupFood from "../Assets/mockupFood.png";
import mockupGrp from "../Assets/mockupGrp.png";

function Feature({ title, image, desc, techno, href, linkcode, alt, ...rest }) {
  const handleClick = (event) => {
    event.preventDefault();
    window.open(href, "_blank");
  };
  return (
    <Box height="100vh" display="flex" flexDirection="column">
      <Box height="120vh" pos="relative" backgroundColor="green">
        <Image
          src={mockupGrp}
          pos="fixed"
          top={-scrollY * 0.4}
          left="50vw"
          right="0"
          bottom="0"
          height="70vh"
          objectFit="cover"
        />
        <Box
          pos="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          textAlign="center"
        >
          <h1>Parallax Example 1</h1>
        </Box>
      </Box>
      <Box height="500px" pos="relative">
        <Image
          src={mockupFood}
          pos="fixed"
          top={-scrollY * 0.3}
          left="30vw"
          right="0"
          bottom="0"
          height="70vh"
          objectFit="cover"
        />
        <Box
          pos="absolute"
          top="30%"
          left="50%"
          transform="translate(-30%, -30%)"
          textAlign="center"
        >
          <h1>Parallax Example 3</h1>
        </Box>
      </Box>
    </Box>
  );
}

function ParallaxExample() {
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

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function handleWindowScroll() {
      setScrollY(window.pageYOffset);
    }

    window.addEventListener("scroll", handleWindowScroll);

    return () => window.removeEventListener("scroll", handleWindowScroll);
  }, []);

  return (
    <motion.div
      ref={ref}
      variants={stagger}
      initial="initial"
      animate={inView ? "animate" : "initial"}
    >
      <Heading m={4} id="projects" color="white">
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
              alt="image de la page d'accueil de Groupomania, connection ou inscription"
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
              alt="accueil du site Piiquante"
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
              alt="Page d'accueil de OhMyFood, recherche de restautant"
            />
          </ScaleFade>
        </motion.div>
      </Stack>
    </motion.div>
  );
}

export default ParallaxExample;
