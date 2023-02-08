import Link from 'next/link';

const About = () => {
  return (
    <section className="p-10 text-center" id="nosotros">
      <div className="divider__content">
        <p className="divider__text">¿Quienes somos?</p>
      </div>
      <div>
        <h2 className="title">
          El yoga es la oportunidad perfecta para ser curioso sobre quién eres
        </h2>

        <p className="paragraph">
          Hatha Yoga Lobería es un lugar para empezar, desarrollar o fortalecer
          una práctica de yoga y meditación. Nos gustaría compartir contigo la
          experiencia de yoga y ayudarte en aprender como utilizar la
          experiencia de tu vida diaria para un crecimiento espiritual.
        </p>
        <p className="paragraph">
          Logramos impregnar los valores de respeto y cuidado del cuerpo en sus
          alumnos y guiarlos en un descubrir cada vez mas conciente de éste. Los
          practicantes aprenden a escuchar y manejar su cuerpo con vivencias y
          de esta forma convertirse en buenos profesionales, íntegros física,
          mental y emocionalmente, para luego transmitir, difundir y mejorar con
          estas técnicas la calidad de vida de las personas.
        </p>
        <a
          href="#"
          className="inline-block mt-10 text-lg text-buttonColor border-b border-buttonColor ease-in-out duration-500 hover:tracking-widest hover:border-b"
        >
          <Link href="/#lessons" scroll={false}>
            Descubre nuestras clases
          </Link>
        </a>
      </div>
    </section>
  );
};

export default About;
