import React from 'react'
import { ListGroupItem } from 'react-bootstrap'
import { SectionSubtitleProps } from 'types/types'

function SectionSubtitle({ subtitle }: SectionSubtitleProps) {
    return (
        <ListGroupItem className="border-0">
            <h5 className='text-capitalize'><u>{subtitle}</u></h5>
        </ListGroupItem>
    )
}

export default SectionSubtitle
