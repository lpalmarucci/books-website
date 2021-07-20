import React from 'react'
import { Link } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'

export default function BookContainerHeader() {
    return (
        <header>
            <Link to={`/`} className="clear-link" style={{ color: 'white' }}>
                <button type="button" className="button goback-button">
                    <BiArrowBack className="goback-icon" />
                    <span>Return to books</span>
                </button>
            </Link>
        </header>
    )
}
