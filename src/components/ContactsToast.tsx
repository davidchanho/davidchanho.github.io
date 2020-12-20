import React from 'react'
import { Toast } from 'react-bootstrap'
import { MessageProps } from 'types/types'

function ContactsToast({ message }: MessageProps) {
    return (
        <Toast className='mx-auto'>
            <Toast.Body>{message}</Toast.Body>
        </Toast>
    )
}

export default ContactsToast
