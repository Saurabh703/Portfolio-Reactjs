import React from 'react';
import SendIcon from "@material-ui/icons/Send";
import { Box, Grid, TextField, Typography, Button } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Navbar from './Navbar';

const useStyles = makeStyles(theme=>({
    form: {
        top: "50%",
        left: "50%",
        transform: "translate( -50%, -50%)",
        position: "absolute",
    },
    button: {
        marginTop: "1rem",
        color: "#f5503d",
        borderColor: "tomato"
    }
}));

const InputField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "tomato",
        },
        "& label": {
            color: "#020603",
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
            borderColor: "#020603",
            },
            "&:hover fieldset": {
            borderColor: "tomato",
            },
           "&.Mui-focused fieldset": {
            borderColor: "#020603"
           },
        },
    },
})(TextField);

const Contacts = () => {
    const classes = useStyles();

    return (
        <div>
           <Box component="div" style={{ background: "#e9f2f1", height: "100vh"}}>
           <Navbar/>
               <Grid container justify="center">
                   <Box component="form" className={classes.form}>
                     <Typography variant="h5" style={{
                         color: "tomato",
                         textAlign: "center",
                         textTransform: "uppercase",
                     }}>
                         hire or contact me...
                     </Typography>
                     <InputField 
                     fullWidth={true} 
                     label="Name" 
                     variant="outlined"
                     inputProps={{ style: { color: "white" } }} margin="dense"
                     size="medium"/>
                     <br/>
                     <InputField 
                     fullWidth={true} 
                     label="Email" 
                     variant="outlined"  
                     inputProps={{ style: { color: "white" } }} margin="dense"
                     size="medium"/>
                     <br/>
                     <InputField 
                     fullWidth={true} 
                     label="Company Name" 
                     variant="outlined"  
                     inputProps={{ style: { color: "white" } }} margin="dense"
                     size="medium"/>
                     <br/>
                     <Button className={classes.button} variant="outlined" fullWidth={true} endIcon={<SendIcon />}>
                         Contact Me
                     </Button>
                   </Box>
               </Grid>
           </Box>
        </div>
    )
};

export default Contacts;
