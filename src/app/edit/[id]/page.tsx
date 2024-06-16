'use client';

import FormMotorcycle from '@/app/components/FormMotorcycle';
import Header from '@/app/components/Header';
import getMotorcycle from '@/app/services/getMotorcycle';
import { Motorcycle } from '@/app/types/motorcycle';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Edit() {
  const [motorcycle, setMotorcycle] = useState({
    id: '',
    code: '',
    model: '',
    color: '',
    value: '',
    status: '',
  } as Motorcycle);

  const id = usePathname().slice(6);

  useEffect(() => {
    const fetchMotorcycle = async () => {
      const data = await getMotorcycle(id);
      setMotorcycle(data);
    };
    fetchMotorcycle();
  }, []);

  return (
    <div>
      <Header />
      <div className='mx-14'>
        <div className='flex items-center justify-between border-b border-slate-300/50 pb-5'>
          <h1 className='text-2xl font-semibold text-slate-200'>Editar</h1>
        </div>

        <div className='mt-12 flex flex-col items-center justify-center'>
          <h1 className='mb-10 text-xl text-slate-200 lg:text-2xl'>
            Edite as informações que preferir! 📝
          </h1>
          <FormMotorcycle
            motorcycle={motorcycle}
            setMotorcycle={setMotorcycle}
            type='edit'
          />
        </div>
      </div>
    </div>
  );
}
