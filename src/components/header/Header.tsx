import { HeaderProps } from 'components/header/Header.types'
import React from 'react'

function Header({ header }: HeaderProps) {
    return (
        <h3 className='text-center text-capitalize mb-5'>
            <u>{header}</u>
        </h3>
    )
}

export default Header
