import React from "react";
import { contactDetails } from "../Details";

function Contact() {
  const { email, phone } = contactDetails;

  return (
    <main className="container mx-auto max-width section glass">
      <h1 className="text-center text-2xl md:text-3xl lg:text-6xl text-dark-heading dark:text-light-heading font-semibold md:font-bold">
        For any questions, email me at
      </h1>
      <h3
        className="text-center text-xl sm:text-2xl md:text-4xl lg:text-6xl 
        bg-gradient-to-r from-blue-500 to-pink-700 bg-clip-text text-transparent 
        font-semibold md:font-bold pt-5 md:pt-10 md:pb-6 break-words"
      >
        <a href={`mailto:${email}`}>{email}</a>
      </h3>

      <span className="text-center text-content text-xl font-light block"></span>

      <h3
        className="text-center text-3xl md:text-4xl lg:text-6xl 
        bg-gradient-to-r from-blue-500 to-pink-700 bg-clip-text text-transparent 
        font-semibold md:font-bold pt-2 md:py-6"
      >
        <a href={`tel:${phone}`}>{phone}</a>
      </h3>
    </main>
  );
}

export default Contact;
