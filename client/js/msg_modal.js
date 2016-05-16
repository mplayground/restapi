var MsgTable = React.createClass({
  getInitialState: function () {
      return {
          data: []
      };
  },
  componentDidMount: function() {
    $.ajax({
      url: 'msg.json',
      dataType: 'json',
      error: function(){
        console.log("error")
      },
      success: function(data) {
        this.setState({data: data});
      }.bind(this)
    });
  },
  render: function() {
    return(
      <div>
        <Table result={this.state.data}/>
      </div>
    );
  }
});

var Table = React.createClass({
  render:function(){
    var result = this.props.result.map(function(result,index){
      return <TableRow key={index} row={ result } />
    });
    return(
      <div className="table-responsive">
      <table className="table table-striped">
        <thead className="thead-default" align="center">
          <tr>
            <th>날짜</th>
            <th>선생님</th>
            <th>메시지</th>
          </tr>
        </thead>
        <tbody align="center">
          {result}
        </tbody>
      </table>
      </div>
    );
  }
});

var TableRow = React.createClass({
    render:function(){
        var row = this.props.row;
        return(
          <tr>
            <td>{row.date}</td>
            <td>{row.teacher}</td>
            <td>{row.msg}</td>
          </tr>
        );
    }
});

var MsgModal = React.createClass({
  render: function() {
    return (
      <div id="msgModal" name="msgModal" className="modal fade" role="dialog">
        <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal">&times;</button>
            <h4 className="modal-title">쪽지</h4>
          </div>
          <div className="modal-body">
            <MsgTable/>
          </div>
        </div>
        </div>
      </div>
    );
  }
});

ReactDOM.render(
  <MsgModal/>,
  document.getElementById('msgModalDiv')
);
