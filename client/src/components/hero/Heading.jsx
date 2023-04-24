import { motion } from 'framer-motion';

const Heading = () => {
  return (
    <div className='sm:p-8 flex flex-col justify-center sm:w-1/2'>
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
        className='text-3xl sm:text-4xl lg:text-6xl font-bold'
      >
        Adopt me!
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
        className='text-xs sm:text-sm md:text-md font-medium tracking-tighter'
      >
        Adopt a furry friend, give them a second chance at life!
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
        className='self-start bg-primary px-4 py-2 rounded-md text-white mt-4 text-xs'
      >
        Adopt Now
      </motion.button>
    </div>
  );
};

export default Heading;
