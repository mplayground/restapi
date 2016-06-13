import RadioButtonGroup from './RadioButtonGroup';

const {PropTypes} = React;

const CoinTypeRadioButton = React.createClass({
  render: function() {
    const {count, price, name, value, checked, label} = this.props;
    return (
      <div className="row">
        <div className="col-md-3">
          {count}
        </div>
        <div className="col-md-3">
          {price}
        </div>
        <div className="col-md-3">
          <label>
            <input
              type='radio'
              name={name}
              value={value}
              checked={checked}
              onChange={this.handleChange}
            />
            {label}
          </label>
        </div>
        <div className="row omb_row-sm-offset-3 omb_loginOr">
          <div className="col-xs-12 col-sm-6">
          </div>
        </div>
      </div>
    );
  },

  handleChange: function() {
    const {value, count, price, onChange} = this.props;
    onChange({value, count, price});
  }
});

const CoinTypeRadioButtonGroup = React.createClass({
  propTypes: {
    count: PropTypes.string,
    price: PropTypes.string,
    name: PropTypes.string,
    checkedValue: PropTypes.string,
    choices: PropTypes.array,
    onChange: PropTypes.func,
  },

  getDefaultProps: function() {
    return {
      checkedValue: ''
    };
  },

  render: function() {
    const {count, price, choices, checkedValue, onChange} = this.props;

    const choiceItems = choices.map(choice => {
      const {value, label, count, price} = choice;
      const checked = value === checkedValue;

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
        {choiceItems}
      </div>
    );
  }
});

const FinalPayInfo = React.createClass({
  render: function() {
    const {count, price} = this.props;
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
});

var CoinModal = React.createClass({
  getInitialState: function() {
    return {
      payTypeCheckedValue: '1',
      coinTypeCheckedValue: '1',
      count:'50개',
      price:'55,000원'
    };
  },
  render: function() {
    const {name} = this.props;
    const {payTypeCheckedValue, coinTypeCheckedValue} = this.state;
    const payTypeChoices = [
      {value: '1', label: '신용카드',},
      {value: '2', label: '휴대폰결제'},
      {value: '3', label: '계좌이체'}
    ];
    const coinTypeChoices = [
      {value: '1', label: '', count:'50개', price:"55,000원"},
      {value: '2', label: '', count:'92개', price:"100,0000원"},
      {value: '3', label: '', count:'120개', price:"132,0000원"},
      {value: '4', label: '', count:'150개', price:"165,0000원"},
      {value: '5', label: '', count:'228개', price:"250,0000원"},
      {value: '6', label: '', count:'400개', price:"440,0000원"},
    ];

    return (
      <div id="buyCoinModal" name="buyCoinModal" className="modal fade" role="dialog">
          <div className="modal-dialog">
          <div className="modal-content">
              <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title">코인구매</h4>
              </div>
              <div className="modal-body">
              <form role="form">
                <h4><span className="label label-info">코인선택</span></h4>
                <CoinTypeRadioButtonGroup
                  name='coin_type'
                  checkedValue={coinTypeCheckedValue}
                  choices={coinTypeChoices}
                  onChange={this.coinTypeHandleChange}
                />
                <span className="help-block"></span>
                <h4><span className="label label-info">결제수단</span></h4>
                <RadioButtonGroup
                  name='pay_type'
                  checkedValue={payTypeCheckedValue}
                  choices={payTypeChoices}
                  onChange={this.payTypeHandleChange}
                />
                <span className="help-block"></span>
                <h4><span className="label label-info">결제하기</span></h4>
                <FinalPayInfo
                  count={this.state.count}
                  price={this.state.price}
                />
                <div className="row">
                  <div className="form-group">
                    <label className="col-md-4 control-label" for="singlebutton"></label>
                    <div className="col-md-4">
                      <button id="singlebutton" name="singlebutton" className="btn btn-primary center-block save-btn-with">결제하기
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              </div>
          </div>
          </div>
      </div>
    );
  },
  payTypeHandleChange: function(value) {
    this.setState({
      payTypeCheckedValue: value
    });
  },
  coinTypeHandleChange: function(value) {
    console.log(value);
    this.setState({
      coinTypeCheckedValue: value.value,
      count:value.count,
      price:value.price
    });
  }
});

export default CoinModal
