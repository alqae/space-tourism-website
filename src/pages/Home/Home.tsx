import React from 'react';
import classNames from 'classnames';
import styles from './home.module.scss';
import { NavLink } from 'react-router-dom';

export interface HomeProps { }

export const Home: React.FC<HomeProps> = () => (
  <div className={classNames(
    'container',
    'd-flex',
    'flex-column',
    'flex-lg-row',
    'align-items-center',
    'align-items-lg-end',
    'justify-content-evenly',
    'justify-content-lg-between',
    'pb-lg-10',
  )}>
    <div className={classNames(styles.box, 'text-center', 'text-lg-start')}>
      <h5 className={classNames('mb-2', 'mb-md-3')}>so, you want to travel to</h5>
      <h1 className="mb-2 mb-md-3">Space</h1>
      <p>
        Let’s face it; if you want to go to space, you might as well
        genuinely go to outer space and not hover kind of on the
        edge of it. Well sit back, and relax because we’ll give you a
        truly out of this world experience!
      </p>
    </div>

    <NavLink to="/destination" className={styles.explore}>
      <span>Explore</span>
    </NavLink>
  </div>
)
