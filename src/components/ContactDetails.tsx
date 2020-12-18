import { data } from 'model/data';
import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import styled from 'styled-components';

const ContactDetailsContainer = styled(ListGroup)`
 .list-group-item {
    border: none;
    background-color: inherit;
 }
`;

function ContactDetails() {
    const { name, address, city, state, zipcode, phone, email } = data.about
    return (
        <ContactDetailsContainer>
            <ListGroupItem className='text-capitalize'>{name}</ListGroupItem>
            <ListGroupItem>{address}</ListGroupItem>
            <ListGroupItem>{city}, {state}, {zipcode}</ListGroupItem>
            <ListGroupItem>{phone}</ListGroupItem>
            <ListGroupItem>{email}</ListGroupItem>
        </ContactDetailsContainer>
    )
}

export default ContactDetails
