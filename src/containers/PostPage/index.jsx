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
    posts: PropTypes.array,
  };

  componentDidMount() {
    this.props.actions.loadPosts();
  }

  handleLike = async (post) => {
    const patchedPost = {
      ...post,
      likes: post.likes + 1,
    };
    // this.setState({
    //   likes: this.state.likes + 1,
    // });
    await this.props.actions.likePost(patchedPost);
    this.props.actions.loadPosts();
  };

  render() {
    const { posts } = this.props;
    return (
      <div className="card-post">
        <Card>
          <FormAddPost />
        </Card>
        {posts.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            type="inner"
            className="publications"
          >
            <p>{item.content}</p>
            <div className="content-likes">
              <button
                className="btn-like"
                onClick={() => this.handleLike(item)}
              >
                Curtir
              </button>
              <span className="likes-quantity">{item.likes} curtidas</span>
            </div>
          </Card>
        ))}
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
