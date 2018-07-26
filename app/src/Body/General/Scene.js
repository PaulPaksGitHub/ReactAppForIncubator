import React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';

export default class extends React.Component {
    render(){
        return(
            <div>
                <Paper elevation={4}>
                    <Typography variant="headline" component="h1">
                    Добро пожаловать на веб сайт!
                    </Typography>
                </Paper>
            </div>
        )
    }
}