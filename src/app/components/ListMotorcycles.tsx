import { Item } from './Item';
import { Motorcycles } from '../types/motorcycle';
import { Dispatch, SetStateAction } from 'react';
import Search from './Search';

export default function ListMotorcycles({
  filteredMotorcycles,
  setSearchTerm,
}: {
  filteredMotorcycles: Motorcycles;
  setSearchTerm: Dispatch<SetStateAction<string>>;
}) {
  return (
    <div>
      <div className='mx-14'>
        <div className='flex flex-col items-center justify-between border-b border-slate-300/50 pb-5 text-slate-300 lg:flex-row'>
          <h1 className={'text-2xl font-semibold text-[#CAC9CD]'}>
            Tabela de Motos
          </h1>
          <Search setSearchTerm={setSearchTerm} />
        </div>
      </div>
      <div className='mx-14'>
        <div className='overflow-auto" mt-6 flex h-full flex-col gap-6 p-4'>
          {filteredMotorcycles.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              code={item.code}
              model={item.model}
              color={item.color}
              value={item.value}
              status={item.status}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
