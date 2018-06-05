import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import { Input, Button, Form } from 'antd';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectError,
  makeSelectPosts,
  makeSelectPostsLoading,
} from '../selectors';

import * as postsActions from '../actions';
import reducer from '../reducer';
import injectReducer from '../../../utils/injectReducer';
import '../style.less';

const { TextArea } = Input;
const FormItem = Form.Item;

class AddPost extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,
  };
  state = {};

  componentDidMount() {
    this.props.actions.loadPosts();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      const newPost = { ...values, likes: 0 };
      this.props.actions.addPost(newPost).then(() => {
        this.props.actions.loadPosts();
      });
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

const mapStateToProps = createStructuredSelector({
  error: makeSelectError(),
  posts: makeSelectPosts(),
  loading: makeSelectPostsLoading(),
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ ...postsActions }, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'posts', reducer });

const FormAddPost = Form.create()(AddPost);
export default compose(withReducer, withConnect)(FormAddPost);
