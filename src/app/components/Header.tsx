import Link from 'next/link';
import Image from 'next/image';
import { IoMdHome } from 'react-icons/io';

export default function Header() {
  return (
    <header className='flex items-center justify-end gap-4 px-11 py-7'>
      <Link href='/'>
        <IoMdHome size={32} />
      </Link>
      <div className='relative flex'>
        <img
          className='aspect-square w-11 cursor-pointer rounded-full hover:opacity-85'
          src='/avatar.png'
          alt='Foto de perfil'
        />
        <div className='absolute bottom-0 right-1 h-3 w-3 rounded-full border-2 border-solid border-gray-700 bg-green-500' />
      </div>
    </header>
  );
}
