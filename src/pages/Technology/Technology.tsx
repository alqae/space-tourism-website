import React from 'react';
import classNames from 'classnames';
import styles from './technology.module.scss';

import { useMediaQuery } from '@/HOC';

import LaunchVehicleLandscape from '@assets/technology/image-launch-vehicle-landscape.jpg';
import LaunchVehiclePortrait from '@assets/technology/image-launch-vehicle-portrait.jpg';
import SpaceCapsuleLandscape from '@assets/technology/image-space-capsule-landscape.jpg';
import SpaceCapsulePortrait from '@assets/technology/image-space-capsule-portrait.jpg';
import SpaceportLandscape from '@assets/technology/image-spaceport-landscape.jpg';
import SpaceportPortrait from '@assets/technology/image-spaceport-portrait.jpg';

export interface TechnologyProps { }

export const Technology: React.FC<TechnologyProps> = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [activeTab, setActiveTab] = React.useState(0);
  const [data] = React.useState(
    [
      {
        id: 1,
        image: {
          landscape: LaunchVehicleLandscape,
          portrait: LaunchVehiclePortrait,
        },
        name: 'Launch Vehicle',
        title: 'The Terminology…',
        description: 'A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth\'s surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it\'s quite an awe-inspiring sight on the launch pad!'
      },
      {
        id: 2,
        image: {
          landscape: SpaceCapsuleLandscape,
          portrait: SpaceCapsulePortrait,
        },
        name: 'Spaceport',
        title: 'The Terminology…',
        description: 'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.'
      },
      {
        id: 3,
        image: {
          landscape: SpaceportLandscape,
          portrait: SpaceportPortrait,
        },
        name: 'Space Capsule',
        title: 'The Terminology…',
        description: 'A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth\'s atmosphere without wings. Our capsule is where you\'ll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.'
      },
    ]
  );

  return (
    <div className="container fd--lg--r mx-auto grid">
      <div className="col-12 my-4 my-md-0 mb-md-6 mb-lg-0 text-center--sm">
        <span className={styles.eyebrow}><b>03</b>Space launch 101</span>
      </div>

      <div className={classNames(styles.imageWrapper, 'col-6_sm-12', 'fd--lg--rr')}>
        <img
          key={activeTab}
          src={data[activeTab].image[isMobile ? 'landscape' : 'portrait']}
          alt={data[activeTab].name}
          style={{ animation: 'flash 1.5s .5s' }}
        />
      </div>

      <div className={classNames(styles.boxWrapper, 'col-6_sm-12')}>
        <div className={classNames(styles.navigationWrapper)}>
          {
            data.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(index)}
                className={
                  classNames(
                    styles.navigationButton,
                    { [styles.active]: activeTab === index }
                  )
                }
              >
                <span>{index + 1}</span>
              </button>
            ))
          }
        </div>

        <div className={classNames(styles.box, 'text-center--md', 'mx-auto')}>
          <span className={styles.eyebrow}>{data[activeTab].title}</span>
          <h2 className="mb-2 mb-md-3">{data[activeTab].name}</h2>
          <p>{data[activeTab].description}</p>
        </div>
      </div>
    </div>
  );
}
