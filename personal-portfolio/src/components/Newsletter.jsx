
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("sending");
    setMessage("");

    // ===== EmailJS template parameters =====
    const templateParams = {
      user_email: email,
      from_name: "Portfolio Site",
      to_name: "Abdalsalam",
    };

    try {
      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      console.log("EmailJS Success:", response);

      setStatus("success");
      setMessage("Thank you for subscribing!");
      setEmail("");

      // Reset status after 5 seconds
      setTimeout(() => {
        setStatus("");
        setMessage("");
      }, 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);

      setStatus("error");
      setMessage(
        `Something went wrong: ${
          error?.text || error?.message || "Unknown error"
        }`
      );
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center sm:px-10 md:px-16 lg:px-24">
      <div className="w-full max-w-5xl px-8 bg-black shadow-xl border rounded border-gray-200 text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Stay Updated!
        </h2>

        <p className="text-gray-600 mb-6">
          Subscribe to my newsletter to receive the latest updates and news.
        </p>

        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col items-center mt-2"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-center"
            required
          />

          <button
            type="submit"
            disabled={status === "sending"}
            className={`w-full p-3 border rounded text-white font-semibold transition ${
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
