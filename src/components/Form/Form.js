import React, { Component } from 'react';
import Field from '../Field';
import './Form.css';
import image from './assets/bond_approve.jpg';

const data = {
  firstname: {
    value: 'james',
    empty: 'Нужно указать имя',
    error: 'Имя указано не верно'
  },
  lastname: {
    value: 'bond',
    empty: 'Нужно указать фамилию',
    error: 'Фамилия указана не верно'
  },
  password: {
    value: '007',
    empty: 'Нужно указать пароль',
    error: 'Пароль указан не верно'
  }
};

class Form extends Component {
  state = {
    firstname: '',
    lastname: '',
    password: '',
    errors: {},
    isValid: false
  };

  onChange = (event, fieldName) => {
    this.setState({
      [fieldName]: event.target.value,
      errors: {}
    });
  };

  validate = e => {
    e.preventDefault();
    let errors = {};
    Object.keys(data).forEach(key => {
      if (this.state[key] === '') {
        errors[key] = data[key].empty;
      } else if (this.state[key].toLowerCase() !== data[key].value) {
        errors[key] = data[key].error;
      }
      this.setState({ errors, isValid: Object.keys(errors).length === 0 });
    });
  };

  render() {
    if (!this.state.isValid) {
      return (
        <div className="app-container">
          <form className="form" onSubmit={this.validate}>
            <h1>Введите свои данные, агент</h1>
            <Field
              fieldName="firstname"
              fieldTitle="Имя"
              inputValue={this.state.firstname}
              error={this.state.errors.firstname}
              onChange={this.onChange}
            />
            <Field
              fieldName="lastname"
              fieldTitle="Фамилия"
              inputValue={this.state.lastname}
              error={this.state.errors.lastname}
              onChange={this.onChange}
            />
            <Field
              fieldName="password"
              fieldTitle="Пароль"
              inputValue={this.state.password}
              error={this.state.errors.password}
              onChange={this.onChange}
            />
            <div className="form__buttons">
              <input
                type="submit"
                className="button t-submit"
                value="Проверить"
              />
            </div>
          </form>
        </div>
      );
    } else {
      return (
        <div className="app-container">
          <img className="t-bond-image" src={image} alt="James Bond" />
        </div>
      );
    }
  }
}

export default Form;
