"use client";

import sendEmail from "@/actions/sendEmail";
import { FormSubmitButton } from "@/components";
import { useRef } from "react";
import toast from "react-hot-toast";
import { getErrorMessage } from "@/utils/utils";

const ContactForm = () => {
  const ref = useRef<HTMLFormElement>(null);

  return (
    <form
      ref={ref}
      className="mt-4 flex flex-col gap-4"
      action={async (formData: FormData) => {
        const data = await sendEmail(formData);

        if (data?.error) {
          toast.error(getErrorMessage(data.error));
        } else {
          ref.current?.reset();
          toast.success("Message send successfully.", {
            style: {
              border: "1px solid #2C73F8",
              padding: "9px",
              color: "#2C73F8",
            },
            iconTheme: {
              primary: "#2C73F8",
              secondary: "#F7FAFC",
            },
          });
        }
      }}
    >
      <input
        type="text"
        name="senderName"
        required
        placeholder="Name"
        className="rounded-md border stroke-special p-2 outline-special lg:w-[35rem] dark:stroke-cherry dark:outline-cherry dark:border-slate-800 dark:bg-black"
        maxLength={50}
      />
      <input
        type="email"
        name="senderEmail"
        placeholder="Email, So I can get back to you"
        required
        className="rounded-md border stroke-special p-2 outline-special lg:w-[35rem] dark:stroke-cherry dark:outline-cherry dark:border-slate-800 dark:bg-black"
        maxLength={50}
      />
      <textarea
        required
        name="message"
        placeholder="Message"
        className="rounded-md border stroke-special p-2 outline-special lg:w-[35rem] dark:stroke-cherry dark:outline-cherry dark:border-slate-800 dark:bg-black"
        rows={5}
        maxLength={500}
      />
      <FormSubmitButton />
    </form>
  );
};

export default ContactForm;
