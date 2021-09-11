import React from 'react'
import { Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core'
import Carousel from 'react-material-ui-carousel'
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';



const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: "center",
    backgroundColor: theme.palette.background.paper,
    margin: 1,
    marginBottom: theme.spacing(1),
  },
  media: {
    height: 300,
  },
  con: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
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
    //padding: "20px",
    //backgroundColor:'#000000',
  }


}))


function Banner(props) {

  let { Data } = props;
  console.log("This is the banner props", Data);
  const classes = useStyles();

  return (
    <div className={classes.con}>

      <Carousel
        indicators={false}
        stopAutoPlayOnHover={false}
        animation="slide"
        className={classes.corousel}
      >
        {
          Data.map((item, i) => (
            <Item key={i} item={item} />
          ))
        }
      </Carousel>

    </div>
  )
}

function Item(props) {
  let item = props.item;
  const classes = useStyles();
  return (

    <Card className={classes.root}>
      <CardActionArea >
        <CardMedia className={classes.media} image={item.img} />
        <CardContent>
          <div className={classes.title_play}>
            <Typography gutterBottom variant="h5" component="h2">
              {item.title}
            </Typography>

            <Typography variant="button" className={classes.button}>Play <PlayArrowRoundedIcon /></Typography>


          </div>
          <Typography variant="body1" color="textSecondary" component="p" >
            {item.studio}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" >
            {item.discription}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

  )
}

export default Banner
