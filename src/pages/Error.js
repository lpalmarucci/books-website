import React from 'react'
import GoBackButton from '../components/GoBackButton'

export default function Error() {
    return (
        <div className="flex flex-container container" style={{ color: 'grey' }}>
            <GoBackButton destination={'/'} />
            <br />
            <br />
            <h1>:/</h1>
            <br />
            <h1>Oops, qualcosa è andato storto!</h1>
            <br />
            <h3>La pagina che stai cercando di visitare non è disponibile</h3>
        </div>
    )
}
