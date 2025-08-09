import { education } from "../../constants"; // Import the education data

const Education = () => {
  return (
    <section
      id="education"
      className="py-16 px-6 sm:px-10 md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-24 sm:w-32 h-1 bg-purple-500 mx-auto mt-3 sm:mt-4"></div>
        <p className="text-gray-400 mt-3 sm:mt-4 text-base sm:text-lg font-semibold px-2 sm:px-0">
          My education has been a journey of learning and development. Here are
          the details of my academic background
        </p>
      </div>

      {/* Education Timeline Container */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full"></div>

        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`relative flex flex-col sm:flex-row items-center mb-10 sm:mb-16 ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            {/* Timeline Circle */}
            <div className="absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 bg-white border-4 border-[#8245ec] w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex justify-center items-center z-10">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Content Box */}
            <div
              className={`w-full sm:w-[80%] md:w-[40%] mt-16 sm:mt-0 p-4 sm:p-6 md:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition-transform duration-300 hover:scale-105 ${
                index % 2 === 0
                  ? "sm:mr-auto sm:ml-[calc(50%+2rem)]"
                  : "sm:ml-auto sm:mr-[calc(50%+2rem)]"
              }`}
            >
              {/* Flex container for image and text */}
              <div className="flex items-center space-x-6">
                {/* School Logo/Image */}
                <div className="w-24 h-16 bg-white rounded-md overflow-hidden">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white">
                    {edu.degree}
                  </h3>
                  <h4 className="text-sm text-gray-300">{edu.school}</h4>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">
                    {edu.date}
                  </p>
                </div>
              </div>

              {/* Grade & Description */}
              <p className="mt-3 sm:mt-4 text-gray-400 font-bold text-sm sm:text-base">
                Grade: {edu.grade}
              </p>
              <p className="mt-2 text-gray-400 text-sm sm:text-base">
                {edu.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
