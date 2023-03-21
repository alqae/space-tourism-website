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
        eyebrow: 'Commander',
        description: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.'
      },
      {
        id: 2,
        avatar: MarkShuttleworth,
        name: 'Mark Shuttleworth',
        eyebrow: 'Mission Specialist',
        description: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.'
      },
      {
        id: 3,
        avatar: VictorGlover,
        name: 'Victor Glover',
        eyebrow: 'Pilot',
        description: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.'
      },
      {
        id: 4,
        avatar: AnoushehAnsari,
        name: 'Anousheh Ansari',
        eyebrow: 'Flight Engineer',
        description: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. '
      },
    ]
  );

  return (
    <div className="container d--f fd--c jc-center ai-center mx-auto px-3">
      <div className="as-center as-md-start mb-8 mt-md-4">
        <span className={styles.eyebrow}><b>02</b>Meet your crew</span>
      </div>

      <div className={classNames(styles.wrapper, 'd--f', 'jc-between', 'text-center--md')}>
        <div className={styles.imageWrapper}>
          <img
            key={activeTab}
            src={data[activeTab].avatar}
            alt={data[activeTab].name}
            style={{ animation: 'flash 1.5s .5s' }}
          />
        </div>

        <div className="d--f fd--c fd--sm--cr jc-md-evenly">
          <div className={classNames(styles.box, 'text-center--md', 'mx-auto')}>
            <span className={styles.eyebrow}>{data[activeTab].eyebrow}</span>
            <h2 className="mb-2 mb-md-3 mt-md-2">{data[activeTab].name}</h2>
            <p>{data[activeTab].description}</p>
          </div>

          <div className="d--f jc-center jc-md-center jc-lg-start mb-4 mb-md-6 mb-lg-0">
            {data.map((item, index) => (
              <div
                key={item.id}
                className={classNames(styles.dot, {
                  [styles.active]: index === activeTab,
                  'mr-2 mr-md-3': data.length - 1 !== index
                })}
                onClick={() => setActiveTab(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
