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
    <Box mt={5} bg="#ffff">
      <Heading textAlign="center" mb={8}>
        Me contacter
      </Heading>
      <Box p={10}>
        <form ref={form} onSubmit={handleSubmit}>
          <FormControl id="name" isRequired>
            <FormLabel>Nom : </FormLabel>
            <Input type="text" name="from_name" />
          </FormControl>
          <FormControl id="email" mt={4} isRequired>
            <FormLabel>Email : </FormLabel>
            <Input type="email" name="email" />
          </FormControl>
          <FormControl id="message" mt={4} isRequired>
            <FormLabel>Votre message</FormLabel>
            <Textarea name="message" />
          </FormControl>
          <Button colorScheme="blue" mt={8} type="submit">
            Envoyer
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default ContactForm;
