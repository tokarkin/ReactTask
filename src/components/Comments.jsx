import React from "react";
import {Field, reduxForm} from "redux-form";
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
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
)
let Commnets = (props)=>{
    console.log(props);

    return(<div>
        <div >
            <form style={{width:'70%',}} >
                <Field
                    name="body"
                    component={renderTextField}
                    label="First Name"
                />
                <Button color="secondary" onClick={props.reset}>
                    Cancel
                </Button>
                <Button onClick={props.handleSubmit}  color="secondary" >
                    Create new comment
                </Button>
            </form>
            <ListItem button>
                <ListItemText primary={props.comments} />
            </ListItem>
        </div>
    </div>)
}

export default  reduxForm({
    form:'comments'
})(Commnets);
