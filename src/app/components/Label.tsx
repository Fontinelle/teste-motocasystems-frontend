export default function Label({
  text,
  value,
  onChange,
}: {
  text: string;
  value: string;
  onChange: (e: any) => void;
}) {
  return (
    <div
      className={
        'relative h-[50px] rounded-md border border-solid border-[#CAC9CD] p-3'
      }
    >
      <label
        htmlFor='code'
        className={
          'absolute -top-4 left-3 bg-[#2A233C] p-1 text-sm text-slate-200'
        }
      >
        {text}
      </label>
      <div className='flex gap-2'>
        <span className='text-sm text-slate-200'>#</span>
        <input
          id='code'
          className='w-full cursor-pointer border-none bg-transparent text-slate-200 outline-none'
          onChange={onChange}
          value={value}
        />
      </div>
    </div>
  );
}
