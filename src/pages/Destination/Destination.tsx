import React from 'react';
import classNames from 'classnames';
import styles from './destination.module.scss';
import { AnimationProps, motion } from 'framer-motion';

import { Tabs } from '@components/Tabs';

import Europa from '@assets/destination/image-europa.png';
import Titan from '@assets/destination/image-titan.png';
import Moon from '@assets/destination/image-moon.png';
import Mars from '@assets/destination/image-mars.png';

const transition: AnimationProps['transition'] = {
  duration: 0.8,
  ease: [0.6, -0.05, 0.01, 0.99],
};

export interface DestinationProps { }

export const Destination: React.FC<DestinationProps> = () => {
  const [activeTab, setActiveTab] = React.useState(0);
  const [data] = React.useState(
    [
      {
        id: 1,
        title: 'Moon',
        image: Moon,
        description: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
        distance: '384,400 km',
        estTime: '3 days',
      },
      {
        id: 2,
        title: 'Mars',
        image: Mars,
        description: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
        distance: '225 MIL. km',
        estTime: '9 months',
      },
      {
        id: 3,
        title: 'Europa',
        image: Europa,
        description: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
        distance: '628 MIL. km',
        estTime: '3 years',
      },
      {
        id: 4,
        title: 'Titan',
        image: Titan,
        description: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
        distance: '1.6 BIL. km',
        estTime: '7 years',
      },
    ]
  );

  React.useEffect(() => {
    document.title = `${data[activeTab].title} | Space Travel`;

    return () => {
      document.title = 'Space Travel';
    };
  }, [activeTab, data]);

  return (
    <div className={classNames(
      'container',
      'd-flex',
      'flex-column',
      'justify-content-lg-center',
      'mb-7',
      'mb-md-8',
      'mb-lg-0'
    )}>
      <motion.span
        className={classNames(
          'eyebrow',
          'text-center',
          'text-md-start',
          'mb-4',
          'mb-md-8',
          'mt-3',
          'mt-md-8',
          'mt-lg-0',
        )}
        animate={{ opacity: [0, 1], y: [-30, 0] }}
        transition={transition}
      >
        <b>01</b>Pick your destination
      </motion.span>

      <div className={classNames(
        'd-flex',
        'flex-column',
        'flex-lg-row',
        'align-items-center',
        'justify-content-lg-between',
        'col-12',
      )}>
        <div className={classNames(styles.imageWrapper, 'ms-lg-7', 'mb-3', 'mb-md-7', 'mb-lg-0')}>
          <motion.img
            key={activeTab}
            alt={data[activeTab].title}
            src={data[activeTab].image}
            animate={{ scale: [1, 1.1, 1] }}
            transition={transition}
          />
        </div>

        <div className={styles.box}>
          <Tabs
            selectedTab={activeTab}
            onSelectedTab={(index) => setActiveTab(index)}
            items={data.map((item) => ({
              route: `#${item.title}`,
              name: item.title,
              render: () => (
                <div key={item.id} className="text-center text-lg-start pt-3 pt-mb-4">
                  <h2 className="mb-2">{item.title}</h2>
                  <p className="mb-4 mb-md-6 mb-lg-7">{item.description}</p>
                  <hr className="mb-4 mb-3" />

                  <div className={classNames(
                    'd-flex',
                    'gap-4',
                    'gap-md-0',
                    'gap-lg-10',
                    'flex-column',
                    'flex-md-row',
                    'justify-content-md-evenly',
                    'justify-content-lg-start',
                  )}>
                    <div className={styles.stadistics}>
                      <span className="sub-header-small d-block mb-2">avg. distance</span>
                      <span className="sub-header-large">{item.distance}</span>
                    </div>

                    <div className={styles.stadistics}>
                      <span className="sub-header-small d-block mb-2">est. travel time</span>
                      <span className="sub-header-large">{item.estTime}</span>
                    </div>
                  </div>
                </div>
              ),
            }))}
          />
        </div>
      </div>
    </div>
  );
}
