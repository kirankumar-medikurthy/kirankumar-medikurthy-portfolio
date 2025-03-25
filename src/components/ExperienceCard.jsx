import React, { useState } from "react";

const ExperienceCard = ({
  company_logo,
  company_url,
  designamation,
  company_name,
  company_description,
  number_of_years,
  achievements,
}) => {
  const [visibleAchievements, setVisibleAchievements] = useState(3);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAchievements = () => {
    setVisibleAchievements(isExpanded ? 3 : achievements.length);
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="experience-card relative max-w-3xl mx-auto bg-gradient-to-br from-gray-50 via-white to-gray-100 rounded-xl shadow-lg overflow-hidden my-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
      {/* Decorative Left Border */}
      <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-blue-500 to-blue-300"></div>

      {/* Card Content */}
      <div className="flex flex-col md:flex-row items-center p-6 md:p-8 gap-6 md:gap-8">
        {/* Company Logo */}
        <a
          href={company_url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0"
        >
          <div className="relative w-20 h-20 md:w-28 md:h-28 rounded-full bg-gradient-to-b from-blue-500 to-blue-300 shadow-lg p-1">
            <div className="w-full h-full bg-white rounded-full flex items-center justify-center overflow-hidden border border-gray-200">
              <img
                src={company_logo}
                alt={`${company_name} logo`}
                className="w-16 h-16 md:w-24 md:h-24 object-contain"
              />
            </div>
          </div>
        </a>

        {/* Details */}
        <div className="flex-grow">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h5 className="text-base md:text-lg font-bold text-gray-900">
                {designamation}
              </h5>
              <h6 className="text-sm md:text-base text-gray-600 font-medium">
                {company_name}
              </h6>
            </div>
            <span className="mt-2 md:mt-0 text-xs md:text-sm font-medium text-gray-500">
              {number_of_years} years
            </span>
          </div>

          {/* Description */}
          <p className="mt-3 text-sm md:text-base text-gray-700 leading-relaxed">
            {company_description}
          </p>

          {/* Achievements */}
          <div className="mt-5">
            <h6 className="text-sm md:text-base font-semibold text-gray-800">
              Achievements/Tasks:
            </h6>
            <ul className="mt-2 list-disc list-inside space-y-2 text-sm md:text-base text-gray-600">
              {achievements
                ?.slice(0, visibleAchievements)
                .map((item, index) => {
                  return (
                    <div>
                      <h6 className="text-sm md:text-base font-semibold text-gray-800">
                        {item?.title}
                      </h6>
                      {item?.description?.map((eachDescription, desIndex) => {
                        return <li key={desIndex}>{eachDescription}</li>;
                      })}
                    </div>
                  );
                })}
            </ul>
            {achievements.length > 3 && (
              <button
                onClick={toggleAchievements}
                className="mt-3 text-blue-500 hover:text-blue-700 font-medium text-sm"
              >
                {isExpanded ? "Read Less" : "Read More"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
