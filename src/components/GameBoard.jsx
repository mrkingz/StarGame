import React, { useState } from 'react';

import ControlBoard from './ControlBoard';
import useGameState from '../hooks/useGameState';
import NumberBoard from './NumberBoard';
import StarBoard from './StarBoard';
import Counter from './Counter';

import constants from '../constants';

const { status } = constants;

const GameBoard = () => {

  const {
    points,
    setPoints,
    starsCount,
    result,
    setResult,
    gameStatus,
    setGameStatus,
    candidateNumbers,
    availableNumbers,
    setGameState,
    starsDisplayId,
  } = useGameState();

  const [gameId, setGameId] = useState(0);

  const toggleGameStatus = newStatus => {
    if (newStatus === status.stop) {
      setPoints(0);
    } else {
      setGameId(gameId + 1);
    }

    setResult(null);
    setGameStatus(newStatus);
  };

  return (
    <div className="container container-top">

      <div className="row">
        <div className="col-12 col-lg-4 mx-auto">
          <div className="rounded border border-info text-center pt-4 pb-2">
            <StarBoard
              result={result}
              gameStatus={gameStatus}
              starsCount={starsCount}
              points={points}
              starsDisplayId={starsDisplayId}
            />

            <Counter
              result={result}
              gameStatus={gameStatus}
              toggleGameStatus={toggleGameStatus}
            />

            <NumberBoard
              key={gameId}
              availableNumbers={availableNumbers}
              candidateNumbers={candidateNumbers}
              starsCount={starsCount}
              gameStatus={gameStatus}
              setGameState={setGameState}
            />

            <ControlBoard
              togglePlayStatus={toggleGameStatus}
              gameStatus={gameStatus}
            />
            <div className="mb-2 mt-3"><b>Points: {points}</b></div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default GameBoard;
