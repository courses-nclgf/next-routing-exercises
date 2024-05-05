"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { ToastContext } from "../../../../components/ToastProvider";

function ContactPage() {
  const router = useRouter();
  const { createToast } = React.useContext(ToastContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/exercises/02-flash-messages");
    createToast("Message sent successfully!", "success");
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input id="name" required={true} />

        <label htmlFor="message">Message:</label>
        <textarea id="message" />

        <button>Submit</button>
      </form>
    </main>
  );
}

export default ContactPage;
