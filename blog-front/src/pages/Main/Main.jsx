import React, { Component } from 'react';
import './Main.css';
import {getPostList} from "../../actions/getPostList";
import {connect} from "react-redux";

import Post from "../../components/Post/Post.jsx";

class Main extends Component {

  componentWillMount() {
    const {
      getPostList
    } = this.props;

    getPostList();
  }

  render() {
    const {
      postList
    } = this.props;
    console.log(postList);

    return (
      <div className='main_page'>
        {postList && postList.map(post => (
              <div className='page_box' onClick={() => this.props.history.push(`/posts/${post.id}`)}>
                <Post post={post}/>
              </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { postList: state.postList.postList }
};

const mapDispatchToProps = {
  getPostList
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
