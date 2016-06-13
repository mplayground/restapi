import React from 'react';
import ReactDOM from 'react-dom';

import { ButtonToolbar }from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { Table } from 'react-bootstrap';

class CommentsTable extends React.Component{

  constructor(props){
    super(props);
    this.state = {data:[]}
  }

  loadCommentsFromServer(){
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      error: function(){
        console.log("error")
      },
      success: function(data) {
        this.setState({data: data});
      }.bind(this)
    });
  }

  componentDidMount(){
    this.loadCommentsFromServer();
  }

  render() {
    let tableRows = this.state.data.map(function(row,index){
     return <TableRow key={index} row={ row } />
    });

    return(
      <Table responsive>
        <thead className="thead-default" align="center">
          <tr>
            <th>날짜</th>
            <th>선생님</th>
            <th>메시지</th>
          </tr>
        </thead>
        <tbody align="center">
          {tableRows}
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

export default class CommentsModal extends React.Component{

  constructor(props){
    super(props)
    this.state = {showModal: false};
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
    return (
      <div>
        <Button bsStyle="primary" onClick={this.open}> 1/4 </Button>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>쪽지</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <CommentsTable url={this.props.url} />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
