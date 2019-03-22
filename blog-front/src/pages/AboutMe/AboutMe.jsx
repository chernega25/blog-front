import React, { Component } from 'react';

import './AboutMe.css';
import {connect} from "react-redux";
import {getAbout} from "../../actions/getAbout";

class AboutMe extends Component {

  componentWillMount() {
    const {
      getAbout
    } = this.props;

    getAbout();
  }

  render() {
    const {
      about
    } = this.props;

    return (
      <div className='page_box'>
        <div className='about'>
          <div className='about_header'>
            {about.header}
          </div>
          <div className='about_text'>
            {about.text}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { about: state.about }
};

const mapDispatchToProps = {
  getAbout
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutMe);
