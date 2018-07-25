import React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';

const General = () => {
  return(
    <div>
      <Paper elevation={4}>
        <Typography variant="headline" component="h1">
          Добро пожаловать на веб сайт!
        </Typography>

        <Typography component="p">
          <p>Для грфического оформления использовалась библиотака Material-UI.</p>
          <p>Создано при помощи React JS.</p>
        </Typography>
      </Paper>
    </div>
  )
}
export default General;
