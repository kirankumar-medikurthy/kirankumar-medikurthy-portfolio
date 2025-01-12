import React, { useContext } from "react";
import { techStack } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";

const About = () => {
  const theme = useContext(ThemeContext);
  const isDarkMode = theme.state.darkMode;

  return (
    <section
      id="about"
      className={`relative pb-20 ${
        isDarkMode
          ? "bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-b from-white via-gray-50 to-white"
      }`}
    >
      {/* Decorative Background */}
      <div
        className="absolute inset-0 bg-pattern opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            'url("https://www.transparenttextures.com/patterns/diagmonds.png")',
        }}
      />

      {/* Content Wrapper */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 pt-20">
        {/* Section Title */}
        <h2
          className={`text-5xl font-bold text-center ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}
        >
          About Me
        </h2>

        {/* About Section */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h4 className="text-3xl font-semibold text-blue-500">A Bit About Me</h4>
          <p
            className={`mt-4 text-lg leading-relaxed ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Software Engineer @ Turno | Ex-Front End Engineer @ 6thstreet | MERN
            Full Stack Developer. I am a self-motivated web developer who thrives
            in challenging environments and leverages technical skills to deliver
            exceptional results. I am committed to learning, growing, and
            contributing to cutting-edge projects.
          </p>
        </motion.div>

        {/* Technologies Section */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <h4 className="text-3xl font-semibold text-blue-500">
            Technologies and Tools
          </h4>
          <p
            className={`mt-4 text-lg leading-relaxed ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            As a MERN stack developer, I use modern technologies and reliable
            open-source tools to build responsive, high-performance web and mobile
            applications. My goal is to deliver seamless user experiences across
            devices.
          </p>
        </motion.div>

        {/* Tech Stack */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              className={`p-4 rounded-lg shadow-md transform transition-all duration-300 ${
                isDarkMode
                  ? "bg-gray-800 hover:bg-gray-700 text-gray-300"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: index * 0.1,
              }}
            >
              <div className="flex flex-col items-center">
                <img
                  src={tech.link}
                  alt={tech.name}
                  className="w-12 h-12 mb-4"
                />
                <h4 className="text-sm font-medium">{tech.name}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
