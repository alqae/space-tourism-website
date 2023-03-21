import React from 'react';
import classNames from 'classnames';
import styles from './home.module.scss';
import { NavLink } from 'react-router-dom';

export interface HomeProps { }

export const Home: React.FC<HomeProps> = () => (
  <div className="container d-flex pb-md-10 mx-auto">
    <div className="col-6_sm-12 d--f jc-center jc-lg-start ai-center ai-md-end text-center--md">
      <div className={styles.box}>
        <span className={classNames(styles.eyebrow, 'mb-2', 'mb-md-3')}>
          so, you want to travel to
        </span>

        <h1 className="mb-2 mb-md-3">Space</h1>

        <p>
          Let’s face it; if you want to go to space, you might as well
          genuinely go to outer space and not hover kind of on the edge of
          it. Well sit back, and relax because we’ll give you a truly out of
          this world experience!
        </p>
      </div>
    </div>

    <div className="col-6_sm-12 d--f jc-center jc-lg-end ai-center ai-md-end">
      <NavLink to="/destination" className={styles.explore}>
        <span>Explore</span>
      </NavLink>
    </div>
  </div>
)
