import React from 'react';
import './Field.css';

const Field = ({ fieldTitle, fieldName, inputValue, error, onChange }) => {
  return (
    <p className="field">
      <label htmlFor={fieldName} className="field__label">
        <span className="field-label">{fieldTitle}</span>
      </label>
      <input
        type={fieldName === 'password' ? 'password' : 'text'}
        name={fieldName}
        value={inputValue}
        className={`field__input field-input t-input-${fieldName}`}
        onChange={e => onChange(e, fieldName)}
      />
      <span className={`field__error field-error t-error-${fieldName}`}>
        {error && error.length > 0 && error}
      </span>
    </p>
  );
};

export default Field;
