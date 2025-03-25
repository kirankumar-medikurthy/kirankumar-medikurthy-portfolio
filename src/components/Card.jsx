import React from "react";
import { motion } from "framer-motion";

const Card = ({
  project_name,
  project_description,
  project_image_link,
  project_github_link,
  project_demo_link,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="max-w-xl bg-white rounded-lg border border-gray-200 shadow-md hover:shadow-xl transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700 my-8 overflow-hidden"
    >
      <a
        href={project_github_link}
        target="_blank"
        rel="noopener noreferrer"
        className="block group"
      >
        <motion.img
          src={project_image_link}
          alt={project_name}
          className="rounded-t-lg w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </a>
      <div className="p-6">
        <a href={project_github_link} target="_blank" rel="noopener noreferrer">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-blue-500 transition-colors duration-300">
            {project_name}
          </h5>
        </a>
        <p className="mt-3 mb-5 font-normal text-gray-700 dark:text-gray-400">
          {project_description}
        </p>
        <a
          href={project_github_link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-700 transition-all duration-300"
        >
          GitHubLink
          <svg
            className="ml-2 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
        <a
          href={project_demo_link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center py-2 mx-2 px-4 text-sm font-medium text-white bg-violet-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-700 transition-all duration-300"
        >
          DemoLink
          <svg
            className="ml-2 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

export default Card;
