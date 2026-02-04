import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(""); // idle, sending, success, error
  const [message, setMessage] = useState("");

  // ===== EmailJS credentials =====
  const SERVICE_ID = "service_alah2eo";      // Your EmailJS Service ID
  const TEMPLATE_ID = "template_z40saen";   // Your EmailJS Template ID
  const PUBLIC_KEY = "VBtNJ04NuLR9pza9a";   // Your EmailJS Public Key

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("sending");
    setMessage("");

    // ===== Template parameters =====
    // Must match placeholders in your template (adjust if your template has different fields)
    const templateParams = {
      user_email: email,          // matches {{user_email}} in your template
      from_name: "Portfolio Site", // optional, if template has {{from_name}}
      to_name: "Abdalsalam"        // optional, if template has {{to_name}}
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("success");
          setMessage("Thank you for subscribing!");
          setEmail(""); // reset input
        },
        (err) => {
          console.error("FAILED...", err);
          setStatus("error");
          setMessage("Oops! Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="w-full max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-3 text-center">
        Subscribe to our Newsletter
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          className={`p-3 rounded-md text-black-50 font-semibold transition ${
            status === "sending"
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending..." : "Subscribe"}
        </button>
      </form>

      {message && (
        <p
          className={`mt-3 text-center ${
            status === "success" ? "text-green-600" : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default Newsletter;