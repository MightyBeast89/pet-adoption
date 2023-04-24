import { AiOutlineMenu } from 'react-icons/ai';
import DropDown from './DropDown';
import { useStore } from '../../../store';
const UserMenu = () => {
  const store = useStore();

  return (
    <div className='flex gap-4 rounded-full pr-2'>
      <DropDown />

      <AiOutlineMenu
        size={20}
        className='cursor-pointer block md:hidden text-primary-focus hover:text-primary'
        onClick={() => store.onOpen()}
      />
    </div>
  );
};

export default UserMenu;
