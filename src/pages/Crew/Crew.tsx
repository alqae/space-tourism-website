import React from 'react';
import classNames from 'classnames';
import styles from './crew.module.scss';
import { AnimationProps, motion, MotionProps, useDragControls } from 'framer-motion';

import { useMediaQuery, usePrevious } from '@/HOC';

import MarkShuttleworth from '@assets/crew/image-mark-shuttleworth.png';
import AnoushehAnsari from '@assets/crew/image-anousheh-ansari.png';
import DouglasHurley from '@assets/crew/image-douglas-hurley.png';
import VictorGlover from '@assets/crew/image-victor-glover.png';

const transition: AnimationProps['transition'] = {
  duration: 0.8,
  ease: [0.6, -0.05, 0.01, 0.99],
};

export interface CrewProps { }

export const Crew: React.FC<CrewProps> = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [activeTab, setActiveTab] = React.useState(0);
  const previousActiveTab = usePrevious(activeTab) ?? 0;
  const controls = useDragControls()
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

  const dragProps: Partial<MotionProps> = {
    // drag: 'x',
    drag: isMobile ? 'x' : false,
    // draggable: isMobile,
    dragSnapToOrigin: true,
    dragControls: controls,
    onDragEnd: (_, info) => {
      if (info.offset.x > 50 && !!activeTab) {
        setActiveTab(activeTab - 1);
      } else if (info.offset.x < -50 && activeTab < data.length - 1) {
        setActiveTab(activeTab + 1);
      }
    },
    transition: { duration: 0.4, ease: 'linear' },
    animate: { x: [activeTab > previousActiveTab ? 100 : -100, 0], opacity: [0, 1] },
  }

  return (
    <div className="container d-flex flex-column flex-lg-row">
      <motion.span
        className={classNames(
          'eyebrow',
          'd-block',
          'd-md-none',
          'mb-4',
          'mt-3',
          'text-center',
        )}
        animate={{ opacity: [0, 1], y: [-100, 0] }}
        transition={transition}
      >
        <b>02</b>Meet your crew
      </motion.span>

      <motion.div
        key={activeTab}
        {...dragProps}
        drag={isMobile ? false: 'x'}
        className={classNames(
          'col-12',
          'd-flex',
          'flex-column',
          'flex-column-reverse',
          'flex-md-column',
          'flex-lg-row',
          'justify-content-between',
          'mt-lg-8',
          'mt-md-5',
        )}
      >
        <div className="d-flex flex-column-reverse flex-md-column">
          <motion.span
            className={classNames(
              'eyebrow',
              'd-none',
              'd-md-block',
              'mb-4',
              'mb-md-8',
              'mb-lg-20',
            )}
            animate={{ opacity: [0, 1], x: [-100, 0] }}
            transition={transition}
          >
            <b>02</b>Meet your crew
          </motion.span>

          <motion.div
            key={activeTab}
            {...dragProps}
            className={classNames(
              styles.box,
              'd-flex',
              'flex-column',
              'align-items-center',
              'align-items-lg-start',
              'text-center',
              'text-lg-start',
              'mb-lg-10',
            )}
          >
            <span className={classNames(styles.position, 'mb-1', 'mb-lg-2')}>{data[activeTab].position}</span>
            <h3 className="mb-2 mb-lg-3">{data[activeTab].name}</h3>
            <p>{data[activeTab].description}</p>
          </motion.div>

          <motion.div
            className={classNames(
              'd-flex',
              'justify-content-center',
              'justify-content-lg-start',
              'gap-2',
              'gap-lg-3',
              'py-4',
              'py-md-5',
              'pb-lg-0',
              'mb-lg-10',
            )}
            animate={{ opacity: [0, 1], x: [-100, 0] }}
            transition={transition}
          >
            {data.map((item, index) => (
              <div
                key={item.id}
                className={classNames(styles.dot, { [styles.active]: index === activeTab })}
                onClick={() => setActiveTab(index)}
              />
            ))}
          </motion.div>
        </div>

        <motion.div
          key={activeTab}
          {...dragProps}
          className={classNames(styles.imageWrapper, 'text-center', 'text-lg-start')}
        >
          <motion.img
            key={activeTab}
            animate={{ opacity: [0, 1], scale: [0.8, 1] }}
            src={data[activeTab].avatar}
            alt={data[activeTab].name}
          />
          <hr className="d-block d-md-none" />
        </motion.div>
      </motion.div>
    </div>
  );
}
