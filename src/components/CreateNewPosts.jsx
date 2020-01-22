import React from 'react';
import {Field, reduxForm, reset} from "redux-form";
import {NavLink} from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";


const renderTextField = ({
                             input,
                             label,
                             meta: { touched, error },
                             ...custom
                         }) => (
    <TextField
        color='secondary'
        autoFocus
        margin="dense"
        id="name"
        label="Your Task on this day"
        type="text"
        fullWidth
        {...input}
        {...custom}
    />
);

let CreateNewPost =(props)=>{
    let click =()=> {
         props.handleSubmit();
         props.reset();
    }
    return(
        <div>
            <form >
                <Field
                    name="title"
                    component={renderTextField}
                    label="First Name"
                />
                <Field
                    name="body"
                    component={renderTextField}
                    label="First Name"
                />
                <NavLink to='/'><Button color="secondary">
                    Cancel
                </Button>
                    <Button  color="secondary" onClick={click}>
                        Create new task
                    </Button>
                </NavLink>
            </form>
        </div>
    )
}

export default  reduxForm({
    form:'create-post'
})(CreateNewPost);