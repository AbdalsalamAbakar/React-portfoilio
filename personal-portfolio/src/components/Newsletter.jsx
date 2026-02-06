import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(""); // idle, sending, success, error
  const [message, setMessage] = useState("");

  // ===== EmailJS credentials =====
  const SERVICE_ID = "service_alah2eo";
  const TEMPLATE_ID = "template_z40saen";
  const PUBLIC_KEY = "VBtNJ04NuLR9pza9a";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("sending");
    setMessage("");

    const templateParams = {
      user_email: email,
      from_name: "Portfolio Site",
      to_name: "Abdalsalam",
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(
        () => {
          setStatus("success");
          setMessage("Thank you for subscribing!");
          setEmail(""); // Clear input

          // Optional: reset status after a few seconds
          setTimeout(() => {
            setStatus("");
            setMessage("");
          }, 5000);
        },
        () => {
          setStatus("error");
          setMessage("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white to-gray-100">
      <div className="w-full max-w-md p-8 bg-black shadow-xl rounded-xl border border-gray-200 text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Stay Updated!
        </h2>
        <p className="text-gray-600 mb-6">
          Subscribe to our newsletter to receive the latest updates and news.
        </p>

        <form onSubmit={handleSubmit} className="w-full flex flex-col items-center mt-2">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-center"
            required
          />

          <button
            type="submit"
            disabled={status === "sending"}
            className={`w-full p-3 rounded-lg text-white font-semibold transition ${
              status === "sending"
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {status === "sending" ? "Sending..." : "Subscribe"}
          </button>
        </form>

        {message && (
          <p
            className={`mt-4 font-medium ${
              status === "success" ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default Newsletter;
