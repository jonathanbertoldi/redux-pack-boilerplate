import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import { isEmpty } from 'lodash';
import { Form, Icon, Input, Button } from 'antd';

import { postLogin } from '../App/actions';
const FormItem = Form.Item;

class Login extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    global: PropTypes.object.isRequired,
    location: PropTypes.object,
    getFieldDecorator: PropTypes.object,
    form: PropTypes.object,
  };

  state = {
    redirectToReferrer: false,
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    await this.props.form.validateFields(async (err, values) => {
      if (!err) {
        const { emailField, passwordField } = values;
        await this.props.actions.postLogin({
          email: emailField,
          password: passwordField,
        });
        if (!isEmpty(this.props.global.user))
          await this.setState({ redirectToReferrer: true });
      }
    });
  };

  render() {
    const { redirectToReferrer } = this.state;
    const { getFieldDecorator } = this.props.form;

    const { from } = this.props.location.state || {
      from: { pathname: '/home' },
    };

    if (redirectToReferrer) return <Redirect to={from} />;

    return (
      <div>
        <Form className="login-form" onSubmit={this.handleSubmit}>
          <FormItem>
            {getFieldDecorator('emailField', {
              rules: [{ required: true, message: 'Por favor insira o email!' }],
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="Email"
              />,
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('passwordField', {
              rules: [
                { required: true, message: 'Por favor, insira a senha!' },
              ],
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                type="password"
                placeholder="Password"
              />,
            )}
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              onClick={this.handleLogin}
            >
              Logar
            </Button>
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              onClick={this.handleLogin}
            >
              Cadastre-se
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = ({ global }) => ({ global });

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ postLogin }, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const WrappedNormalLoginForm = Form.create()(Login);

export default compose(withConnect)(WrappedNormalLoginForm);
