import React, {Component} from 'react';
import api from '../../Services/api';

export default class Main extends Component{
    //executado sempre que o componete for montado na tela
    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = async() =>{
        const response = await api.get('/products');
        console.log(response);
    }; 
    render(){
        return <h1>Hello Douglas</h1>
    }
}