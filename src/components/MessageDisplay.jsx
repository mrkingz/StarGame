import React from 'react';
import reactHtmlParser from 'react-html-parser';

import constants from '../constants';

const { status } = constants;

const MessageDisplay = props => {

  const color = {
    [status.won]: { color: 'green' },
    [status.timeout]: { color: 'red' }
  };

  const messages = {
    [status.won]: 'Game won! <br /> <small>Press play to restart</small>',
    [status.timeout]: 'Game over! <br /> <small>Press play to replay</small>',
    [status.pause]: 'Game paused <br /> <small>Press play to continue</small>',
    [status.stop]: 'Press play to start'
  };

  return (
    <div className="mt-4 pt-2 px-3">
      <h3 style={color[props.gameStatus]}>
        {reactHtmlParser(messages[props.gameStatus])}
      </h3>
    </div>
  );
};

export default MessageDisplay;
