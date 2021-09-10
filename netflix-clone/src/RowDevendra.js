import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';


const useStyles = props => makeStyles((theme) => {
  console.log("this is theme usestyles",props)
  return {
  
  row:{
    display:'flex',
    flexWrap: 'nowrap',
    backgroundColor:'#757ce8',
    maxHeight:theme.spacing(60),
    transition:'transform 450ms',
    overflowY: 'hidden',
    overflowX: 'scroll',
    overscrollBehavior:props.isMobile?'auto':'none',
    transform: 'translateZ(0)',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    /* hdjhfjkashdfkj */
  },
  root: {//card number
    
    margin:theme.spacing(2),
    backgroundColor:'#ff7961',
  },
  media: {
    height: 250,
    width: 250,
  },
  

}});

export default function RowDevendra({RowTitle, Data, isLarge=false,id}) {


  const isMobile = navigator.userAgentData.mobile;
  const classes = useStyles({isMobile})();

  const handleXScroll = (event)=>{
    const container = document.getElementById(id)
    const scrollPosition =  container.scrollLeft
    container.scrollTo({top:0, left:scrollPosition+2.5*event.deltaY,behavior:'smooth'})
  } 

  return (
    
      <div className={classes.row} onWheel={ handleXScroll} id={id}>
        {Data.map((item,index) => (
          <div className={classes.root} key={index}>
          <Card >
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={item.img}
              title={item.title}
            />
            <CardContent>
              <Typography gutterBottom>
                {item.title}
              </Typography>
            </CardContent>
          </CardActionArea>
          
        </Card>
        </div>
        ))}
      </div>

  );
}


