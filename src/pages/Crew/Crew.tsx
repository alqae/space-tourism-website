import React from 'react';
import classNames from 'classnames';
import styles from './crew.module.scss';

import MarkShuttleworth from '@assets/crew/image-mark-shuttleworth.png';
import AnoushehAnsari from '@assets/crew/image-anousheh-ansari.png';
import DouglasHurley from '@assets/crew/image-douglas-hurley.png';
import VictorGlover from '@assets/crew/image-victor-glover.png';

export interface CrewProps { }

export const Crew: React.FC<CrewProps> = () => {
  const [activeTab, setActiveTab] = React.useState(0);
  const [data] = React.useState(
    [
      {
        id: 1,
        avatar: DouglasHurley,
        name: 'Douglas Hurley',
        position: 'Commander',
        description: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.'
      },
      {
        id: 2,
        avatar: MarkShuttleworth,
        name: 'Mark Shuttleworth',
        position: 'Mission Specialist',
        description: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.'
      },
      {
        id: 3,
        avatar: VictorGlover,
        name: 'Victor Glover',
        position: 'Pilot',
        description: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.'
      },
      {
        id: 4,
        avatar: AnoushehAnsari,
        name: 'Anousheh Ansari',
        position: 'Flight Engineer',
        description: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. '
      },
    ]
  );

  return (
    <div className="container d-flex flex-column flex-lg-row">
      <span className={classNames(
        'eyebrow',
        'd-block',
        'd-md-none',
        'mb-4',
        'mt-3',
        'text-center',
      )}><b>02</b>Meet your crew</span>

      <div className={classNames(
        'col-12',
        'd-flex',
        'flex-column',
        'flex-column-reverse',
        'flex-md-column',
        'flex-lg-row',
        'justify-content-between',
        'mt-lg-8',
        'mt-md-5',
      )}>
        <div className="d-flex flex-column-reverse flex-md-column">
          <span className={classNames(
            'eyebrow',
            'd-none',
            'd-md-block',
            'mb-4',
            'mb-md-8',
            'mb-lg-20',
          )}><b>02</b>Meet your crew</span>

          <div className={classNames(
            styles.box,
            'd-flex',
            'flex-column',
            'align-items-center',
            'align-items-lg-start',
            'text-center',
            'text-lg-start',
            'mb-lg-10',
          )}>
            <span className={classNames(styles.position, 'mb-1', 'mb-lg-2')}>{data[activeTab].position}</span>
            <h3 className="mb-2 mb-lg-3">{data[activeTab].name}</h3>
            <p>{data[activeTab].description}</p>
          </div>

          <div className={classNames(
            'd-flex',
            'justify-content-center',
            'justify-content-lg-start',
            'gap-2',
            'gap-lg-3',
            'py-4',
            'py-md-5',
            'pb-lg-0',
            'mb-lg-10',
          )}>
            {data.map((item, index) => (
              <div
                key={item.id}
                className={classNames(styles.dot, { [styles.active]: index === activeTab })}
                onClick={() => setActiveTab(index)}
              />
            ))}
          </div>
        </div>

        <div className={classNames(styles.imageWrapper, 'text-center', 'text-lg-start')}>
          <img
            key={activeTab}
            src={data[activeTab].avatar}
            alt={data[activeTab].name}
            style={{ animation: 'flash 1.5s .5s' }}
          />
          <hr className="d-block d-md-none" /> {/* Mobile */}
        </div>
      </div>
    </div>
  );
}
