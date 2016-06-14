import ReactDOM from 'react-dom';
import React from 'react';

import CommentsModal from './comments-modal.jsx';
import CoinModal from './coin-modal.jsx';

ReactDOM.render(
  <CommentsModal url="msg.json"/>,
  document.getElementById('comments-modal-div')
);

ReactDOM.render(
  <CoinModal />,
  document.getElementById('coin-modal-div')
);
