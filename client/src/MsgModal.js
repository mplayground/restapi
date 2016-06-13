import { Table } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

class MsgTable extends React.Component{

  constructor(props){
    super(props);
    this.state = { data:[] }
  }

  loadCommentsFromServer(){
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      error: function(){
        console.log("error")
      },
      success: function(comments) {
        this.setState({ data: comments });
      }.bind(this)
    });
  }

  componentDidMount() {
    this.loadCommentsFromServer();
  }

  render() {
    return(
      <div>
        <MyTable result={this.state.data}/>
      </div>
    );
  }
}

class MyTable extends React.Component{

  render(){
    var tableRow = this.props.result.map(function(result,index){
      return <TableRow key={index} row={ result } />
    });

    return(
      <Table striped bordered condensed hover>
        <thead className="thead-default" align="center">
          <tr>
            <th>날짜</th>
            <th>선생님</th>
            <th>메시지</th>
          </tr>
        </thead>
        <tbody align="center">
          {tableRow}
        </tbody>
      </Table>
    );
  }
}

class TableRow extends React.Component{
  render(){
      var row = this.props.row;
      return(
        <tr>
          <td>{row.date}</td>
          <td>{row.teacher}</td>
          <td>{row.msg}</td>
        </tr>
      );
  }
}

export class MsgModal extends React.Component{

  constructor(props){
    super(props)
    console.log('MsgModal ' + this.props.show);
  }

  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>쪽지</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        </Modal.Body>
      </Modal>
    );
  }
}

MsgModal.propTypes = { showModal: React.PropTypes.bool };
