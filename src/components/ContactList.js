import React from 'react';
import ContactCard from './ContactCard';

const ContactList = (props) => {
    
    const showContactList = props.contacts.map((contact) => {
        return(
             <ContactCard contact={contact} key={contact.id}/>
        );
    })
    return (
        <div className="ContactList">
            <h1>{showContactList}</h1>
        </div>
    )
}

export default ContactList;
