import React, { useContext } from "react";
import Typical from "react-typical";
import { contactLinks, RESUME_LINK } from "../constants";
import { ThemeContext } from "../themeProvider";
import heroBg from "../assets/webdev.svg";
import lightBackground from "../assets/cloudBg.png";
import darkBackground from "../assets/cloudDark.png";

const Home = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{
        backgroundImage: `url(${darkMode ? lightBackground : darkBackground})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        color: darkMode ? "black" : "white" ,
      }}
    >
      <main className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between w-full">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-extrabold leading-snug">
            <span className="block">Hi, I’m</span>
            <span className="text-blue-500">Kiran Kumar Medikurthy</span>
          </h1>
          <h2 className="text-3xl font-semibold mt-4">
            <Typical
              steps={[
                "Front-End Developer",
                1500,
                "MERN Stack Developer",
                1500,
                "Creative Problem Solver",
                1500,
              ]}
              loop={Infinity}
              wrapper="span"
            />
          </h2>
          <p className="mt-6 text-lg">
            I am a passionate MERN Full-Stack Developer, currently working at
            Turno (Blubble Private Limited) as a Software Engineer. Let's build
            something amazing together!
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">
            <a
              href={RESUME_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300 transform hover:-translate-y-1"
            >
              View Resume
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-transparent border border-blue-500 text-blue-500 rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
            >
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-8 justify-center md:justify-start">
            {contactLinks.map((link) => (
              <a
                key={link.name}
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-full hover:scale-110 transition-transform"
              >
                <img
                  src={link.url}
                  alt={link.name}
                  className="w-6 h-6"
                  title={link.name}
                />
              </a>
            ))}
          </div>
        </div>

        {/* Hero Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={heroBg}
            alt="Web Development"
            className="w-3/4 md:w-full max-w-md  rounded-lg transform transition-transform hover:scale-105"
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
