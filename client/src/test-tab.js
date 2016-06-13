import { Tabs } from 'react-bootstrap';
import { Tab } from 'react-bootstrap';

class ControlledTabs extends React.Component{

  constructor(props) {
    super(props);
    this.state = { key: 1 };
  }

  handleSelect(selected) {
    this.setState({ key : selected })
  }

  render() {
    return (
      <div>
      <Tabs activeKey={this.state.key} onSelect={this.handleSelect.bind(this)} id="controlled-tab-example">
        <Tab eventKey={1} title="프로필">Tab 1 content</Tab>
        <Tab eventKey={2} title="나의예약">Tab 2 content</Tab>
        <Tab eventKey={3} title="수강이력">Tab 3 content</Tab>
        <Tab eventKey={4} title="코인구매이력">Tab 3 content</Tab>
      </Tabs>
      </div>
    );
  }
}

var mountNode = document.getElementById("app")
ReactDOM.render(<ControlledTabs/>, mountNode)
