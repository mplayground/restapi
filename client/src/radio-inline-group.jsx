import React from 'react';
import ReactDOM from 'react-dom';

import { Radio } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';

class RadioButton extends React.Component{

  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    let {name, value, checked, label} = this.props;
    return (
      <Radio inline
        checked={checked}
        name={name}
        value={value}
        onChange={this.handleChange}>
        {label}
      </Radio>
    );
  }

  handleChange() {
    const {value, onChange} = this.props;
    onChange(value);
  }
}

export default class RadioButtonGroup extends React.Component{
  render() {
    let {choices, checkedValue, onChange} = this.props;

    let choiceItems = choices.map(choice => {
      let {value, label} = choice;
      let checked = value === checkedValue;

      return (
        <RadioButton
          key={`radio-button-${value}`}
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
}

RadioButtonGroup.defaultProps = { checkedValue: '' };
