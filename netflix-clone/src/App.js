import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    backgroundColor: theme.palette.background.paper,
    maxHeight:theme.spacing(30),
    paddingTop:theme.spacing(4),
    paddingBottom:theme.spacing(4),
    //padding:theme.spacing(2),
  },

  imageList: {
    flexWrap: 'nowrap',
    
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    //  '&:overflow-x': 'scroll',
    //  '&:overflow-y': 'hidden',
    transform: 'translateZ(0)',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    '&:overflow-y': 'hidden',
    '&:overflow-x': 'scroll',

  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },

}));

export default function Row({RowTitle, Data, isLarge=false}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImageList className={classes.imageList} cols={2.5}>
        {Data.map((item) => (
          <ImageListItem key={item.img}>
            <img src={item.img} alt={item.title} key={item.id}/>
            <ImageListItemBar
              title={item.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
