import { Dispatch, SetStateAction } from 'react';
import { Motorcycle } from '../types/motorcycle';
import editMotorcycle from '../services/editMotorcycle';
import Label from './Label';
import { FaPlus } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

export default function FormMotorcycle({
  motorcycle,
  setMotorcycle,
  type,
}: {
  motorcycle: Motorcycle;
  setMotorcycle: Dispatch<SetStateAction<Motorcycle>>;
  type: string;
}) {
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !motorcycle.code ||
      !motorcycle.model ||
      !motorcycle.color ||
      !motorcycle.value ||
      motorcycle.status === 'Selecione um status'
    ) {
      alert('Preencha todos os campos');
      return;
    }
    if (!Number(motorcycle.value)) {
      alert('O campo valor deve ser um número');
      return;
    }

    if (type === 'edit') {
      await editMotorcycle(motorcycle);
      alert('Moto editada com sucesso!');
      router.push('/');
    } else {
      //cadastro
    }
  };

  return (
    <form onSubmit={handleSubmit} className={'flex w-[420px] flex-col gap-9'}>
      <Label
        text='Código'
        value={motorcycle.code}
        onChange={(e) => setMotorcycle({ ...motorcycle, code: e.target.value })}
      />

      <Label
        text='Modelo da moto'
        value={motorcycle.model}
        onChange={(e) =>
          setMotorcycle({ ...motorcycle, model: e.target.value })
        }
      />

      <Label
        text='Cor'
        value={motorcycle.color}
        onChange={(e) =>
          setMotorcycle({ ...motorcycle, color: e.target.value })
        }
      />

      <Label
        text='Valor'
        value={motorcycle.value}
        onChange={(e) =>
          setMotorcycle({ ...motorcycle, value: e.target.value })
        }
      />

      <div
        className={
          'relative h-[50px] rounded-md border border-solid border-[#CAC9CD] p-3'
        }
      >
        <label
          className={
            'absolute -top-4 left-3 bg-[#2A233C] p-1 text-sm text-slate-200'
          }
        >
          Status
        </label>
        <select
          className={
            'w-full cursor-pointer gap-5 border-none bg-transparent outline-none'
          }
          value={motorcycle.status}
          onChange={(e) =>
            setMotorcycle({ ...motorcycle, status: e.target.value })
          }
        >
          <option value=''>Selecione o status</option>
          <option value='Em estoque'>Em estoque</option>
          <option value='Sem estoque'>Sem estoque</option>
          <option value='Em trânsito'>Em trânsito</option>
        </select>
      </div>

      <button
        className='flex items-center justify-center gap-2 rounded bg-blue-400 px-4 py-3 text-xs font-semibold uppercase text-white transition-colors hover:bg-blue-500'
        type='submit'
      >
        <FaPlus size={18} />
        {' Registrar'}
      </button>
    </form>
  );
}
