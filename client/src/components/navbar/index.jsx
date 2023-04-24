import Logo from './Logo';
import Search from './Search';
import UserMenu from './UserMenu';
import Drawer from './Drawer';
import { useStore } from '../../../store';
import { AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const store = useStore();
  return (
    <div className='flex justify-between items-center py-4 gap-4 md:gap-24 border-b-base-200 border-b-2'>
      {/* LOGO */}
      <Logo />

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
