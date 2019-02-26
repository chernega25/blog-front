import React, { Component } from 'react';
import {withRouter} from "react-router-dom";

import './Post.css';

class Post extends Component {

  render() {
    const {
      post
    } = this.props;

    if (post) return (
        <div className='post'>
          <div className='post_header' onClick={() => this.props.history.push(`/posts/${post.postId}`)}>
            {post.postHeader}
          </div>
          <div className='post_text'>
            {post.postText}
          </div>
        </div>
      );
    else return (
        <div className='post'>
          Привет
        </div>
    )
  }
}

export default withRouter(Post);
