import { motion } from 'framer-motion';
import clsx from 'clsx';

const Header = ({ center }) => {
  return (
    <div className="sm:p-8 flex flex-col justify-center sm:w-1/2">
      <motion.h1
        initial={{
          opacity: 0,
          x: -100,
        }}
        transition={{
          duration: 1,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        className={clsx('text-5xl sm:text-4xl lg:text-6xl font-extrabold')}
      >
        You&apos;re getting a loyal companion
      </motion.h1>

      <motion.p
        initial={{
          opacity: 0,
          x: 100,
        }}
        transition={{
          duration: 1,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        className="mt-4 text-neutral-500"
      >
        Pets are known for their loyalty and devotion to their owners. They
        offer unconditional love and companionship that can improve your mental
        and physical health
      </motion.p>

      <motion.button
        initial={{
          opacity: 0,
          y: 10,
        }}
        transition={{
          delay: 0.5,
          duration: 1,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="bg-primary w-[200px] font-bold px-4 py-2 rounded-md text-white mt-6 text-sm md:text-md"
      >
        Adopt Now
      </motion.button>
    </div>
  );
};

export default Header;
