(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactBootstrap = require('react-bootstrap');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import { CoinModal } from './CoinModal';
// import { MsgModal } from './MsgModal';

// ReactDOM.render(
//   <MsgModal url="msg.json"/>,
//   document.getElementById('msgModalDiv')
// );
// ReactDOM.render(
//   <CoinModal/>,
//   document.getElementById('coinModalDiv')
// );

var CommentsModalButton = function (_React$Component) {
  _inherits(CommentsModalButton, _React$Component);

  function CommentsModalButton(props) {
    _classCallCheck(this, CommentsModalButton);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CommentsModalButton).call(this, props));

    _this.state = { show: false };
    return _this;
  }

  _createClass(CommentsModalButton, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var close = function close() {
        return _this2.setState({ show: false });
      };
      return React.createElement(
        'div',
        null,
        React.createElement(
          _reactBootstrap.Button,
          {
            bsStyle: 'primary',
            onClick: function onClick() {
              return _this2.setState({ show: true });
            }
          },
          'Launch'
        ),
        React.createElement(
          _reactBootstrap.Modal,
          {
            show: this.state.show,
            onHide: close,
            container: this,
            'aria-labelledby': 'contained-modal-title'
          },
          React.createElement(
            _reactBootstrap.Modal.Header,
            { closeButton: true },
            React.createElement(
              _reactBootstrap.Modal.Title,
              { id: 'contained-modal-title' },
              'Contained Modal'
            )
          ),
          React.createElement(
            _reactBootstrap.Modal.Body,
            null,
            'Elit est explicabo ipsum eaque dolorem blanditiis doloribus sed id ipsam, beatae, rem fuga id earum? Inventore et facilis obcaecati.'
          ),
          React.createElement(
            _reactBootstrap.Modal.Footer,
            null,
            React.createElement(
              _reactBootstrap.Button,
              { onClick: close },
              'Close'
            )
          )
        )
      );
    }
  }]);

  return CommentsModalButton;
}(React.Component);

ReactDOM.render(React.createElement(CommentsModalButton, null), document.getElementById('commentsButtonModal'));

},{"react-bootstrap":"react-bootstrap"}]},{},[1]);
