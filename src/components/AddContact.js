import React, { useState } from "react";
import Button from '@material-ui/core/Button';

import "./AddContact.css";

const AddContact = () => {


    const [enteredName, setEnteredName] = useState('');
    
    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    }
    
    // const emailChangeHandler = (e) => {
    //     console.log(e.traget.value);
    // }
        return(
            <div className="user__details">
                <div className="container">
                    <h1>Add Contact</h1>
                    <form className="form">

                        <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name" value={enteredName} onChange={nameChangeHandler}/>
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