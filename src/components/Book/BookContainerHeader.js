import React from 'react'
import GoBackButton from '../GoBackButton'

export default function BookContainerHeader(props) {

    console.log(props.drawGoBack)

    return (
        <header>
            {props.drawGoBack
                ? <GoBackButton destination={'/'} />
                : ''}

        </header>
    )
}
