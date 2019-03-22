import React, { Component } from 'react';

import './Post.css';

class Post extends Component {

  render() {
    const {
      post
    } = this.props;

    if (post) return (
        <div className='post'>
            <div className='post_header'>
                {post.header}
            </div>
            <div className='post_text'>
                {post.text}
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

export default Post;
