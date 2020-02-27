import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faStop } from '@fortawesome/free-solid-svg-icons';
import constants from '../constants';

const { status } = constants;

const ControlBoard = props => {
  const { gameStatus, togglePlayStatus } = props;

  const isPlaying = () => gameStatus === status.playing;

  return (
    <div className="row">
      <div className="col-12 mt-2">
        <button
          className={`btn btn-md control-btn ${isPlaying() ? 'btn-outline-info' : 'btn-info'}`}
          onClick={() => togglePlayStatus(isPlaying() ? status.pause : status.playing)}
        >
          <FontAwesomeIcon icon={isPlaying() ? faPause : faPlay} />
          {isPlaying() ? ' Pause' : ' Play' }
        </button>
        <button
          className="btn btn-danger control-btn"
          onClick={() => togglePlayStatus(status.stop)}
        >
          <FontAwesomeIcon icon={faStop} /> Stop
        </button>
      </div>
    </div>
  );
};

export default ControlBoard;
