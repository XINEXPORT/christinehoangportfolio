import React, { useState } from "react";
import axios from "axios";

const EmailRestAPI = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: name,
        from_email: email,
        to_name: "Web Wizard",
        message: message,
      },
    };

    try {
      const res = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data,
      );
      console.log(res.data);
      setStatus("Email sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("Failed to send email.");
    }
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
        className="w-full bg-violet-600 text-white py-2 px-4 rounded-lg hover:bg-violet-700 transition-colors duration-300"
      >
        Send Email
      </button>

      {status && <p className="text-center mt-4">{status}</p>}
    </form>
  );
};

export default EmailRestAPI;
