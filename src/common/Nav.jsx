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
    <nav className="menu font-raleway">
      <Image
        ref={btnMenuRef}
        onClick={() => setIsOpenMenu((prev) => !prev)}
        width={25}
        height={25}
        src="/icons/icon_menu.svg"
        alt="Menu Icon"
        className="menu__icon"
      />
      <div className="menu__desktop">
        <Image width={180} height={45} src="/images/logo2.svg" alt="logo" />
        <ul className="menu__ul">
          <li
            className={`menu__link ${
              router.asPath == '/#inicio'
                ? 'border-b border-solid border-buttonColor'
                : ''
            }`}
          >
            <Link
              className="menu__item anim__bottom to__center"
              href="#inicio"
              scroll={false}
            >
              Inicio
            </Link>
          </li>
          <li
            className={`menu__link group ${
              router.asPath == '/#servicios'
                ? 'border-b border-solid border-buttonColor'
                : ''
            }`}
          >
            <Link
              className="menu__item anim__bottom to__center"
              href="#servicios"
              scroll={false}
            >
              Servicios
            </Link>
          </li>
          <li
            className={`menu__link group ${
              router.asPath == '/#lessons'
                ? 'border-b border-solid border-buttonColor'
                : ''
            }`}
          >
            <Link
              className="menu__item anim__bottom to__center"
              href="#lessons"
              scroll={false}
            >
              Horarios
            </Link>
          </li>
          <li
            className={`menu__link group ${
              router.asPath == '/#contact'
                ? 'border-buttonColor'
                : 'border-slate-200'
            }`}
          >
            <Link
              className="menu__item anim__bottom to__center"
              href="#contact"
              scroll={false}
            >
              Contacto
            </Link>
          </li>
        </ul>
      </div>

      <div className={`menu__mobile ${isOpenMenu ? 'block' : 'hidden'}`}>
        <ul className="menu__ul-mobile">
          <li className="menu__link-mobile">
            <Link
              className="menu__mobile-item"
              href="/#inicio"
              scroll={false}
              data-scroll-spy
            >
              Inicio
            </Link>
          </li>
          <li className="menu__link-mobile">
            <Link
              className="menu__mobile-item"
              href="/#servicios"
              scroll={false}
              data-scroll-spy
            >
              Servicios
            </Link>
          </li>
          <li className="menu__link-mobile">
            <Link
              className="menu__mobile-item"
              href="/#lessons"
              scroll={false}
              data-scroll-spy
            >
              Horarios
            </Link>
          </li>
          <li className="menu__link-mobile">
            <Link
              className="menu__mobile-item"
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
