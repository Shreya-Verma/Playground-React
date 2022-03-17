import React from 'react';
import Counter from './components/Counter';
import Clock from './components/Clock';
import Timer from './components/Timer';
import TempCalculator from './components/TempCalculator';

import './styles.scss';
import TextComp from './components/TextComp';

const App = () => {
  return (
    <React.Fragment>
      <TextComp />
      <main className="Application">
        <section className="Counters">
          <TempCalculator />
        </section>
        <section className="Counters">
          <Timer />
        </section>
        <section className="Counters">
          <Counter />
        </section>
        <section className="Counters">
          <Clock />
        </section>
      </main>
    </React.Fragment>
  );
};

export default App;
