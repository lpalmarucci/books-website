import React from 'react'
import spinner from '../images/spinner.svg'

export default function Loader() {
    return (
        <section className="container">
            <img className="loader" src={spinner} alt="Loading..." width="300" height="300" />
        </section>
    )
}
