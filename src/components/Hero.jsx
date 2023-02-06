const Hero = () => {
  return (
    <section
      className="bg-[url('/images/hero.jpg')] min-h-[50vh] bg-cover bg-center bg-no-repeat"
      id="inicio"
      data-scroll-spy
    >
      <div className="p-5 min-h-[50vh] bg-black opacity-40 flex flex-col items-center justify-center text-center ">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-h1Color">
          Hatha Yoga Loberia
        </h1>
        <p className="text-paragraphHeaderColor pt-4 text-2xl font-normal">
          El equilibrio está en tu interior!
        </p>
      </div>
    </section>
  );
};

export default Hero;
