import React, { Fragment } from 'react';

import utils from '../utils';
import NumberButton from './NumberButton';

import constants from '../constants';

const { range: { max }, status } = constants;

const NumberBoard = props => {

  const {
    gameStatus,
    starsCount,
    setGameState,
    candidateNumbers,
    availableNumbers,
  } = props;

  const isWrongCandidates = () => utils.sumNumbers(candidateNumbers) > starsCount;

  const numberStatus = number => {

    if (!availableNumbers.includes(number)) {
      return 'used';
    }

    if (candidateNumbers.includes(number)) {
      if (isWrongCandidates()) {
        return 'wrong';
      }

      return 'candidate';
    }

    return 'available';
  };

  const onNumberClick = (num, currentStatus) => {
    if (gameStatus === status.playing && currentStatus !== 'used') {

      const newCandidateNumbers = currentStatus === 'available'
        ? candidateNumbers.concat(num)
        : candidateNumbers.filter(cn => cn !== num);

      setGameState(newCandidateNumbers);
    }
  };

  return (
    <Fragment>
      {
        utils.shuffleNumbers(utils.range(1, max)).map((number, index) => {
          return (
            <Fragment key={index}>
              <NumberButton
                number={number}
                status={numberStatus(number)}
                onNumberClick={onNumberClick}
              />
              { ((index + 1) % 3) === 0 ? <br /> : null }
            </Fragment>
          );
        })
      }
    </Fragment>
  );
};

export default NumberBoard;
