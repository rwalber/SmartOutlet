import React from 'react';
import Navigation from './src/Navigation';

import { Store } from './src/store/index';
import { Provider } from 'react-redux';

import ConfigureLocalNotification from './src/utils/LocalNotification';

const App = () => {
  
  ConfigureLocalNotification();

  return (
    <Provider store={Store}>
      <Navigation />
    </Provider>
  );
}

export default App;