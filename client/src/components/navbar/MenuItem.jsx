import { Link } from 'react-router-dom';

const MenuItem = ({ item }) => {
  return (
    <li className='py-2 px-4  text-center hover:bg-neutral-200 transition rounded-full  duration-200 cursor-pointer md:whitespace-nowrap'>
      {item}
    </li>
  );
};

export default MenuItem;
