import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';

const useStyles = makeStyles((theme)=>({
    
    rowsty:{
            
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    //overflow-x: 'hidden',
    backgroundColor: theme.palette.background.paper,
    },
    
    imageList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
        '&:hover': {
            background: "#f00",
           // transform: scale(1.5),
          }
      },
      title: {
        color: '#ffffff',
      },
      titleBar: {
        background:
          'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
      },
}));


function Row(props) 
{
    const classes = useStyles();    
    console.log(props);
    let itemData=props.Data;
    console.log(itemData);

    return (
        <div className={classes.rowsty}>
            <h2>{props.RowTitle}</h2>
            <ImageList className={classes.imageList} cols={4}>
                {
                    itemData.map((item)=> (
                            <ImageListItem key={item.img} >
                                <img src={item.img}/>
                                <ImageListItemBar  title={item.title}
                                classes={{
                                    root: classes.titleBar,
                                    title: classes.title,
                                  }}
                                />
                            </ImageListItem>
                        )
                    )
                }
            </ImageList>

        </div>
    );
}

export default Row