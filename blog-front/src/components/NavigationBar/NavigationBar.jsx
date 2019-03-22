import React, { Component } from 'react';
import './NavigationBar.css'
import {withRouter} from "react-router-dom";
import Link from "../../containers/Link";

class NavigationBar extends Component {

    render() {

        return (
            <div className='header'>
                <div className='header-left'>
                    <ul>
                        <li>
                            <Link
                                className='header-link'
                                path='/'
                                text='Главная'
                            />
                        </li>
                        <li>
                            <Link
                                className='header-link'
                                path='/posts/newpost'
                                text='Новый пост'
                            />
                        </li>
                        <li>
                            <Link
                                className='header-link'
                                path='/about'
                                text='Обо мне'
                            />
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default withRouter(NavigationBar);