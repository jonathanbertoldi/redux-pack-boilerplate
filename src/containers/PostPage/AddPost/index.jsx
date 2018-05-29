import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input, Button, Form } from 'antd';
import '../style.less';

const { TextArea } = Input;
const FormItem = Form.Item;

class AddPost extends Component {
  static propTypes = {
    form: PropTypes.object.isRequired,
  };
  state = {};
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('received  values of form: ', values);
      }
    });
  };

  handleRulesgetFieldDecorator = () => {
    const rules = [{ required: true, message: 'Por favor, preencha o campo.' }];
    return rules;
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const validateField = [
      { required: true, message: 'Por favor, preencha o campo.' },
    ];

    return (
      <div className="new-post">
        <Form onSubmit={this.handleSubmit}>
          <FormItem>
            {getFieldDecorator('title', {
              rules: validateField,
            })(<Input placeholder="Título da postagem" />)}
          </FormItem>
          <FormItem>
            {getFieldDecorator('content', {
              rules: validateField,
            })(
              <TextArea
                className="content-post"
                placeholder="Conteúdo da postagem"
              />,
            )}
          </FormItem>
          <div className="btn-add">
            <FormItem>
              <Button onClick={this.handleSubmit} type="primary">
                Publicar
              </Button>
            </FormItem>
          </div>
        </Form>
      </div>
    );
  }
}

const FormAddPost = Form.create()(AddPost);
export default FormAddPost;
