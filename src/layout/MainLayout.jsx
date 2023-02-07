import Hero from '@/components/Hero';
import Nav from '@/common/Nav';
import Head from 'next/head';
// import Footer from '../common/footer/Footer';

const MainLayout = ({ children }) => {
  return (
    <>
      <div className="min-h-full">
        <Head>
          <title>Hatha Yoga Lobería - Yoga y Shiatsu</title>
          <meta
            name="description"
            content="Yoga en Lobería. Recuerda, el yoga es una luz, que una vez encendida, nunca se atenuará. Cuanto mejor es la práctica, más brillante es la llama"
          />
          <link rel="icon" type="image/png" href="/favicon.png"></link>
        </Head>
        <Nav />
        <Hero />
        <main>
          {/* <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8"> */}
          {children}
          {/* </div> */}
        </main>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default MainLayout;
