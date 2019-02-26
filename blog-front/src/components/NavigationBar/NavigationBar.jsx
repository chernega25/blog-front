import React, { Component } from 'react';
import './NavigationBar.css'
import {withRouter} from "react-router-dom";

class NavigationBar extends Component {

    render() {

        return (
            <div className='header'>
                <div className='header-left'>
                    <ul>
                        <li>
                            <div className='header-link' onClick={() => this.props.history.push('/')}>Главная</div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default withRouter(NavigationBar);