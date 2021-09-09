import React from 'react'
import {  Button, Card, CardActionArea,  CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core'
import Carousel from 'react-material-ui-carousel'
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';



const useStyles = makeStyles((theme)=>({
  root: {
    alignItems:"center",
    backgroundColor:theme.palette.background.paper,
  },
  media: {
    height: 300,
  },
  con:{
    paddingTop:theme.spacing(2),
    paddingBottom:theme.spacing(2),
    background: ""
  },
  title_play:{
    display: 'flex',
    // paddingBottom:theme.spacing(2),

    justifyContent: 'space-between',
    // paddingInlineEnd:theme.spacing(2),
  },
  button:{
    // marginRight:theme.spacing(4),
  }


}))


function Banner(props) {

  let {Data} = props;
  console.log("This is the banner props",Data);
  const classes = useStyles();

  return (
    <div
    className={classes.con}
    
    >
    
    <Carousel 
      indicators ={false}
      stopAutoPlayOnHover = {false}
    >
      {
          Data.map((item,i)=>(
              <Item key={i} item={item}/>
          ))
      }
    </Carousel>
    
    </div>
  )
}

function Item(props){
  let item = props.item;
  const classes = useStyles();
  return(
    <CardActionArea >
      <Card className = {classes.root} gutterbottom="true" >  
        <CardMedia className={classes.media} image={item.img}/>
        <CardContent>
          <div className={classes.title_play}>
          <Typography gutterBottom variant="h5" component="h2">
            {item.title}
          </Typography>
          <Button variant="outlined" className={classes.button}>Play<PlayArrowRoundedIcon/> </Button>
          </div>
          <Typography variant="body1" color="textSecondary" component="p" >
          {item.studio}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" >
          {item.discription}
          </Typography>
        </CardContent>
        
      </Card>
    </CardActionArea>
  )
}

export default Banner
