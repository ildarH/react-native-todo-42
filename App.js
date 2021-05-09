import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {MainLayout} from './src/MainLayout';

export default function App() {
  return (
    <Provider store={store}>
      <MainLayout />
    </Provider>
  );
}