import {observable, action} from 'mobx'

class Store {
    @observable isUserLogged;

    constructor(){
        this.isUserLogged = false;
    }
    
    @action login(){
        this.isUserLogged = !this.isUserLogged;
    }
}

export default new Store();