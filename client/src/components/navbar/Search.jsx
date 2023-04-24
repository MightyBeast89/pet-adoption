import { AiOutlineSearch } from 'react-icons/ai';

const Search = () => {
  return (
    <>
      <div className='flex-1 relative block md:hidden'>
        <div>
          <input
            type='text'
            placeholder='Search'
            className='w-full p-2 rounded-full  outline-none focus:outline-none px-4 text-sm '
          />
        </div>

        <div className='absolute right-4 top-2'>
          <AiOutlineSearch size={20} />
        </div>
      </div>
    </>
  );
};

export default Search;
