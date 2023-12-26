import { motion } from 'framer-motion';
import React from 'react';

import { styles } from '../style';
import { EarthCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#C46BDB]" />
          <div className="w-1 sm:h-80 h-40 pink-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm <span className="text-[#C46BDB]">Aleksandra</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 `}>
            your potential frontend developer!🤓{' '}
            <br className="sm:block hidden" />A recent graduate with a geeky
            heart, deeply in love with the coding world. Self-taught and ready
            for new challenges! 🚀
          </p>
        </div>
      </div>
      <EarthCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
