import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({

  row: {
    display: 'flex',
    flexWrap: 'nowrap',
    // backgroundColor:'#757ce8',
    overflowY: 'hidden',
    overflowX: 'scroll',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    /* hdjhfjkashdfkj */
  },
  root: {//card number

    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(1),
    // backgroundColor:'#ff7961',
  },
  media: {
    height: 120,
    width: 200,
  },
  mediaLarge: {
    height: 200,
    width: 150,
  },

}));

export default function Row({ RowTitle, Data, isLarge = false, id }) {
  const classes = useStyles();

  return (

    <div>
      <Typography variant="h5" gutterBottom>{RowTitle}</Typography>
      <div className={classes.row} id={id}>
        {Data.map((item, index) => (
          <div className={classes.root} key={index}>
            <Card >
              <CardActionArea>
                <CardMedia
                  className={isLarge ? classes.mediaLarge : classes.media}
                  image={item.img}
                  title={item.title}
                />
                <CardContent>
                  <Typography>
                    {item.title}
                  </Typography>
                </CardContent>
              </CardActionArea>

            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}


