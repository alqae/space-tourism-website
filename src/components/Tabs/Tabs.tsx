import React from 'react';

import styles from './tabs.module.scss';

export interface TabsProps { }

export const Tabs: React.FC<TabsProps> = () => {
  return (
    <div className={styles.Tabs}>Tabs</div>
  );
}
