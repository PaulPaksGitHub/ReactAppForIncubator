import {observable, action} from 'mobx'
import axios from 'axios'
import {toJS} from 'mobx'

class Store {
    @observable isUserLogged;
    @observable news;

    constructor(){
        this.isUserLogged = false;
        this.news = null;
    }
    
    @action login(){
        this.isUserLogged = !this.isUserLogged;
    }

    @action getNewsFromServer(){
        var url = 'https://newsapi.org/v2/top-headlines?' +
        'sources=bbc-news&' +
        'apiKey=b516c45d4b3f4fb4a8b555756530c838';

        axios.get(url).then((response) => this.news = response.data.articles);
    }
}

export default new Store();