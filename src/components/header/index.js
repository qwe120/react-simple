import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './index.css'
class Header extends Component {
    static defaultProps = {
        title:"这是标题",
        isShow:''
    }
    render() {
        const {title,isShow} = this.props;
        return (
            <header className="header p5">
                <span></span>
                <span className="title">{title}</span>
                  <div className={isShow ? 'show':'hide'}>  
                    <Link to="/registry">注册</Link>
                 </div> 
            </header>
        );
    }
}

export default Header;