import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Menu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className="container menu-container">
                {this.props.items.map((item) => (
                    <nav key={item.id}>
                        <Link to={item.url} className="clear-link">
                            <button className="bordered-button" style={{ opacity: 1 }}>
                                {item.displayName}
                            </button>
                        </Link>
                    </nav>
                ))}
            </header>
        )
    }
}
