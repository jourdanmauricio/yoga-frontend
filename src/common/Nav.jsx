import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

const Nav = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const btnMenuRef = useRef();
  const router = useRouter();

  useEffect(() => {
    const closeMenu = (e) => {
      if (!btnMenuRef.current.contains(e.target)) setIsOpenMenu(false);
    };

    document.body.addEventListener('click', closeMenu);

    return () => document.body.removeEventListener('click', closeMenu);
  }, []);

  return (
    <nav className="flex justify-between sm:block sticky min-h-[45px] top-0 z-50 items-center bg-slate-200 shadow-[0_4px_9px_0px_rgba(41,41,41,0.25)] px-6 py-0">
      <Image
        ref={btnMenuRef}
        onClick={() => setIsOpenMenu((prev) => !prev)}
        width={25}
        height={25}
        src="/icons/icon_menu.svg"
        alt="Menu Icon"
        className="sm:hidden hover:cursor-pointer"
      />
      <div className="flex justify-between items-center">
        <Image width={180} height={45} src="/images/logo2.svg" alt="logo" />
        <ul className="list-none p-0 m-0 hidden sm:flex items-center h-[50px] ml-3">
          <li
            className={`ml-2 no-underline text-pink-600 border border-solid hover:border-pink-600 rounded-[8px] ${
              router.asPath == '/#inicio'
                ? 'border-pink-600'
                : 'border-slate-200'
            }`}
          >
            <Link
              className="block px-2 py-1"
              href="#inicio"
              scroll={false}
              data-scroll-spy
            >
              Inicio
            </Link>
          </li>
          <li
            className={`ml-2 no-underline text-pink-600 border border-solid hover:border-pink-600 rounded-[8px] ${
              router.asPath == '/#servicios'
                ? 'border-pink-600'
                : 'border-slate-200'
            }`}
          >
            <Link
              className="block px-2 py-1"
              href="#servicios"
              scroll={false}
              data-scroll-spy
            >
              Servicios
            </Link>
          </li>
          <li
            className={`ml-2 no-underline text-pink-600 border border-solid hover:border-pink-600 rounded-[8px] ${
              router.asPath == '/#lessons'
                ? 'border-pink-600'
                : 'border-slate-200'
            }`}
          >
            <Link
              className="block px-2 py-1"
              href="#lessons"
              scroll={false}
              data-scroll-spy
            >
              Horarios
            </Link>
          </li>
          <li
            className={`ml-2 no-underline text-pink-600 border border-solid hover:border-pink-600 rounded-[8px] ${
              router.asPath == '/#contact'
                ? 'border-pink-600'
                : 'border-slate-200'
            }`}
          >
            <Link
              className="block px-2 py-1"
              href="#contact"
              scroll={false}
              data-scroll-spy
            >
              Contacto
            </Link>
          </li>
        </ul>
      </div>

      <div
        className={`absolute top-[45px] left-0 w-[50%] bg-slate-200 -z-10 ${
          isOpenMenu ? 'block' : 'hidden'
        }`}
      >
        <ul className="min-h-screen justify-between px-0 list-none">
          <li className="hover:bg-gray-600 transition duration-300 ease-in-out">
            <Link
              className="no-underline text-black font-normal px-6 py-6 block"
              href="/#inicio"
              scroll={false}
              data-scroll-spy
            >
              Inicio
            </Link>
          </li>
          <li className="hover:bg-gray-600 transition duration-300 ease-in-out">
            <Link
              className="no-underline text-black font-normal px-6 py-6 block"
              href="/#servicios"
              scroll={false}
              data-scroll-spy
            >
              Servicios
            </Link>
          </li>
          <li className="hover:bg-gray-600 transition duration-300 ease-in-out">
            <Link
              className="no-underline text-black font-normal px-6 py-6 block"
              href="/#lessons"
              scroll={false}
              data-scroll-spy
            >
              Horarios
            </Link>
          </li>
          <li className="hover:bg-gray-600 transition duration-300 ease-in-out">
            <Link
              className="no-underline text-black font-normal px-6 py-6 block"
              href="/#contact"
              scroll={false}
              data-scroll-spy
            >
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
