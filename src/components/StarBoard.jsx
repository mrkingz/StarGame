import React from 'react';

import StarsDisplay from './StarsDisplay';
import MessageDisplay from './MessageDisplay';
import constants from '../constants';

const { status } = constants;

const StarBoard = props => {

  const { gameStatus, starsCount, starsDisplayId } = props;

  return (
    <div className="star-board rounded bg-light border border-info mx-4 py-3">
      {
        gameStatus === status.playing
          ? <StarsDisplay starsCount={starsCount} starsDisplayId={starsDisplayId} />
          : <MessageDisplay gameStatus={gameStatus} result={props.result} />
      }
    </div>
  );
};

export default StarBoard;
