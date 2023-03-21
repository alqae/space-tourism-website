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
        position: 'The Terminology…',
        description: 'A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth\'s surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it\'s quite an awe-inspiring sight on the launch pad!'
      },
      {
        id: 2,
        image: {
          landscape: SpaceportLandscape,
          portrait: SpaceportPortrait,
        },
        name: 'Spaceport',
        position: 'The Terminology…',
        description: 'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.'
      },
      {
        id: 3,
        image: {
          landscape: SpaceCapsuleLandscape,
          portrait: SpaceCapsulePortrait,
        },
        name: 'Space Capsule',
        position: 'The Terminology…',
        description: 'A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth\'s atmosphere without wings. Our capsule is where you\'ll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.'
      },
    ]
  );

  return (
    <div className={classNames(
      'container',
      'd-flex',
      'flex-column',
      'justify-content-lg-center',
      'mb-5',
      'mb-lg-0',
    )}>
      <span className={classNames(
        'col-12',
        'eyebrow',
        'd-block',
        'mt-3',
        'mb-4',
        'mt-md-5',
        'mb-md-7',
        'mt-lg-0',
        'mb-lg-3',
      )}><b>03</b>Space launch 101</span>

      <div className="d-flex flex-column-reverse flex-lg-row">
        <div className={classNames(
          'col',
          'd-flex',
          'flex-column',
          'flex-lg-row',
          'align-items-center',
        )}>
          <div className={classNames(
            'me-lg-10',
            'mb-3',
            'mt-4',
            'mb-md-5',
            'mt-md-7',
            'my-lg-0',
            'd-flex',
            'gap-2',
            'gap-lg-4',
            'flex-row',
            'flex-lg-column',
            'justify-content-center',
            'justify-content-lg-start',
          )}>
            {
              data.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(index)}
                  className={classNames(
                    styles.navigationButton,
                    { [styles.active]: activeTab === index },
                  )}
                >
                  <span>{index + 1}</span>
                </button>
              ))
            }
          </div>

          <div className={classNames(styles.box, 'text-center', 'text-lg-start')}>
            <span className={styles.position}>{data[activeTab].position}</span>
            <h3 className="mb-2 mb-md-3">{data[activeTab].name}</h3>
            <p>{data[activeTab].description}</p>
          </div>
        </div>

        <div className={classNames(styles.imageWrapper, 'col')}>
          <img
            key={activeTab}
            src={data[activeTab].image[isMobile ? 'landscape' : 'portrait']}
            alt={data[activeTab].name}
            style={{ animation: 'flash 1.5s .5s' }}
          />
        </div>
      </div>
    </div>
  );
}
