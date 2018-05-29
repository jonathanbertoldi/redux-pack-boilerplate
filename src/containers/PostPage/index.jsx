import React, { Component } from 'react';
import { Card } from 'antd';

import './style.less';
import FormAddPost from './AddPost';

class PostPage extends Component {
  state = {
    title: 'Título da postagem',
    content: 'Esse é o meu primeiro post',
    likes: 11,
  };
  render() {
    return (
      <div className="card-post">
        <Card>
          <FormAddPost />
        </Card>
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

export default PostPage;
