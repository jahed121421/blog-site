const BannerDisplay = ({ title, src }) => {
  return (
    <div className="h-[140px] w-full">
      <img
        src={src}
        alt=""
        className="absolute h-[140px] w-full overflow-hidden object-cover blur-sm"
      />
      <h1 className="relative left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center text-4xl font-bold uppercase text-white">
        {title}
      </h1>
    </div>
  );
};

export default BannerDisplay;
