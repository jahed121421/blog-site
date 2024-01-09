const Titel = ({ title, subtitle }) => {
  return (
    <div className="mx-auto mt-5 flex w-full gap-4 border-y-2 border-black text-center">
      <div className="flex w-full items-center justify-center">------</div>
      <div className="w-full">
        <h1 className=" text-sm font-bold uppercase lg:text-3xl">{title}</h1>
        <p className="text-2xl font-semibold capitalize">{subtitle}</p>
      </div>
      <div className="flex w-full items-center justify-center">------</div>
    </div>
  );
};

export default Titel;
