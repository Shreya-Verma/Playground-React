import { useState, StrictMode } from 'react';

import { Route, Switch, Link } from 'react-router-dom';
import Details from './Details';
import SearchParams from './SearchParams';
import ThemeContext from './ThemeContext';

/**
 *
 * In th previous application : code-splitting , we used lazy and Sequence propided by react
 * to lazy load modules as and when required to increase app performance.
 *
 * Here in this section we will be doing server
 * side rendering so as to increase app's performance.
 *
 * So here we will be using node to do the server side rendering.
 * So we canot use the browser components. like the BrowserRouter from react.
 *
 */

const App = () => {
  const theme = useState('darkblue');
  return (
    <StrictMode>
      <ThemeContext.Provider value={theme}>
        <div>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Switch>
            <Route path="/details/:id">
              <Details />
            </Route>
            <Route path="/">
              <SearchParams />
            </Route>
          </Switch>
        </div>
      </ThemeContext.Provider>
    </StrictMode>
  );
};

export default App;
