import CoinModal from './CoinModal';
import MsgModal from './MsgModal';

ReactDOM.render(
  <MsgModal url="msg.json"/>,
  document.getElementById('msgModalDiv')
);

ReactDOM.render(
  <CoinModal/>,
  document.getElementById('coinModalDiv')
);
