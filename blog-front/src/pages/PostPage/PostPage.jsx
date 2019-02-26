import React, { Component } from 'react';

import './PostPage.css';
import Post from "../../components/Post/Post.jsx";
import {connect} from "react-redux";
import {getPost} from "../../actions/getPost";

class PostPage extends Component {

  componentWillMount() {
    const {
      getPost,
      match
    } = this.props;

    getPost(match.params.postId);
  }

  render() {
    const {
      post
    } = this.props;

    return (
      <div className='page_box'>
        <Post post={post}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { post: state.post }
};

const mapDispatchToProps = {
  getPost
};

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
