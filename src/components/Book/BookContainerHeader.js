import React from 'react'
import GoBackButton from '../GoBackButton'

export default function BookContainerHeader() {
    return (
        <header>
            <GoBackButton destination={'/'} />
        </header>
    )
}
