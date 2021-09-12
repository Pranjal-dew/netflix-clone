import { Container, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    root: {

    }

}))

function Login() {
    const classes = useStyles;
    return (
        <Container>
            <h2>
                This is a login page.
            </h2>
        </Container>
    )
}

export default Login
