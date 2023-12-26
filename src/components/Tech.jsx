import React from 'react';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { motion } from 'framer-motion';
import { styles } from '../style';
import { fadeIn, textVariant } from '../utils/motion';

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Check This Out</p>
        <h2 className={styles.sectionHeadText}>Technologies</h2>
      </motion.div>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary , text-[17px] max-w-[50%] leading-[30px]"
      >
        Diving into the digital realm, my hands wield a diverse set of tools to
        transform ideas into reality. In my workshop box, you'll find{' '}
        <span className="text-[#C46BDB] font-semibold">
          {' '}
          HTML, CSS, JavaScript, React, Sass, Bootstrap, Tailwind, WordPress,
          GitHub,
        </span>{' '}
        and three-dimensional experiments with{' '}
        <span className="text-[#C46BDB] font-semibold">Three.js</span>.
        Front-end is my kingdom, where React constructs interactive interfaces,
        and Sass, Bootstrap, and Tailwind give them a distinctive style. In the
        world of content, I reign as a WordPress master, and on GitHub, you can
        track how I code my projects.
      </motion.p>

      <div className="w-[50%] h-full top-[30%]  absolute right-[-75px] overflow-hidden cube-container">
        <div className="cube-spinner sm:mx-[5%] py-[5%] pl-[10%]">
          {technologies.map((technologies) => (
            <div
              className={`${technologies.id} xs:w-[250px] w-full`}
              key={technologies.name}
            >
              <img src={technologies.icon} alt={technologies.name} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, '');
