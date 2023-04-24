import { Link } from 'react-router-dom';

const MenuItem = ({ item }) => {
  return (
    <li className='px-4 py-2 w-32 text-center rounded-full transition hover:bg-base-200 cursor-pointer'>
      {item}
    </li>
  );
};

export default MenuItem;
