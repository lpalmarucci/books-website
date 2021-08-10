import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function MenuDesktop(props) {
    return (
        <>
            {
                props.items.map((item) => (
                    <nav key={item.id}>
                        <Link to={item.url} className="clear-link">
                            <button className="bordered-button" style={{ opacity: 1 }}>
                                {item.displayName}
                            </button>
                        </Link>
                    </nav>
                ))
            }
        </>
    )
}

MenuDesktop.propTypes = {
    items: propTypes.arrayOf(propTypes.object).isRequired
}
