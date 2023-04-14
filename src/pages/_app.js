import MainLayout from '@/layout/MainLayout';
import '@/styles/globals.css';

import {
  Raleway,
  Quicksand,
  Dancing_Script,
  Indie_Flower,
} from 'next/font/google';

const raleway = Raleway({ subsets: ['latin'] });
const quicksand = Quicksand({ subsets: ['latin'] });
const primaryFont = Dancing_Script({ subsets: ['latin'] });

const secondaryFont = Indie_Flower({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        :root {
          --quicksand-font: ${quicksand.style.fontFamily};
          --raleway-font: ${raleway.style.fontFamily};
          --primary-font: ${primaryFont.style.fontFamily};
          --secondary-font: ${secondaryFont.style.fontFamily};
        }
      `}</style>
      <MainLayout className={raleway.className}>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}
