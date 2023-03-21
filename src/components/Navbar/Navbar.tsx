import React from 'react';
import classNames from 'classnames';
import styles from './navbar.module.scss';
import { NavLink } from 'react-router-dom';

import Logo from '../../assets/icons/logo.svg';
import IconClose from '../../assets/icons/icon-close.svg';
import IconHamburger from '../../assets/icons/icon-hamburger.svg';

export interface NavbarProps { }

export const Navbar: React.FC<NavbarProps> = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [data] = React.useState(
    [
      {
        path: '/',
        label: 'Home',
      },
      {
        path: '/destination',
        label: 'Destination',
      },
      {
        path: '/crew',
        label: 'Crew',
      },
      {
        path: '/technology',
        label: 'Technology',
      },
    ],
  );

  return (
    <header className={styles.navbar}>
      <NavLink to="/">
        <img src={Logo} alt="logo" />
      </NavLink>

      <hr />

      <div className={styles.hamburger} onClick={() => setIsOpen(true)}>
        <img src={IconHamburger} alt="Open Menu" />
      </div>

      <nav className={classNames({ [styles.show]: isOpen })}>
        <div className={styles.close} onClick={() => setIsOpen(false)}>
          <img src={IconClose} alt="close" />
        </div>

        {data.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            onClick={() => setIsOpen(false)}
            className={({ isActive }) => classNames({ [styles.active]: isActive })}
          >
            <span>
              <b>0{index}</b>{item.label}
            </span>
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
