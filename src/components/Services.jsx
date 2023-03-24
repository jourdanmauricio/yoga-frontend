import Image from 'next/image';
import Link from 'next/link';

const Services = () => {
  return (
    <section className="text-center" id="servicios" data-scroll-spy>
      <article className="py-10 px-5 lg:px-20">
        <div>
          <div className="divider__content">
            <p className="divider__text">Servicios</p>
          </div>
          <h2 className="title">
            El yoga produce grandes beneficios a aquellos que lo practican con
            tenacidad y de forma regular
          </h2>
          {/* <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            quisquam officia maxime voluptatem ipsa tempora expedita soluta
            cumque placeat. Temporibus impedit vero, eos consequuntur voluptas
            esse expedita ducimus quia aliquid.
          </p> */}

          <div className="pt-20 flex flex-wrap justify-center">
            <article className="relative w-[250] m-5 group">
              <figure>
                <Image
                  src="/images/service/service1.jpg"
                  alt="Hatha Yoga"
                  className="block w-full max-w-[250px] mx-auto my-0 rounded shadow-[0_0_10px_rgba(0,0,0,0.25)]"
                  width={250}
                  height={250}
                />

                <figcaption className="w-0 h-full absolute bottom-0 left-0 right-0 bg-effectColor overflow-hidden ease-in-out duration-500 rounded group-hover:w-full group-hover:opacity-80">
                  <p className="absolute top-1/2 left-1/2 whitespace-nowrap	text-slate-200 text-lg -translate-x-1/2 -translate-y-1/2 border-t border-b border-solid border-slate-200">
                    Hatha Yoga
                  </p>
                </figcaption>
              </figure>
            </article>

            <article className="relative w-[250] m-5 group">
              <figure className="servicio__picture">
                <Image
                  src="/images/service/service2.jpg"
                  alt="Hatha Yoga"
                  className="block w-full max-w-[250px] mx-auto my-0 rounded shadow-[0_0_10px_rgba(0,0,0,0.25)]"
                  width={250}
                  height={250}
                />
                <figcaption className="w-0 h-full absolute bottom-0 left-0 right-0 bg-effectColor overflow-hidden ease-in-out duration-500 rounded group-hover:w-full group-hover:opacity-80">
                  <p className="absolute top-1/2 left-1/2 whitespace-nowrap	text-slate-200 text-lg -translate-x-1/2 -translate-y-1/2 border-t border-b border-solid border-slate-200">
                    Terapia Shiatsu
                  </p>
                </figcaption>
              </figure>
            </article>

            <article className="relative w-[250] m-5 group">
              <figure className="servicio__picture">
                <Image
                  src="/images/service/service3.jpg"
                  alt="Hatha Yoga"
                  className="block w-full max-w-[250px] mx-auto my-0 rounded shadow-[0_0_10px_rgba(0,0,0,0.25)]"
                  width={250}
                  height={250}
                />
                <figcaption className="w-0 h-full absolute bottom-0 left-0 right-0 bg-effectColor overflow-hidden ease-in-out duration-500 rounded group-hover:w-full group-hover:opacity-80">
                  <p className="absolute top-1/2 left-1/2 whitespace-nowrap	text-slate-200 text-lg -translate-x-1/2 -translate-y-1/2 border-t border-b border-solid border-slate-200">
                    Clases online
                  </p>
                </figcaption>
              </figure>
            </article>
          </div>

          <Link href="/#contact" className="button__cta" scroll={false}>
            Más información
          </Link>
        </div>
      </article>
      <figure className="relative h-[250px] bg-[url('/images/paralax-postura-opt.webp')] bg-cover bg-center bg-no-repeat bg-fixed mb-15">
        <div className="absolute h-full w-full top-0 bg-black opacity-40"></div>

        <div className="absolute separador__container container text-white font-primary">
          <blockquote className="h-full w-full p-10 flex items-center justify-center text-2xl md:text-4xl">
            <p>
              No importa lo profundo que llegues en una postura, lo que importa
              es quién eres cuando llegas allí.
            </p>
          </blockquote>
          <figcaption className="pl-10 text-left">&mdash; Max Strom</figcaption>
        </div>
      </figure>
      <article className="py-10 px-5 lg:px-20 mb-20 flex flex-col sm:flex-row items-center justify-center text-center gap-10">
        <article>
          <figure className="min-h-[280px]">
            <Image
              src="/images/beneficios/Yoga-Lotus.svg"
              alt=""
              className="w-[70px] h-[70px] mx-auto"
              width={70}
              height={70}
            />
            <figcaption>
              <p className="paragraph">
                El yoga es el único método para el desarrollo físico, mental y
                espiritual del hombre. Nació en la India hace Miles de años . No
                es una religión , ni un credo confesional y no tiene templos,
                ceremonias ni dogmas. Constituye un método integral de
                evolución, que empieza con el perfeccionamiento del cuerpo
                humano y prosigue con el progreso espiritual.
              </p>
            </figcaption>
          </figure>
        </article>

        <article>
          <figure className="min-h-[280px]">
            <Image
              src="/images/beneficios/Yoga-Pose.svg"
              alt=""
              className="w-[70px] h-[70px] mx-auto"
              width={70}
              height={70}
            />
            <figcaption>
              <p className="paragraph">
                El Hatha Yoga juega un destacado papel tanto en el campo de la
                salud corporal cómo mental. Mediante las asanas, las técnicas de
                estiramiento, de control de la respiración y de relajación, se
                pueden prevenir y/o calmar enfermedades respiratorias,
                circulatorias y diversos desórdenes psicofisicos. El
                ansiolíticos y sus técnicas sedan el sistema nervioso autónomo.
              </p>
            </figcaption>
          </figure>
        </article>
      </article>
      <article className="mb-14 w-full flex flex-col lg:flex-row justify-center items-center ">
        <Image
          src="/images/galeria/galeria1.jpeg"
          alt=""
          className="gallery__img"
          width={330}
          height={330}
        />
        <Image
          src="/images/galeria/galeria2.jpeg"
          alt=""
          className="gallery__img"
          width={330}
          height={330}
        />
        <Image
          src="/images/galeria/galeria3.jpeg"
          alt=""
          className="gallery__img"
          width={330}
          height={330}
        />
      </article>

      <article className="py-10 px-5 lg:px-20 flex flex-wrap justify-center items-center mb-10">
        <article className="flex flex-wrap flex-col grow-0 shrink-0 basis-full lg:basis-1/2 gap-4 items-center justify-center p-5">
          <div className="card">
            <div className="face front">
              <Image
                src="/logos/logo-RYL.svg"
                alt=""
                className="face__img"
                width={200}
                height={200}
              />
            </div>
            <div className="face back">
              <p>Hatha Yoga</p>
            </div>
          </div>

          <h2 className="title">Hatha Yoga</h2>
          <p className="paragraph w-full">
            El yoga psicofisicos (Hatha Yoga) es el sistema más perfecto de
            acción armonizante sobre el cuerpo, sus funciones y energías.
            Dispone de un gran número de técnicas de purificación física y
            energética, donde juega un papel muy importante la atención
            consciente. Estás técnicas que se aplican sobre el cuerpo son : las
            asanas o posiciones físicas; el pranayama, o técnica de control
            respiratorio; los mudras y bandhas, o técnica de aprovechamiento de
            la energía y por último los shatkarmas o prácticas de limpieza
            corporal.
          </p>
        </article>

        <article className="flex flex-wrap flex-col grow-0 shrink-0 basis-full lg:basis-1/2 gap-4 items-center justify-center p-5">
          <Image
            src="/images/conceptos/hatha-yoga.jpg"
            alt=""
            className="block max-w-[400px] max-h-[450px] mx-auto rounded shadow-[0_0_10px_rgba(0,0,0,0.25)]"
            width={300}
            height={450}
          />
        </article>
      </article>

      <article className="py-10 px-5 lg:px-20 flex flex-wrap items-center justify-center flex-row-reverse">
        <article className="flex flex-wrap flex-col grow-0 shrink-0 basis-full lg:basis-1/2 gap-4 items-center justify-center p-5">
          <div className="card">
            <div className="face front">
              <Image
                src="/logos/flor-de-loto.png"
                alt=""
                className="face__img"
                width={200}
                height={200}
              />
            </div>
            <div className="face back">
              <p>Shiatsu</p>
            </div>
          </div>

          <h2 className="title">Shiatsu</h2>
          <p className="paragraph">
            El Shiatzu es un método de trabajo corporal cuyo núcleo es una
            creencia de que todo lo que existe es una manifestación de energía.
            Esta energía llamada Ki, necesita fluir por el cuerpo humano sin
            problemas para que esté mantenga una salud óptima y prevenga
            enfermedades. Mediante la presión con los dedos, palmas o a veces
            antebrazos, codos o rodillas se estimula esa energía sobre
            determinados meridianos para su libre fluir. Sus efectos son
            increíblemente transformadores.
          </p>
        </article>

        <article className="flex flex-wrap flex-col grow-0 shrink-0 basis-full md:basis-1/2 gap-4 items-center justify-center p-5">
          <Image
            src="/images/conceptos/shiatsu.jpg"
            alt=""
            className="block max-w-[400px] max-h-[450px] mx-auto rounded shadow-[0_0_10px_rgba(0,0,0,0.25)]"
            width={300}
            height={450}
          />
        </article>
      </article>

      <h2 className="title px-10">
        Nuestra mente es como un lago. Cuando está agitado y movido no puede
        reflejar el cielo. Solo cuando está perfectamente tranquilo y en calma
        deja que en él se mire el firmamento.
      </h2>
      <h3 className="title px-10">
        Si todavía no lo experimentaste, animate 🙏
      </h3>
    </section>
  );
};

export default Services;
