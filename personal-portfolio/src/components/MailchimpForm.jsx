import React from "react";
import Newsletter from "./Newsletter";

const MailchimpForm = () => {
  // No Mailchimp needed anymore, EmailJS is handled inside Newsletter.jsx
  return (
    <div className="w-full flex justify-center p-4">
      <Newsletter />
    </div>
  );
};

export default MailchimpForm;
