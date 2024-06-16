import { Motorcycle } from '../types/motorcycle';
import deleteMotorcycle from '../services/deleteMotorcycle';
import { AiOutlineDelete } from 'react-icons/ai';
import { IoEyeOutline } from 'react-icons/io5';
import { useRouter } from 'next/navigation';

function formatValue(value: number) {
  return value
    ? value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      })
    : 'Preço indisponível';
}

function getStatusClass(status: string) {
  switch (status) {
    case 'Em estoque':
      return 'bg-green-900/40 text-green-500';
    case 'Sem estoque':
      return 'bg-red-900/40 text-red-500';
    default:
      return 'bg-yellow-900/40 text-yellow-500';
  }
}

export function Item({ id, code, model, color, value, status }: Motorcycle) {
  const router = useRouter();
  const valueFormatted = formatValue(Number(value));
  const statusClass = getStatusClass(status);

  const handleDelete = async () => {
    try {
      if (!id) {
        throw new Error('ID não encontrado');
      }
      await deleteMotorcycle(id);
      router.push('/');
    } catch (error) {
      alert('Erro ao deletar a moto');
      router.push('/');
    }
  };

  return (
    <div className='flex items-center justify-between gap-4 rounded-lg bg-[#312D4B] p-4 shadow-lg hover:bg-violet-900/80 lg:flex-row lg:px-14 lg:font-medium'>
      <div className='flex flex-row items-center justify-center lg:flex-row lg:items-center'>
        <p className='mr-24 text-violet-500'>#{code}</p>
        <div className='flex flex-col justify-center lg:flex-row lg:items-center'>
          <div className='flex flex-1 flex-col gap-3'>
            <div className='flex items-center gap-3'>
              <h2 className='font-semibold lg:text-lg'>{model}</h2>
              <span
                className={`rounded-full px-3 text-xs leading-7 ${statusClass}`}
              >
                {status}
              </span>
            </div>
            <p>Valor: {valueFormatted}</p>
            <p>Cor: {color}</p>
          </div>
        </div>
      </div>
      <div className='flex gap-2'>
        <span>
          <AiOutlineDelete
            size={30}
            className='cursor-pointer rounded-full p-1 text-red-500 hover:bg-red-500/30'
            onClick={handleDelete}
          />
        </span>
        <a href={`/edit/${id}`}>
          <IoEyeOutline
            className='cursor-pointer rounded-full p-1 text-slate-200 hover:bg-slate-200/30'
            size={30}
          />
        </a>
      </div>
    </div>
  );
}
