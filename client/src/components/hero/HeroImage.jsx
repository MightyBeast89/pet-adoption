import { motion } from 'framer-motion';
import dogImage from '../../assets/hero.jpg';
const HeroImage = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 200,
      }}
      transition={{
        duration: 1,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      className='w-full sm:w-1/2 h-[360px] md:h-[480px] mt-10 '
    >
      <img
        src={dogImage}
        alt='Photo of a dog'
        className='flex-0 w-full h-full object-cover rounded-md '
      />
    </motion.div>
  );
};

export default HeroImage;
