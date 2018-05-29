import React, { Component } from 'react';
import { Card } from 'antd';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import * as postsActions from './actions';
import reducer from './reducer';
import './style.less';
import FormAddPost from './AddPost';
import injectReducer from '../../utils/injectReducer';
import {
  makeSelectError,
  makeSelectPosts,
  makeSelectPostsLoading,
} from './selectors';

class PostPage extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    posts: PropTypes.object,
  };

  state = {
    title: 'oi',
    content: 'Esse é o meu primeiro post',
    likes: 11,
  };

  componentDidMount() {
    this.props.actions.loadPosts();
  }

  render() {
    const { posts } = this.props;
    console.log(posts);

    return (
      <div className="card-post">
        <Card>
          <FormAddPost />
        </Card>
        {/* {posts.items.map((post) => <span>{post}</span>)} */}
        <Card title={this.state.title} type="inner" className="publications">
          <p>{this.state.content}</p>
          <div className="content-likes">
            <button className="btn-like">Curtir</button>
            <span className="likes-quantity">{this.state.likes} curtidas</span>
          </div>
        </Card>
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

export default compose(withReducer, withConnect)(PostPage);
