import React, { PureComponent } from 'react';
import './Field.css';

class Field extends PureComponent {
  render() {
    return (
      <p className="field">
        <label htmlFor={this.props.fieldName} className="field__label">
          <span className="field-label">{this.props.fieldTitle}</span>
        </label>
        <input
          type={this.props.fieldName === 'password' ? 'password' : 'text'}
          name={this.props.fieldName}
          value={this.props.inputValue}
          className={`field__input field-input t-input-${this.props.fieldName}`}
          onChange={e => this.props.onChange(e, this.props.fieldName)}
        />
        <span
          className={`field__error field-error t-error-${this.props.fieldName}`}
        >
          {this.props.error && this.props.error.length > 0 && this.props.error}
        </span>
      </p>
    );
  }
}

export default Field;
