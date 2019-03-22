import React, { Component } from 'react';
import {withRouter} from "react-router-dom";

class Link extends Component {
    render() {
        const {
            text,
            path,
            className
        } = this.props;

        return (
            <div
                onClick={() => this.props.history.push(path)}
                className={className}
            >
                {text}
            </div>
        );
    }
}

export default withRouter(Link);