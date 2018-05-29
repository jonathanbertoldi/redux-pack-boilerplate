import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input, Button, Form } from 'antd';
import '../style.less';

const { TextArea } = Input;
const FormItem = Form.Item;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some((field) => fieldsError[field]);
};
class AddPost extends Component {
  static propTypes = {
    form: PropTypes.object.isRequired,
  };
  state = {};

  render() {
    const { getFieldDecorator } = this.props.form;
    console.log(this.props);
    return (
      <div className="new-post">
        <Form>
          <FormItem>
            {getFieldDecorator('title', {
              rules: [{ required: true, message: 'Please input your title!' }],
            })(<Input placeholder="Título da postagem" />)}
          </FormItem>
          <FormItem>
            {getFieldDecorator('content', {
              rules: [
                { required: true, message: 'Please input your content!' },
              ],
            })(
              <TextArea
                className="content-post"
                placeholder="Conteúdo da postagem"
              />,
            )}
          </FormItem>
          <div className="btn-add">
            <FormItem>
              <Button type="primary">Publicar</Button>
            </FormItem>
          </div>
        </Form>
      </div>
    );
  }
}

const FormAddPost = Form.create()(AddPost);
export default FormAddPost;
