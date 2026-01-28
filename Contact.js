import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const [state, handleSubmit] = useForm("xaqjwldy");

  return (
    <section className="max-w-xl mx-auto my-12 p-6 bg-secondary rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Contact Me</h2>

      {state.succeeded ? (
        <p className="text-green-600 text-center font-semibold">
          Thanks for your message! I will get back to you soon.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label htmlFor="email" className="font-medium">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <label htmlFor="message" className="font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            className="border border-gray-900 rounded px-3 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-primary"
          ></textarea>
          <ValidationError prefix="Message" field="message" errors={state.errors} />

          <button
            type="submit"
            disabled={state.submitting}
            className="bg-primary text-white font-bold py-2 px-4 rounded hover:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {state.submitting ? "Sending..." : "Submit"}
          </button>
        </form>
      )}
    </section>
  );
}

export default Contact;
