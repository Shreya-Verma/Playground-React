//used for global state
import { createContext } from 'react';

//["green", function () {}]  can be replaced from reducers
const ThemeContext = createContext(['green', function () {}]);

export default ThemeContext;
