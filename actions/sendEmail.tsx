"use server";

import EmailContactForm from "@/email/EmailContactForm";
import { getErrorMessage } from "@/utils/utils";
import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (formData: FormData) => {
  const senderName = formData.get("senderName");
  const message = formData.get("message");
  const senderEmail = formData.get("senderEmail");

  if (!senderName || typeof senderName !== "string") {
    return {
      error: "Invalid sender name",
    };
  }

  if (!message || typeof message !== "string") {
    return {
      error: "Invalid message",
    };
  }

  if (!senderEmail || typeof senderEmail !== "string") {
    return {
      error: "Invalid sender email",
    };
  }

  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "codewithwaqarahmad@gmail.com",
      subject: `New Message by ${senderName.toUpperCase()} from Portfolio`,
      reply_to: senderEmail,
      // react: <EmailContactForm message={message} senderEmail={senderEmail} />,
      text: message,
    });
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }
};

export default sendEmail;
