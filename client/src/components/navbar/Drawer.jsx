import { motion } from 'framer-motion';
import { AiOutlineClose } from 'react-icons/ai';
import { useStore } from '../../../store';
import MenuItem from './MenuItem';
const Drawer = () => {
  const store = useStore();
  const items = ['About us', 'Find pet', `FAQ's`, 'Shelter'];
  return (
    <div className='absolute flex justify-end inset-0 transition bg-black/50'>
      <motion.div
        initial={{
          x: 30,
        }}
        animate={{
          x: 0,
        }}
        exit={{
          x: 30,
        }}
        className='bg-white w-2/4 md:w-1/4 h-full p-6 '
      >
        <div className='flex justify-end'>
          <AiOutlineClose
            size={20}
            className='cursor-pointer hover:text-gray-500 transition'
            onClick={() => store.onClose()}
          />
        </div>

        <ul className='flex flex-col justify-center items-center mt-24 gap-4'>
          {items.map(item => (
            <MenuItem key={item} item={item} />
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default Drawer;
