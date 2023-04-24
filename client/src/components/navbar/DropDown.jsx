import { AiOutlineUser } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const DropDown = () => {
  return (
    <div className='dropdown dropdown-hover  dropdown-left'>
      <AiOutlineUser
        tabIndex='0'
        size={20}
        className='cursor-pointer hidden md:block  hover:text-gray-500'
      />

      <ul
        tabIndex='0'
        className='p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52 '
      >
        <li>
          <Link to={'/'} className='hover:bg-accent '>
            Log in
          </Link>
        </li>

        <li>
          <Link to={'/'} className='hover:bg-accent '>
            Sign up
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DropDown;
