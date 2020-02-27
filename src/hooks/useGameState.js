import { useState, useEffect } from 'react';

import utils from '../utils';
import constants from '../constants';

const {
  point,
  status,
  range: { min, max },
} = constants;

const useGameState = () => {

  const [points, setPoints] = useState(0);
  const [starRange, setStarRange] = useState({ min, max });
  const [starsCount, setStarsCount] = useState(0);
  const [gameStatus, setGameStatus] = useState(status.stop);
  const [candidateNumbers, setCandidateNumbers] = useState([]);
  const [result, setResult] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [starsDisplayId, setStarsDisplayId] = useState(0);

  const [
    availableNumbers, setAvailableNumbers
  ] = useState(utils.range(starRange.min, starRange.max));

  useEffect(() => {
    switch (gameStatus) {
      case status.won:
        setResult(result);
        break;
      case status.timeout:
      case status.stop:
        setIsPaused(false);
        setCandidateNumbers([]);
        setAvailableNumbers(utils.range(starRange.min, starRange.max));
        break;
      case status.pause:
        setIsPaused(true);
        break;
      case status.playing:
        if (isPaused)
          setStarsCount(utils.sumIn(availableNumbers, max));
        else {
          setPoints(0);
          setIsPaused(false);
          setStarsCount(utils.randomNumber(starRange.min, starRange.max));
          setAvailableNumbers(utils.range(starRange.min, starRange.max));
        }
    }
  }, [gameStatus]);

  const computePoint = candidatesCount => {
    return (point * (candidatesCount === 0 ? 1 : candidatesCount));
  }

  const setGameState = newCandidateNums => {
    const candidateSum = utils.sumNumbers(newCandidateNums);

    if (candidateSum !== starsCount) {
      setCandidateNumbers(newCandidateNums);
    } else {
      // Award points if sum of click number(s) equals the number of stars
      setPoints(points + computePoint(newCandidateNums.length));
      setStarsDisplayId(starsDisplayId + 1);

      // Filter out clicked number(s)
      const newAvailableNums = availableNumbers.filter(num => !newCandidateNums.includes(num));
      setAvailableNumbers(newAvailableNums);
      setCandidateNumbers([]);

      // Game is won when availableNumbers is empty
      // Set gameStatus to won
      if (newAvailableNums.length === 0) {
        setGameStatus(status.won);
      }
      // Sets new numbers of stars to display
      setStarsCount(utils.sumIn(newAvailableNums, max));
    }
  };

  return {
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
  };
};

export default useGameState;
