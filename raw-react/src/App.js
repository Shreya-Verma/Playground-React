import { StrictMode, useState, lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
//import Pet from "./Pet";
/**
 * 
 import SearchParams from './SearchParams';
 import Details from './Details';

 we are going to lazyload these applications  using routes on the fly.
 if we put this up here then till will get bundeled up in the beginning, and we don't want that.
 using lazy and Suspence from react to implenent lazy-loading/code-splitting
 * 
 */
import ThemeContext from './ThemeContext';

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", { id: "hello" }, "Adopt Me"),
//     React.createElement(Pet, { name: "Luna", animal: "Dog" }),
//     React.createElement(Pet, { name: "Pepper", animal: "Bird" }),
//     React.createElement(Pet, { name: "Pluto", animal: "Dog" }),
//   ]);
// };

/**
 * Laxy loading the comonents
 */
const Details = lazy(() => import('./Details'));
const SearchParams = lazy(() => import('./SearchParams'));

const App = () => {
  const theme = useState('darkblue');
  return (
    <ThemeContext.Provider value={theme}>
      <div
        className="p-0 m-0"
        style={{
          background:
            'url(http://pets-images.dev-apis.com/pets/wallpaperA.jpg)',
        }}
      >
        {/* <Pet name="Luna" animal="Dog" breed="labrador"></Pet>
      <Pet name="Pepper" animal="Bird" breed="cocktiel"></Pet>
      <Pet name="Pluto" animal="Dog" breed="golden retriver"></Pet> */}

        {/**
         * can replace this loading route h2 with a spinner
         */}
        <Suspense fallback={<h2>Loading route...</h2>}>
          <Router>
            <header className="w-full mb-10 text-center p-7 bg-gradient-to-b from-purple-400 via-pink-400 to-red-500">
              <Link to="/" className="text-6xl text-white hover:text-gray-200">
                <h1>Adopt Me!!</h1>
              </Link>
            </header>

            <Switch>
              <Route path="/details/:id">
                <Details />
              </Route>
              <Route path="/">
                <SearchParams />
              </Route>
            </Switch>
          </Router>
        </Suspense>
      </div>
    </ThemeContext.Provider>
  );
};

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
