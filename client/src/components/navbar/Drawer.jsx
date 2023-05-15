import { motion } from 'framer-motion';
import { AiOutlineClose } from 'react-icons/ai';

import MenuItem from './MenuItem';
import useDrawer from '../../../hooks/useDrawer';

const items = ['About us', 'Find pet', `FAQ's`, 'Shelter'];

const Drawer = () => {
  const drawer = useDrawer();

  return (
    <div className="absolute flex justify-end inset-0 transition bg-black/50 z-20">
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
        className="bg-base-100 w-full md:w-1/4 h-screen px-4 py-8"
      >
        <div className="flex justify-end">
          <AiOutlineClose
            size={20}
            className="cursor-pointer hover:text-gray-500 transition"
            onClick={() => drawer.onClose()}
          />
        </div>

        <ul className="flex flex-col justify-center px-2 mt-12 gap-4">
          <div className="flex flex-col gap-4">
            {items.map((item) => (
              <MenuItem key={item} item={item} />
            ))}
          </div>
          <hr />
          <div className="flex flex-col gap-3 mt-5">
            <button className="px-4 py-2 rounded-full bg-neutral-200">
              Log in
            </button>
            <button className="bg-primary text-white px-4 py-2 rounded-full">
              Sign up
            </button>
          </div>
        </ul>
      </motion.div>
    </div>
  );
};

export default Drawer;
