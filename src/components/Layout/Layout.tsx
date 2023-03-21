import React from 'react';
import styles from './layout.module.scss';
import { Outlet, useMatch } from 'react-router-dom';

import { useMediaQuery } from '../../HOC';
import { Navbar } from '../Navbar';

// Crew
import CrewMobile from '../../assets/backgrounds/background-crew-mobile.jpg';
import CrewTablet from '../../assets/backgrounds/background-crew-tablet.jpg';
import CrewDesktop from '../../assets/backgrounds/background-crew-desktop.jpg';
// Destination
import DestinationMobile from '../../assets/backgrounds/background-destination-mobile.jpg';
import DestinationTablet from '../../assets/backgrounds/background-destination-tablet.jpg';
import DestinationDesktop from '../../assets/backgrounds/background-destination-desktop.jpg';
// Technology
import TechnologyMobile from '../../assets/backgrounds/background-technology-mobile.jpg';
import TechnologyTablet from '../../assets/backgrounds/background-technology-tablet.jpg';
import TechnologyDesktop from '../../assets/backgrounds/background-technology-desktop.jpg';
// Home
import HomeMobile from '../../assets/backgrounds/background-home-mobile.jpg';
import HomeTablet from '../../assets/backgrounds/background-home-tablet.jpg';
import HomeDesktop from '../../assets/backgrounds/background-home-desktop.jpg';

export interface LayoutProps { }

export const Layout: React.FC<LayoutProps> = () => {
  const [variantSize, setVariantSize] = React.useState('mobile');
  const [variantType, setVariantType] = React.useState('home');

  const variants: { [name: string]: { [path: string]: string } } = {
    crew: {
      mobile: CrewMobile,
      tablet: CrewTablet,
      desktop: CrewDesktop,
    },
    destination: {
      mobile: DestinationMobile,
      tablet: DestinationTablet,
      desktop: DestinationDesktop,
    },
    technology: {
      mobile: TechnologyMobile,
      tablet: TechnologyTablet,
      desktop: TechnologyDesktop,
    },
    home: {
      mobile: HomeMobile,
      tablet: HomeTablet,
      desktop: HomeDesktop,
    },
  };

  const isMobile = useMediaQuery('(max-width: 768px)');
  const isTablet = useMediaQuery('(max-width: 1024px)');
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  const isHome = useMatch('/');
  const isCrew = useMatch('/crew');
  const isDestination = useMatch('/destination');
  const isTechnology = useMatch('/technology');

  React.useEffect(
    () => {
      if (isMobile) {
        setVariantSize('mobile');
      } else if (isTablet) {
        setVariantSize('tablet');
      } else if (isDesktop) {
        setVariantSize('desktop');
      }

      if (isHome) {
        setVariantType('home');
      } else if (isCrew) {
        setVariantType('crew');
      } else if (isDestination) {
        setVariantType('destination');
      } else if (isTechnology) {
        setVariantType('technology');
      }
    },
    [
      isMobile,
      isTablet,
      isDesktop,
      isHome,
      isCrew,
      isDestination,
      isTechnology,
    ],
  );

  return (
    <div
      className={styles.layout}
      style={{ backgroundImage: `url(${variants[variantType][variantSize]})` }}
    >
      <Navbar />
      <Outlet />
    </div>
  );
}
