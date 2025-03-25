import React from "react";
import { serviceData } from "../constants";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section
      className="py-20 bg-gradient-to-br from-blue-50 via-white to-gray-50"
      id="services"
    >
      {/* Section Header */}
      <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-extrabold text-gray-800 tracking-tight">
          My Services
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          I specialize in crafting beautiful and efficient web applications,
          focusing on cutting-edge technologies to deliver exceptional user
          experiences.
        </p>
        <div className="mt-6 w-32 h-1 bg-gradient-to-r from-blue-500 to-blue-800 mx-auto rounded-full"></div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        {serviceData.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center border-2 border-transparent hover:border-blue-500 hover:shadow-2xl transition-all duration-300 group"
          >
            {/* Icon */}
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 text-white rounded-full flex items-center justify-center shadow-lg mb-6">
              <img src={service.img} alt={service.name} className="w-10 h-10" />
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-800 mb-4 group-hover:text-blue-500">
              {service.name}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 group-hover:text-gray-700">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
