const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative w-full min-h-[100vh] 2xl:min-h-[70vh] flex justify-center lg:justify-end content-none top-0 left-0 bg-[url('/images/hero.jpg')] bg-no-repeat bg-cover bg-[35%] lg:bg-left-bottom brightness-[90%]"
    >
      <div className="relative text-white text-center m-20 lg:mt-40">
        <h1 className="text-4xl sm:text-6xl xl:text-[50px] font-medium mb-0 font-primary">
          Hatha Yoga Lobería
        </h1>
        <h2 className="text-2xl sm:text-3xl mt-8 lg:mt-16 font-primary">
          Calma en el alma...
        </h2>
      </div>
    </section>
  );
};

export default Hero;
