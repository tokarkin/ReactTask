import React from "react";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/styles";
import CreateIcon from '@material-ui/icons/Create';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import CloseIcon from '@material-ui/icons/Close';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {NavLink} from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {Field, reduxForm} from "redux-form";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Commnets from "./Comments";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    heading: {

        flexBasis: '33.33%',
        flexShrink: 0,
    },

}));





let ListOfPosts =(props)=>{
    const classes = useStyles();

    let edit =()=>{
        props.initialize(props.post);

    }
    let kik=()=>{
        props.deletePost(props.post)
    }
    let addCommnets=()=>{
        props.getComments(props.post.id);
        if(props.comments !== undefined){

        }
    }

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    let onSubmit=(formData)=>{
        console.log(formData ,props.post.id)
    }
    console.log(props.comments)

    return(

        <div className={classes.root}>
            <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <ExpansionPanelSummary
                    onClick={addCommnets}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <div style={{padding:'20px', display:'flex', flexDiraction:'column'}}>
                        <CloseIcon onClick={kik} />
                        <NavLink to ={'/edit/'+props.post.id}>
                            <CreateIcon onClick={edit}/>
                        </NavLink>
                    </div>

                    <Typography className={classes.heading}> {props.post.title}</Typography>
                    <Typography > {props.post.body}</Typography>
                </ExpansionPanelSummary>
                {props.comments !== undefined ?  props.comments.comments.map(el=> <Commnets key ={el.id}  id ={el.id} comments={el.body} post={props.post} onSubmit={onSubmit} addCommnets={addCommnets}/>):
                <div></div>}
            </ExpansionPanel>

        </div>
    )
}

export default  (ListOfPosts);




