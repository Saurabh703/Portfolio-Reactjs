import React from 'react';
import {
    Typography,
    Grid,
    Box,
    Avatar
} from "@material-ui/core";
import Typed from "react-typed";
import avatar from "../avatar.png";
import { makeStyles } from '@material-ui/core/styles';
 
//CSS Styles
const useStyles = makeStyles(theme=> ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1),
    },
    title: {
        color: "tomato"
    },
    subtitle: {
        color: "tan",
        marginBottom: "3rem"
    },
    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign:"center",
        zIndex: 1,
    }
}))
const Header = () => {
    const classes = useStyles();
    return (
        <Box className={classes.typedContainer}>
        <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="Saurabh Pilare" />
        </Grid>
            <Typography className={classes.title} variant="h4">
               <Typed strings={["Saurabh Pilare"]} typeSpeed={40} />
            </Typography>
            <br/>
            <Typography className={classes.subtitle} variant="h4">
               <Typed strings={["Web Design", "Wed Development"]} 
               typeSpeed={40}
               backSpeed={60}
               loop
             />
            </Typography>
        </Box>
    );
};

export default Header;
