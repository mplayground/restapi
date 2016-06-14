import React from 'react';
import ReactDOM from 'react-dom';

import { ButtonToolbar }from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import { Radio } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';

import RadioInlineGroup from './radio-inline-group.jsx';

class CoinTypeRadioButton extends React.Component{

  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
     let {count, price, name, value, checked, label} = this.props;
     return (
       <div className="row">
         <div className="col-md-3">
           {count}
         </div>
         <div className="col-md-3">
           {price}
         </div>
         <div className="col-md-3">
           <Radio checked={checked} onChange={this.handleChange}> {label} </Radio>
         </div>
       </div>
     );
   }

  handleChange() {
    let {value, count, price, onChange} = this.props;
    onChange({value, count, price});
  }
}

class CoinTypeRadioButtonGroup extends React.Component{
  render() {
    let {count, price, choices, checkedValue, onChange} = this.props;
    let choiceItems = choices.map(choice => {
      let {value, label, count, price} = choice;
      let checked = value === checkedValue;

      return (
        <CoinTypeRadioButton
          key={`radio-button-${value}`}
          count={count}
          price={price}
          label={label}
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
        />
      );
    });

    return (
      <div>
        <FormGroup>
          {choiceItems}
        </FormGroup>
      </div>
    );
  }
}

CoinTypeRadioButtonGroup.defaultProps = { checkedValue: '' };

class FinalPayInfo extends React.Component{

  render() {
    let {count, price} = this.props;
    return (
      <div className="row">
        <div className="col-md-12">
          <h4><p className="text-right text-warning">결제 토큰 갯수 : {count}</p></h4>
        </div>
        <div className="col-md-12">
          <h4><p className="text-right text-warning">결제 금액 : {price}</p></h4>
        </div>
      </div>
    );
  }
}

export default class CoinModal extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      showModal: false,
      payTypeCheckedValue: '1',
      coinTypeCheckedValue: '1',
      count:'50개',
      price:'55,000원'
    };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.coinTypeHandleChange = this.coinTypeHandleChange.bind(this);
    this.payTypeHandleChange = this.payTypeHandleChange.bind(this);
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  coinTypeHandleChange(value) {
    console.log(value);
    this.setState({
      coinTypeCheckedValue: value.value,
      count:value.count,
      price:value.price
    });
  }

  payTypeHandleChange(value) {
    console.log(value);
    this.setState({
      payTypeCheckedValue: value
    });
  }

  render() {
    let coinTypeChoices = [
      {value: '1', label: '', count:'50개', price:"55,000원"},
      {value: '2', label: '', count:'92개', price:"100,0000원"},
      {value: '3', label: '', count:'120개', price:"132,0000원"},
      {value: '4', label: '', count:'150개', price:"165,0000원"},
      {value: '5', label: '', count:'228개', price:"250,0000원"},
      {value: '6', label: '', count:'400개', price:"440,0000원"},
    ];

    let payTypeChoices = [
      {value: '1', label: '신용카드',},
      {value: '2', label: '휴대폰결제'},
      {value: '3', label: '계좌이체'}
    ];

    return (
      <div>
        <Button bsStyle="primary" onClick={this.open}> 코인구매 </Button>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>코인구매</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form role="form">
              <h4><span className="label label-info">코인선택</span></h4>
              <CoinTypeRadioButtonGroup
                name='coin_type'
                checkedValue={this.state.coinTypeCheckedValue}
                choices={coinTypeChoices}
                onChange={this.coinTypeHandleChange}
              />
              <h4><span className="label label-info">결제수단</span></h4>
              <RadioInlineGroup
                name='pay_type'
                checkedValue={this.state.payTypeCheckedValue}
                choices={payTypeChoices}
                onChange={this.payTypeHandleChange}
              />
              <h4><span className="label label-info">결제하기</span></h4>
              <FinalPayInfo
                count={this.state.count}
                price={this.state.price}
              />
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
