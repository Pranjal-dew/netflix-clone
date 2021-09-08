import React from 'react'
import {  Card, CardActionArea,  CardContent, CardMedia, Container, makeStyles, Typography } from '@material-ui/core'
import Carousel from 'react-material-ui-carousel'



const useStyles = makeStyles((theme)=>({
  root: {
    alignItems:"center",
  },
  media: {
    height: 300,
  },
  con:{
    paddingTop:theme.spacing(2),
    paddingBottom:theme.spacing(2),
    background: ""
  }

}))


function Banner(props) {

  let data = props.Data;
  console.log("This is the banner props",data);
  const classes = useStyles();

  return (
    <Container
    disableGutters={true}
    className={classes.con}
    
    >
    
    <Carousel 
      indicators ={false}
      stopAutoPlayOnHover = {false}
    >
      {
          data.map((item,i)=>(
              <Item key={i} item={item}/>
          ))
      }
    </Carousel>
    
    </Container>
  )
}

function Item(props){
  let item = props.item;
  const classes = useStyles();
  console.log(item)
  return(
    <CardActionArea >
      <Card className = {classes.root} gutterBottom >  
        <CardMedia className={classes.media} image={item.img}/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {item.title}
          </Typography>
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
