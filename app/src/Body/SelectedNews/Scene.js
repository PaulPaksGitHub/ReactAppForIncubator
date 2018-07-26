import {Link} from 'react-router-dom'
import React from 'react'
import Button from '@material-ui/core/Button'
import { toJS} from "mobx"
import {inject, observer} from "mobx-react"

@inject("store")
@observer

export default class extends React.Component{
    render(){
        const num = parseInt(this.props.match.params.number, 10);
        const news = (toJS(this.props.store.news) === null ? [] : toJS(this.props.store.news));
        console.log(news)

        return(
            <div>
                <h1>{news[num].title}</h1>
                <h1>{news[num].description}</h1>
                <Link to='/news' className="noch"><Button variant="text" color="inherit">Back</Button></Link>
            </div>
        )
    }
}