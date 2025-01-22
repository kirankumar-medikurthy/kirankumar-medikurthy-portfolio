import React, { useContext, useState } from "react";
import emailjs from "emailjs-com";
import { contactLinks, ContactDetails } from "../constants";
import { ThemeContext } from "../themeProvider";

const Contact = () => {
  const theme = useContext(ThemeContext);
  const { full_name, contact_number, email_address, address } =
    ContactDetails[0];
  const darkMode = theme.state.darkMode;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userId = process.env.REACT_APP_EMAILJS_USER_ID;
    emailjs.send(serviceId, templateId, formData, userId).then(
      (result) => {
        console.log("Email sent successfully:", result.text);
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      },
      (error) => {
        console.error("Error sending email:", error.text);
        setStatus("Failed to send message. Please try again later.");
      }
    );
  };

  return (
    <div
      id="contact"
      className={`pt-24 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-b from-blue-50 to-white text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <h2 className="text-5xl font-extrabold text-center mb-4">Contact</h2>
        <p className="text-center text-lg mb-12 text-gray-600 dark:text-gray-400">
          I'd love to hear from you! Whether it’s about work, collaboration, or
          just to say hello.
        </p>

        {/* Form and Details */}
        <div className="flex flex-col md:flex-row md:justify-between gap-16">
          {/* Form */}
          <div className="w-full md:w-1/2">
            <form
              onSubmit={handleSubmit}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
              style={{
                boxShadow: darkMode
                  ? "0px 4px 20px rgba(0, 0, 0, 0.5)"
                  : "0px 4px 20px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h3 className="text-3xl font-bold mb-6 text-blue-500">
                Get in Touch
              </h3>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-lg font-medium mb-2 text-gray-800 dark:text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Full Name"
                  className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 focus:ring-4 focus:ring-blue-500 focus:outline-none transition"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-lg font-medium mb-2 text-gray-800 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email Address"
                  className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 focus:ring-4 focus:ring-blue-500 focus:outline-none transition"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-lg font-medium mb-2 text-gray-800 dark:text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message"
                  rows="5"
                  className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 focus:ring-4 focus:ring-blue-500 focus:outline-none transition"
                  required
                />
              </div>
              <div className="flex justify-between items-center">
                <a
                  href={`mailto:${email_address}`}
                  className="text-blue-600 dark:text-blue-400 underline hover:text-blue-500 transition"
                >
                  Send me an email directly
                </a>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-6 rounded-lg shadow-md hover:scale-105 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-600 transition-transform"
                >
                  Submit
                </button>
              </div>
              {status && (
                <p
                  className={`mt-4 text-center font-semibold ${
                    status.includes("successfully")
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {status}
                </p>
              )}
            </form>
          </div>

          {/* Contact Details */}
          <div className="w-full md:w-1/2 flex flex-col gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col text-white">
              <h3 className="text-2xl font-bold mb-2">Phone</h3>
              <a
                href={`tel:${contact_number}`}
                className="text-blue-600 dark:text-blue-400 text-lg font-medium hover:underline"
              >
                {contact_number}
              </a>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col text-white">
              <h3 className="text-2xl font-bold mb-2">Email</h3>
              <a
                href={`mailto:${email_address}`}
                className="text-blue-600 dark:text-blue-400 text-lg font-medium hover:underline"
              >
                {email_address}
              </a>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col text-white">
              <h3 className="text-2xl font-bold mb-2">Address</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                {address}
                <br />
                India
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Connect on Socials</h3>
              <div className="flex gap-4">
                {contactLinks.map((el) => (
                  <a
                    key={el.name}
                    href={el.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-gray-100 dark:bg-gray-700 flex items-center justify-center rounded-full hover:scale-110 transition-transform"
                  >
                    <img src={el.url} alt={el.name} className="w-8 h-8" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        className={`py-4 ${
          darkMode ? "bg-gray-800 text-gray-400" : "bg-gray-100 text-gray-600"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          Made with <span className="text-red-500 px-2 text-2xl">&#10084;</span>{" "}
          by {full_name}
        </div>
      </footer>
    </div>
  );
};

export default Contact;
