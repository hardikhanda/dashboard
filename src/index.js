import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Theme 
    appearance="light"accentColor="mint"
  grayColor="auto"
  panelBackground="translucent"
  scaling="100%"
  radius="full">
      <App />
    </Theme>
  </React.StrictMode>
);


