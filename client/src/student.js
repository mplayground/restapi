import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
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

class CommentsModalButton extends React.Component{
  constructor(props) {
    super(props);
    this.state = { show: false };
  }

  render() {
    let close = () => this.setState({ show: false});
    return (
      <div>
        <Button
          bsStyle="primary"
          onClick={() => this.setState({ show: true})}
        >
          Launch
        </Button>

        <Modal
          show={this.state.show}
          onHide={close}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">Contained Modal</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Elit est explicabo ipsum eaque dolorem blanditiis doloribus sed id ipsam, beatae, rem fuga id earum? Inventore et facilis obcaecati.
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

ReactDOM.render(
  <CommentsModalButton/>,
  document.getElementById('commentsButtonModal')
);
