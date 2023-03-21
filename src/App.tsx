import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import { Layout } from '@components/Layout';

import { Home, Destination, Crew, Technology} from '@pages/index';

// Import global styles
import '@styles/global.scss'

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="destination" element={<Destination />} />
        <Route path="crew" element={<Crew />} />
        <Route path="technology" element={<Technology />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}


const NoMatch: React.FC<{}> = () => {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default App;
