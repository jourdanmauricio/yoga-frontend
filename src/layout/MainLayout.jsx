import Hero from '@/components/Hero';
import Nav from '@/common/Nav';
import Footer from '../common/footer/Footer';

const MainLayout = ({ children }) => {
  return (
    <>
      <div className="min-h-full">
        <Nav />
        <Hero />
        <main>
          {/* <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8"> */}
          {children}
          {/* </div> */}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
