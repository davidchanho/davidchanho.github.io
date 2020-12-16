import React from 'react'
import { ListGroupItem } from 'react-bootstrap'
import { SectionItemProps } from 'types/types'

function SectionItem({ title, subtitle }: SectionItemProps) {
    return (
        <ListGroupItem className='border-0'>
            <h6 className='m-0'>
                {title}
            </h6>
            <small>
                {subtitle}
            </small>
        </ListGroupItem>
    )
}

export default SectionItem
