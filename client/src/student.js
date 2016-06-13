import ReactDOM from 'react-dom';
import React from 'react';

import CommentsModal from './comments-modal.jsx';

ReactDOM.render(
  <CommentsModal url="msg.json"/>,
  document.getElementById('comments_modal_div')
);
