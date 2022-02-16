import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

import App from './App';

hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
