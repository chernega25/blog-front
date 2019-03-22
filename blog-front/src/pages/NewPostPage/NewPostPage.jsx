import React, { Component } from 'react';

import './NewPostPage.css';
import Post from "../../components/Post/Post.jsx";
import {connect} from "react-redux";
import {newPost} from "../../actions/newPost";
import {withRouter} from "react-router-dom";

class NewPostPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      header: '',
      text: ''
    };
  }
  onChange(name) {
    return event => {
      this.setState({ [name] : event.target.value });
    };
  };

  // componentWillMount() {}

  render() {
    const {
      header,
      text
    } = this.state;

    const {
      newPost
    } = this.props;

    return (
      <div className='page_box'>
        <form>
          <Post post={{
            header: <input
                onChange={this.onChange('header')}
                placeholder='Заголовок'
                value={header}
            />,
            text: <textarea
                onChange={this.onChange('text')}
                placeholder='Текст'
                value={text}
            />
          }}/>
          <button
              type='button'
              onClick={
                () => {
                  newPost({header, text})
                      .then(id => this.props.history.push(`/posts/${id}`));
                }
              }
          >
            Создать
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { postId: state.postId }
};

const mapDispatchToProps = {
  newPost
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NewPostPage));
