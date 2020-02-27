import React, { useState, useEffect } from 'react';
import useInterval from '../hooks/useInterval';
import constants from '../constants';

const { status, counter } = constants;

const Counter = props => {
  const [count, setCount] = useState(counter.count);
  const [stageCount, setStageCount] = useState(0);
  const [delay, setDelay] = useState(counter.delay); // TODO: do something with setDelay later
  const [restart, setRestart] = useState(false);

  const { gameStatus, toggleGameStatus } = props;

  const computeCount = () => {

    let nextCount = counter.count;

    switch (gameStatus) {
      case status.stop:
        setStageCount(0);
        return nextCount;
      case status.pause:
      case status.timeout:
        setRestart(true);
        return count;
      case status.won:
        setRestart(true);
        setStageCount(stageCount === 5 ? 0 : (stageCount + 1));
        return count;
      case status.playing:
        // We have to check the current value of restart before we update it
        // Here, we will compute the next value of count based on the  boolean value of restart
        // then we assign it to nextCount and let the function return it
        nextCount = restart ? (counter.count - (stageCount * 5)) : count;
        setRestart(false);
    }

    return nextCount;
  };

  useEffect(
    () => setCount(computeCount()),
    [gameStatus]
  );

  useInterval(() => {
    if (count > 1)
      setCount(count - 1);
    else {
      setCount(0);
      toggleGameStatus(status.timeout);
    }
  }, gameStatus === status.playing ? delay : null);

  return (
    <div className="my-2 mx-4">
      <b>Count down:
        <div className="d-inline-flex ml-1" style={{ color: 'red', width: '30px' }}>{count}</div>
      </b>
    </div>
  );
};

export default Counter;
