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
    <div className="container d--f fd--c jc-center mx-auto">
      <div className="mb-8 text-center--sm">
        <span className={styles.eyebrow}><b>01</b>Pick your destination</span>
      </div>

      <div className="grid px-1 px-md-0">
        <div className={classNames(styles.imageWrapper, 'col-6_sm-12', 'd--f', 'jc-center', 'ai-center')}>
          <img
            key={activeTab}
            src={data[activeTab].image}
            alt={data[activeTab].title}
            style={{ animation: 'flash 1.5s .5s' }}
          />
        </div>

        <div className="col-6_sm-12 d--f jc-center ai-center">
          <div className={styles.box}>
            <Tabs
              defaultIndex={activeTab}
              onSelect={(index) => setActiveTab(index)}
              selectedTabClassName="is-selected"
              selectedTabPanelClassName="is-selected"
            >
              <TabList className="d--f jc-center jc-md-start">
                {data.map((item) => <Tab key={item.id}>{item.title}</Tab>)}
              </TabList>

              {
                data.map((item) => (
                  <TabPanel key={item.id} className="text-center--md pt-4">
                    <h2 className="mb-2">{item.title}</h2>
                    <p className="mb-7">{item.description}</p>
                    <hr className="mb-3" />

                    <div className="d--f jc-evenly jc-md-start">
                      <div className={classNames(styles.stadistics, 'mr-md-9')}>
                        <h6 className="mb-2">avg. distance</h6>
                        <span className={styles.eyebrow}>{item.distance}</span>
                      </div>

                      <div className={styles.stadistics}>
                        <h6 className="mb-2">est. travel time</h6>
                        <span className={styles.eyebrow}>{item.estTime}</span>
                      </div>
                    </div>
                  </TabPanel>
                ))
              }
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
