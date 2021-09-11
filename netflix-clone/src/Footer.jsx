import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'


const useStyles = makeStyles((theme)=>({
footer:{
    backgroundColor:theme.palette.primary.main,
    padding:10,
    
},
text:{
    color:'#ffffff'
}
}))

export default function Footer() {
    const classes = useStyles()
    return (
        <footer className={classes.footer}>
            <Typography variant='subtitle2' align='center' color='textPrimary' className={classes.text}>
            © 2021 Netflix clone. All rights reserved.<br/> All Rights, all related channel and all related programming visuals and elements are the property of Netflix clone Inc.
            </Typography>
        </footer>
    )
}
