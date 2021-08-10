import React from 'react'
import { Squash as Hamburger } from 'hamburger-react'
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group'
import propTypes from 'prop-types';

export default function MenuMobile(props) {


    const [
        isOpen,
        setIsOpen
    ] = React.useState(false);

    return (
        <nav className={`menu-mobile-container ${isOpen
            ? 'menu-mobile-container-open'
            : ''} `}>
            <Hamburger toggled={isOpen} toggle={setIsOpen} color="#35d77e" />
            {isOpen
                ? <CSSTransition in={isOpen} timeout={500} classNames="fadeIn">
                    <div className="menu-mobile-body">
                        {
                            props.items.map((item) => (
                                <nav key={item.id} onClick={() => setIsOpen(false)}>
                                    <Link to={item.url} className="clear-link">
                                        <button className="bordered-button" style={{ opacity: 1 }}>
                                            {item.displayName}
                                        </button>
                                    </Link>
                                </nav>
                            ))
                        }
                    </div>
                </CSSTransition>
                : ''}
        </nav>
    )
}

MenuMobile.propTypes = {
    items: propTypes.arrayOf(propTypes.object).isRequired
}