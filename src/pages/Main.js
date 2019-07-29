import React, { Component } from 'react';

import './Main.css';

import logo from '../assets/dark/logo.svg';
import log_in from '../assets/dark/login_btn.svg';
import sign_up from '../assets/dark/sign_up_btn.svg';

class Main extends Component {
    render() {
        return (
            <div className="main">
                <header id="main-header">
                    <div className="header-content">
                        <img src={logo} alt="Culture Hack Network"/>
                        <div>
                            <a href="/login" className="btn" ><img src={log_in} alt="Log in"/></a>
                            <a href="/register" className="btn" ><img src={sign_up} alt="Sign up"/></a>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default Main;