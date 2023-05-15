import { AiOutlineMenu } from 'react-icons/ai';
import DropDown from './DropDown';
import useDrawer from '../../../hooks/useDrawer';

const UserMenu = () => {
  const drawer = useDrawer();

  return (
    <div className="flex gap-4 rounded-full pr-2">
      <DropDown />

      <AiOutlineMenu
        size={20}
        className="cursor-pointer block md:hidden text-primary-focus hover:text-primary"
        onClick={() => drawer.onOpen()}
      />
    </div>
  );
};

export default UserMenu;
