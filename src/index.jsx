import React from 'react';
import ReactDom from 'react-dom';
import '../public/assets/css/styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../public/assets/css/animate.css';

import GameBoard from './components/GameBoard';

ReactDom.render(<GameBoard />, document.getElementById('app'));
