import React from 'react';
import ReactDOM from 'react-dom';

import Hello from './hello.jsx';
import ButtonsInstance from './react-button.jsx';
import ReactModal from './react-modal.jsx';

ReactDOM.render(<Hello/>, document.getElementById('hello'));

ReactDOM.render(<ButtonsInstance/>, document.getElementById('react-button'));
ReactDOM.render(<ReactModal/>, document.getElementById('react-modal'));
