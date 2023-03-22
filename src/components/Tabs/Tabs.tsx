import React from 'react';
import classNames from 'classnames';
import styles from './tabs.module.scss';
import { motion, useDragControls } from 'framer-motion';

import { usePrevious } from '@/HOC';

export interface TabsProps {
  selectedTab: number;
  onSelectedTab: (index: number) => void;
  items: { route: string; name: string, render: () => JSX.Element }[];
}

export const Tabs: React.FC<TabsProps> = ({ items, onSelectedTab, selectedTab }) => {
  const previousSelectedTab = usePrevious(selectedTab) ?? 0;
  const controls = useDragControls()

  return (
    <div className={styles.tabs}>
      <div className={classNames(styles.header, 'd-flex', 'gap-4', 'justify-content-center', 'justify-content-lg-start')}>
        {items.map((item, index) => (
          <div
            key={item.name}
            className={classNames(styles.tab, { [styles.active]: index === selectedTab })}
            onClick={() => onSelectedTab(index)}
          >
            {item.name}
          </div>
        ))}
      </div>

      <motion.div
        key={selectedTab}
        drag="x"
        draggable
        dragSnapToOrigin
        dragControls={controls}
        onDragEnd={(_, info) => {
          if (info.offset.x > 50 && !!selectedTab) {
            onSelectedTab(selectedTab - 1);
          } else if (info.offset.x < -50 && selectedTab < items.length - 1) {
            onSelectedTab(selectedTab + 1);
          }
        }}
        transition={{ duration: 0.4, ease: 'linear' }}
        animate={{ x: [selectedTab > previousSelectedTab ? 100 : -100, 0], opacity: [0, 1] }}
      >
        {items[selectedTab].render()}
      </motion.div>
    </div>
  );
}
