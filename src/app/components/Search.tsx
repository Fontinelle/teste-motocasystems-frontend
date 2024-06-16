import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction } from 'react';
import { FaPlus, FaSearch } from 'react-icons/fa';

export default function Search({
  setSearchTerm,
}: {
  setSearchTerm: Dispatch<SetStateAction<string>>;
}) {
  const router = useRouter();
  function handleSearchChange(value: string) {
    setSearchTerm(value);
  }

  return (
    <div className='mt-6 flex w-full flex-col gap-4 lg:mt-0 lg:w-auto lg:flex-row'>
      <div className='flex items-center gap-3 rounded border border-slate-300/50 px-4 py-3'>
        <FaSearch />
        <input
          className='w-80 bg-transparent text-xs outline-none'
          type='text'
          placeholder='Buscar por código, nome e cor'
          onChange={(e) => {
            handleSearchChange(e.target.value);
          }}
        />
      </div>

      <button
        className='flex items-center justify-center gap-2 rounded bg-blue-400 px-4 py-3 text-xs font-semibold text-white transition-colors hover:bg-blue-500'
        type='button'
        onClick={() => router.push('/register')}
      >
        <FaPlus />
        NOVO REGISTRO
      </button>
    </div>
  );
}
