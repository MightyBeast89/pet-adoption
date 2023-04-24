import Logo from './Logo';
import Search from './Search';
import UserMenu from './UserMenu';
import Drawer from './Drawer';
import { useStore } from '../../../store';
import { AnimatePresence } from 'framer-motion';
import MenuItem from './MenuItem';

const items = ['About us', 'Find pet', `FAQ's`, 'Shelter'];

const Navbar = ({ isTopOfPage }) => {
  const store = useStore();
  return (
    <div
      className={`flex justify-between items-center py-6 gap-4 md:gap-24 fixed w-full z-20 max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 transition bg-neutral-100 ${
        isTopOfPage ? '' : 'bg-primary'
      } shadow-sm`}
    >
      {/* LOGO */}
      <Logo />

      <ul className='hidden md:flex gap-2 md:gap-16 '>
        {items.map(item => (
          <MenuItem key={item} item={item} />
        ))}
      </ul>

      <Search />

      {/* UserMenu */}
      <UserMenu />

      {/* Drawer */}
      {store.isOpen && (
        <AnimatePresence>
          <Drawer />
        </AnimatePresence>
      )}
    </div>
  );
};

export default Navbar;
