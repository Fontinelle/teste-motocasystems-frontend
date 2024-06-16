'use client';
import { useState } from 'react';
import { Motorcycle } from '../types/motorcycle';
import Header from '../components/Header';
import FormMotorcycle from '../components/FormMotorcycle';

export default function Register() {
  const [motorcycle, setMotorcycle] = useState<Motorcycle>({
    code: '',
    model: '',
    color: '',
    value: '',
    status: '',
  } as Motorcycle);

  return (
    <div>
      <Header />
      <div className='mx-14'>
        <div className='flex items-center justify-between border-b border-slate-300/50 pb-5'>
          <h1 className='text-2xl font-semibold text-slate-200'>
            Registro de Motos
          </h1>
        </div>

        <div className='mt-12 flex flex-col items-center justify-center'>
          <h1 className='mb-10 text-xl text-slate-200 lg:text-2xl'>
            Preencha as informações a baixo para registrar uma Moto 🏍️
          </h1>
          <FormMotorcycle
            motorcycle={motorcycle}
            setMotorcycle={setMotorcycle}
            type='register'
          />
        </div>
      </div>
    </div>
  );
}
