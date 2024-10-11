import React from 'react';
import { motion } from 'framer-motion'; 
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { sectionWrapper } from '../hoc'; // Correct import statement

// Dummy services array
const services = [
  { title: "Photography", icon: "📸" },
  { title: "Video Editing", icon: "🎬" },
  { title: "Album Design", icon: "📖" },
  { title: "Poster Design", icon: "📱" } // Fixed typo here
];

const ServiceCard = ({ index, title, icon }) => {
  return (
    <div className="xs:w-[250px] w-full perspective"> {/* Added perspective for 3D effect */}
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        whileHover={{
          scale: 1.05,         // Scale up on hover
          rotateY: 15,        // Rotate on Y-axis
          transition: {       // Add transition for smoothness
            type: "spring",
            stiffness: 300,   // Stiffness for the spring effect
            damping: 10,      // Damping for the spring effect
          },
        }}
        className="w-full bg-gradient-to-r from-green-400 to-blue-500 p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col items-center justify-center">
          <span className="text-6xl mb-2">{icon}</span> {/* Icon Display */}
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </div>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a skilled photographer and album designer,
        video editing, poster design, wedding couple photos,
        photo retouching, color grading, manipulation, wedding-related all editing work 
        and any type of shoot available.
      </motion.p>

      <div className="mt-20 flex flex-wrap justify-center gap-10"> {/* Center align the service cards */}
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
}

export default sectionWrapper(About, "about"); // Correct export statement
