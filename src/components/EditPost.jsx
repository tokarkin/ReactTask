import React from 'react';
import Button from "@material-ui/core/Button";
import {Field, reduxForm} from "redux-form";
import TextField from "@material-ui/core/TextField";
import {NavLink} from "react-router-dom";




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
)

let EditPost= (props)=>{
   let click =()=>{
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
                           Close
                       </Button>
                        <Button  color="secondary" onClick={click}>
                           Edit task
                        </Button>
                       </NavLink>
            </form>
        </div>
    )
}
export default  reduxForm({
    form:'edit-post'
})(EditPost);


