interface LabelProps{
  name: string;
}

export function Label({ name }: LabelProps){
  return(
    <div className="sm:flex-grow-0 flex-grow py-1 px-3 bg-slate-200 text-black text-center rounded-lg hover:font-bold duration-200">{name}</div>
  );
}