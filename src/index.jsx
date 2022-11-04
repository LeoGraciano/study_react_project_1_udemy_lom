import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global-styles.sass';

import { Home } from './templates/Home';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)

