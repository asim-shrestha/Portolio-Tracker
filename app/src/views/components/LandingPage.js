import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
import LandingGraphic from './Draw/LandingGraphic';
import LandingPageContentBlock from './LandingPageContentBlock';

const useStyles = makeStyles((theme) => ({
    title: {
        fontWeight: "Bold"
    },
    diagram: {
        marginTop: theme.spacing(12),
    }
}));

const Home = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant="h1" color="primary" align="center" className={classes.title}>Welcome to Trendline. 👋</Typography>
            <Typography variant="h3" color="primary" align="center">A free investment-portfolio management tool</Typography>
            <Box className={classes.diagram} align="center">
                <LandingGraphic className={classes.diagram} />
                <LandingPageContentBlock
                    image={"https://images.unsplash.com/photo-1559589689-577aabd1db4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"}
                    text="Say bye to spreadsheets by quickly setting up your portfolio and tracking your investments."
                />
                <LandingPageContentBlock
                    image={"https://images.unsplash.com/photo-1529078155058-5d716f45d604?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80"}
                    text="Quickly add data through CSV import functionality."
                    textFirst
                />
                <LandingPageContentBlock
                    image={"https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"}
                    text="View real-time preformance metrics through the IEX Cloud API."
                />
            </Box>
        </div>
    );
}

export default Home
