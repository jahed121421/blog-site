import Button from "./../Button/Button";
const Banner = () => {
  return (
    <div className="h-screen w-full bg-[url('https://th.bing.com/th/id/R.154d2dbbdff4cf00d9fbcfcee5752bc0?rik=RTB9ei6iVk3mQw&pid=ImgRaw&r=0')] bg-cover bg-fixed bg-center">
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-r from-[#000000d0] to-[#5e5c5cbb]">
        <div className="w-3/5 space-y-8 text-white">
          <h1 className="text-5xl font-bold text-white">
            Welcome to <br />
            our Blog Site
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            architecto tempora facere atque id enim accusamus. Animi est nemo
            ipsam minus quas tempora? Doloremque, voluptatum?
          </p>
          <Button name="Load More" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
