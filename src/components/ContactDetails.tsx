import { data } from 'model/data';
import React from 'react';
import { ListGroupItem } from 'react-bootstrap';
import { ContactDetailsContainer } from 'styles/styles';

function ContactDetails() {
    const { name, address, city, state, zipcode, phone, email } = data.about
    
    return (
        <ContactDetailsContainer>
            <h3>Contact Details</h3>
            <ListGroupItem className='text-capitalize'>{name}</ListGroupItem>
            <ListGroupItem>{address}</ListGroupItem>
            <ListGroupItem>{city}, {state}, {zipcode}</ListGroupItem>
            <ListGroupItem>{phone}</ListGroupItem>
            <ListGroupItem>{email}</ListGroupItem>
        </ContactDetailsContainer>
    )
}

export default ContactDetails
