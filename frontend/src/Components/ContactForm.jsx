import React, { useState } from "react";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useToast,
} from "@chakra-ui/react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Box mt={5} bg="#ffff">
      <Heading textAlign="center" mb={8}>
        Me contacter
      </Heading>
      <Box p={10}>
        <form onSubmit={handleSubmit}>
          <FormControl id="name" isRequired>
            <FormLabel>Nom : </FormLabel>
            <Input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </FormControl>
          <FormControl id="email" mt={4} isRequired>
            <FormLabel>Email : </FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </FormControl>
          <FormControl id="message" mt={4} isRequired>
            <FormLabel>Votre message : </FormLabel>
            <Textarea
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
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
