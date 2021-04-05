import React from 'react';

import { Provider } from 'react-redux';
import { Store } from './src/store/index';

import Navigation from './src/pages/Navigation';

const App = () => {
  return (
    <Provider store={Store}>
      <Navigation />
    </Provider>
  );
}

export default App;