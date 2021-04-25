import React from 'react';
import Navigation from './src/pages/Navigation';

import { Store } from './src/store/index';
import { Provider } from 'react-redux';
import ConfigureLocalNotification from './src/components/LocalNotification';

const App = () => {
  
  ConfigureLocalNotification();
  
  return (
    <Provider store={Store}>
      <Navigation />
    </Provider>
  );
}

export default App;