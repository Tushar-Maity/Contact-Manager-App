import React from 'react';

const ContactCard = ({ id, name, email }) => {

    return(
        <div className="contact-list">
            <div className="head">{name}</div>
             <div>{email}</div>
        </div>
    );
}

export default ContactCard;