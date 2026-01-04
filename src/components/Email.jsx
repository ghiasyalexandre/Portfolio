import { useState } from "react";
import emailjs from "@emailjs/browser";

const Email = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      user_name: name,
      user_email: email,
      subject: subject,
      message: message,
    };

    emailjs
      .send(
        "service_6yvudj6", // Replace with your EmailJS service ID
        "template_aoq4g0n", // Replace with your EmailJS template ID
        templateParams,
        "snF53js1vWDIoLxwn" // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          setStatus("SUCCESS");

          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
          setTimeout(() => setStatus(""), 8000); // Clear status message after 8 seconds
        },
        (error) => {
          setStatus("ERROR");
          setTimeout(() => setStatus(""), 8000); // Clear status message after 8 seconds
          console.log("Failed to send email", error);
        }
      );
  };

  return (
    <div className="bg-gradient p-4 py-16 sm:p-16 border-t border-neutral-800">
      <div
        id="email"
        className="bg-gradient group p-4 sm:p-6 rounded-lg shadow-neonLightSlim max-w-4xl sm:mx-auto"
      >
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 text-center ">
          Contact Me
        </h2>
        <p className="text-neutral-200 mb-2 text-center">
          Attach your email and I&apos;ll get back to you as soon as possible
        </p>
        <hr className="self-hr-invert mb-4 w-full group-hover:bg-right" />
        <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-200"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder=""
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-200"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder=""
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-200"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              placeholder=""
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-200"
            >
              Message
            </label>
            <textarea
              type="text"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              placeholder=""
              className="w-full px-4 py-2 mt-1 min-h-32 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-rose-500"
            />
          </div>
          <div className="w-full flex">
            <button
              type="submit"
              className="w-full hover:text-gray-800 group-hover:bg-left  md:w-48 md:mx-auto fun-invert text-white font-semibold py-2 rounded-full transition-all border border-white"
            >
              Send Email
            </button>
          </div>
        </form>
        {status === "SUCCESS" && (
          <p className="text-green-500 mt-4">
            Message sent successfully, will reach back shortly!
          </p>
        )}
        {status === "ERROR" && (
          <p className="text-red-500 mt-4">
            Failed to send message. Please try again later.
          </p>
        )}
      </div>
    </div>
  );
};

export default Email;
