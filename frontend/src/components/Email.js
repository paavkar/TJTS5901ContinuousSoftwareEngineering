import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { VStack } from '@chakra-ui/react';

export default function Email() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mbzsi4j', 'contact_form', form.current, 'vpv8xFI6aDigQvtdr')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <VStack>
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
    </VStack>
  );
};