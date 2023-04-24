import { AiOutlineMenu, AiOutlineUser } from 'react-icons/ai';
import { useStore } from '../../../store';
const UserMenu = () => {
  const store = useStore();

  return (
    <div className='flex gap-4 rounded-full p-2'>
      <div className='dropdown dropdown-hover  dropdown-left'>
        <AiOutlineUser
          tabIndex='0'
          size={20}
          className='cursor-pointer hover:text-gray-500'
        />

        <ul
          tabIndex='0'
          className='p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52'
        >
          <li>
            <a>Log in</a>
          </li>
          <li>
            <a>Sign up</a>
          </li>
        </ul>
      </div>

      <AiOutlineMenu
        size={20}
        className='cursor-pointer hover:text-gray-500'
        onClick={() => store.onOpen()}
      />
    </div>
  );
};

export default UserMenu;
