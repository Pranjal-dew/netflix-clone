import React from 'react'
import { Card, CardActionArea, CardContent, CardMedia, Container, makeStyles, Typography } from '@material-ui/core'
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import itemData from './data/itemData';
import Row from './Row.js';

const useStyles = makeStyles((theme) => ({
    root: {
        alignItems: "center",
        backgroundColor: theme.palette.background.paper,
        margin: 1,
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    media: {
        height: 300,
    },
    title_play: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    button: {
        // marginRight:theme.spacing(4),
        borderRadius: "5px",
        border: theme.palette.primary.main,
        alignItems: 'center',
        display:'flex',
        //padding: "20px",
        //backgroundColor:'#000000',
    }

}))

export default function Detail() {
    const classes = useStyles();

    return (
        <Container>
            <Item />
            <Row RowTitle="More Like This" Data={itemData} isLarge id="row-1" />
            <Row RowTitle="Popular" Data={itemData} id="row-2" />
        </Container>
    )
}

function Item(props) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardActionArea >
                <CardMedia className={classes.media} image='https://i.ytimg.com/vi/aSiDu3Ywi8E/maxresdefault.jpg' />
                <CardContent>
                    <div className={classes.title_play}>
                    <Typography gutterBottom variant="h5" component="h2">
                    FF9
                    </Typography>
                    <div className={classes.button}>
                    <PlayArrowRoundedIcon />
                    <Typography variant="button" >Play </Typography>
                    
                    </div>

                    </div>
                    <Typography variant="body1" color="textSecondary" component="p" >
                    WB
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
