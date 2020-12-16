import React from 'react'
import { SectionHeaderProps } from 'types/types'

function SectionHeader({ header }: SectionHeaderProps) {
    return (
        <h3 className='text-center mb-5'>
            <u>{header}</u>
        </h3>
    )
}

export default SectionHeader
