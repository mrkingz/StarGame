import React, { Fragment, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Animated } from 'react-animated-css';

import utils from '../utils';

const StarsDisplay = props => (
  <Animated key={props.starsDisplayId} animationIn="zoomIn" animationOut="zoomOut">
    {
      utils.range(1, props.starsCount).map(num => (
        <Fragment key={num}>
          <FontAwesomeIcon className="star mx-3 my-2" icon={faStar} size="3x" />
          {(num % 3) === 0 ? <br /> : null}
        </Fragment>
      ))
    }
  </Animated>
);

export default StarsDisplay;
