import React from "react";
import Button from '@material-ui/core/Button';

import "./AddContact.css";

const AddContact = () => {
        return(
            <div className="user__details">
                <div className="container">
                    <h1>Add Contact</h1>
                    <form className="form">
                        <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name" />
                        </div>
                        <div className="field">
                        <label>E-Mail</label>
                        <input type="text" name="email" placeholder="E-Mail" />
                        </div>
                        <Button variant="contained" color="secondary">
                        Add Contact
                        </Button>
                    </form>
                </div>
            </div>
        );
    }

export default AddContact;