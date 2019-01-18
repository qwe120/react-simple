import React, { Component } from 'react';
import './index.css'
class Layout extends Component {
    render() {
        return (
            <section className="section">
                {this.props.children}
            </section>
        );
    }
}

export default Layout;