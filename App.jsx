import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import store from './src/redux/store';
import {persistStore} from 'redux-persist';

import {StatusBar} from 'react-native';
import Routes from './src/routes';

const persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar translucent backgroundColor={'transparent'} />
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  );
};

export default App;
