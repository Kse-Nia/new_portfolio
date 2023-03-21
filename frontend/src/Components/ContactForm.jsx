import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Textarea,
  useToast,
  Button,
  Input,
  Text,
} from "@chakra-ui/react";
import Swal from "sweetalert2";

const ContactForm = () => {
  const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        Swal.fire({
          icon: "success",
          title: "Message envoyé",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, une erreur est survenue. Message non envoyé",
          text: error.text,
        });
      }
    );
    e.target.reset();
  };

  return (
    <>
      <Box
        id="contact"
        mt={5}
        paddingTop="4vh"
        paddingBottom="6vh"
        bg="#1D1C1C"
        display="flex"
        alignItems="center"
        flexDirection="column"
      >
        <Heading
          textAlign="center"
          mb={8}
          mt={10}
          /*  color="#a9347e" */ color="#BE7FF5"
        >
          Me contacter
        </Heading>
        <Box
          minWidth="50%"
          display="flex"
          justifyContent="center"
          color="#BE7FF5"
        >
          <form ref={form} onSubmit={handleSubmit}>
            <FormControl id="name" minW="50vw" isRequired>
              <FormLabel>Nom : </FormLabel>
              <Input borderColor="#BE7FF5" type="text" name="from_name" />
            </FormControl>
            <FormControl id="email" mt={4} isRequired>
              <FormLabel>Email : </FormLabel>
              <Input borderColor="#BE7FF5" type="email" name="email" />
            </FormControl>
            <FormControl id="message" mt={4} isRequired>
              <FormLabel>Votre message</FormLabel>
              <Textarea borderColor="#BE7FF5" name="message" />
            </FormControl>
            <Box display="flex" justifyContent="center" mt={8}>
              <Button bg="#BE7FF5" colorScheme="white" mt={8} type="submit">
                Envoyer
              </Button>
            </Box>
          </form>
        </Box>
      </Box>

      <Box display="flex" flexDirection="row">
        <Text>2023</Text>
        <Text> © Kseniya Mudrakova</Text>
      </Box>
    </>
  );
};

export default ContactForm;
