import React from 'react'
import {Link} from 'react-router-dom'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import {inject, observer} from 'mobx-react'
import { toJS} from "mobx"

@inject("store")
@observer
export default class extends React.Component {
    componentDidMount(){
        this.props.store.getNewsFromServer();
    }

    render(){
        const items = (toJS(this.props.store.news) === null ? [] : toJS(this.props.store.news));
        return(
            <div>
                <List component="nav">
                {
                    items.map((item, i) => (
                    <Link key={i} to={`/news/${i}`}>
                        <ListItem button>
                        <ListItemText primary={item.title} />
                        </ListItem>
                    </Link>
                    ))
                }
                </List>
            </div>
        )
    }
}
