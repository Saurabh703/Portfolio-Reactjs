import React from 'react';
import { 
    Box, 
    Card, 
    CardActionArea, 
    CardActions, 
    CardContent, 
    CardMedia, 
    Grid, 
    Typography, 
    Button } from '@material-ui/core';
import Navbar from './Navbar';
import project1 from "../images/html-css-javascript-lg.jpg";
import { makeStyles } from '@material-ui/core/styles';
import project2 from "../images/javascript-fullstack.jpg";
import project3 from "../images/react-redux.jpg";
import project4 from "../images/mern-stack.jpg";

const useStyles = makeStyles({
    mainContainer: {
        background: "#e9f2f1",
        height: "100%"
    },
    cardContainer: {
        maxWidth: 345,
        margin: "5rem auto"
    }
});

const Portfolio = () => {
    const classes = useStyles();
    return (
        <div>
            <Box components="div" className={classes.mainContainer}>
                <Navbar />
                <Grid container justify="center" >
                    <Grid item xs={12} sm={8} md={6}>
                        <Card className={classes.cardContainer}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt="Project 1"
                                height="140"
                                image={project1}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5">
                                     Project 1
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </Typography>
                                </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Share
                                    </Button>
                                    <Button size="small" color="primary">
                                        Live Demo
                                    </Button>
                                </CardActions>
                        </Card>
                        </Grid>

                        {/* //Project 2 */}
                        <Grid item xs={12} sm={8} md={6}>
                        <Card className={classes.cardContainer}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt="Project 2"
                                height="140"
                                image={project2}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5">
                                     Project 2
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </Typography>
                                </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Share
                                    </Button>
                                    <Button size="small" color="primary">
                                        Live Demo
                                    </Button>
                                </CardActions>
                        </Card>
                    </Grid>
                    {/* Project 3 */}
                    <Grid item xs={12} sm={8} md={6}>
                        <Card className={classes.cardContainer}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt="Project 3"
                                height="140"
                                image={project3}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5">
                                     Project 3
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </Typography>
                                </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Share
                                    </Button>
                                    <Button size="small" color="primary">
                                        Live Demo
                                    </Button>
                                </CardActions>     
                             </Card>
                        </Grid>
                        {/* Project 4 */}
                        <Grid item xs={12} sm={8} md={6}>
                        <Card className={classes.cardContainer}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt="Project 4"
                                height="140"
                                image={project4}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5">
                                     Project 4
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </Typography>
                                </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Share
                                    </Button>
                                    <Button size="small" color="primary">
                                        Live Demo
                                    </Button>
                                </CardActions> 
                            </Card>
                        </Grid>
                </Grid>
            </Box>
        </div>
    )
};

export default Portfolio;
