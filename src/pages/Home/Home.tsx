import React from 'react';
import classNames from 'classnames';
import styles from './home.module.scss';
import { useNavigate } from 'react-router-dom';
import { AnimationProps, motion } from 'framer-motion';

import { useMediaQuery } from '@/HOC';

const transition: AnimationProps['transition'] = {
  duration: 0.8,
  ease: [0.6, -0.05, 0.01, 0.99],
};

export interface HomeProps { }

export const Home: React.FC<HomeProps> = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
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
      <motion.div
        className={classNames(styles.box, 'text-center', 'text-lg-start')}
        animate={{ [isMobile ? 'y': 'x']: [-100, 0], opacity: [0, 1] }}
        transition={transition}
      >
        <h5 className={classNames('mb-2', 'mb-md-3')}>so, you want to travel to</h5>
        <h1 className="mb-2 mb-md-3">Space</h1>
        <p>
          Let’s face it; if you want to go to space, you might as well
          genuinely go to outer space and not hover kind of on the
          edge of it. Well sit back, and relax because we’ll give you a
          truly out of this world experience!
        </p>
      </motion.div>
  
      <motion.div
        animate={{ opacity: [0, 1], scale: [0.7, 1] }}
        onClick={() => navigate('destination')}
        className={styles.explore}
        transition={transition}
      >
        <span>Explore</span>
      </motion.div>
    </div>
  );
}
