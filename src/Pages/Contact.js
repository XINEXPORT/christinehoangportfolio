import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const EmailForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "REMOVED";
    const templateId = "REMOVED";
    const publicKey = "REMOVED";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Christine",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg space-y-6 border border-gray-300 glass"
    >
      <h1 className="text-2xl font-bold text-gray-500 text-center mb-4">
        Contact Me
      </h1>

      <div className="space-y-2">
        <label
          htmlFor="name"
          className="block text-gray-500 text-sm font-medium"
        >
          Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="What's your name?"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border text-gray-700 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="email"
          className="block text-gray-500 text-sm font-medium"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="What's your email?"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border text-gray-700 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="message"
          className="block text-gray-500 text-sm font-medium"
        >
          Message
        </label>
        <textarea
          id="message"
          cols="30"
          rows="5"
          placeholder="What's your message?"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-2 border text-gray-700 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 resize-none"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-violet-500 text-white py-2 px-4 rounded-lg hover:bg-violet-600 transition-colors duration-300"
      >
        Send
      </button>
    </form>
  );
};

export default EmailForm;
