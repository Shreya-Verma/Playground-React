import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState(0);

  const handleCount = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(0);
      return;
    }
    setIntervalId(
      setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000)
    );
  };

  useEffect(
    () => () => {
      clearTimeout(intervalId);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <div className="Counter">
      <p className="clock">{count}</p>
      <section className="controls">
        <button onClick={handleCount}>{intervalId ? 'Stop' : 'Start'}</button>
      </section>
    </div>
  );
};

export default Timer;
