import React from 'react';
import classNames from 'classnames';
import styles from './destination.module.scss';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

import Europa from '@assets/destination/image-europa.png';
import Titan from '@assets/destination/image-titan.png';
import Moon from '@assets/destination/image-moon.png';
import Mars from '@assets/destination/image-mars.png';

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
      <span className={classNames(
        'eyebrow',
        'text-center',
        'text-md-start',
        'mb-4',
        'mb-md-8',
        'mt-3',
        'mt-md-8',
        'mt-lg-0',
      )}><b>01</b>Pick your destination</span>

      <div className={classNames(
        'd-flex',
        'flex-column',
        'flex-lg-row',
        'align-items-center',
        'justify-content-lg-between',
        'col-12',
      )}>
        <div className={classNames(styles.imageWrapper, 'ms-lg-7', 'mb-3', 'mb-md-7', 'mb-lg-0')}>
          <img
            key={activeTab}
            src={data[activeTab].image}
            alt={data[activeTab].title}
            style={{ animation: 'flash 1.5s .5s' }}
          />
        </div>

        <div className={styles.box}>
          <Tabs
            defaultIndex={activeTab}
            onSelect={(index) => setActiveTab(index)}
            selectedTabClassName="is-selected"
            selectedTabPanelClassName="is-selected pt-3 pt-mb-4"
          >
            <TabList className={classNames(
              'd-flex',
              'justify-content-center',
              'justify-content-lg-start',
            )}>
              {data.map((item) => <Tab key={item.id}>{item.title}</Tab>)}
            </TabList>

            {
              data.map((item) => (
                <TabPanel key={item.id} className="text-center text-lg-start">
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
                </TabPanel>
              ))
            }
          </Tabs>
        </div>
      </div>
    </div>
  );
}
