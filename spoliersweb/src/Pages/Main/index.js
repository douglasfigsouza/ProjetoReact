import React, {Component} from 'react';
import api from '../../Services/api';

export default class Main extends Component{
    state = {
        products :[]
    };
    //executado sempre que o componete for montado na tela
    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = async() =>{
        const response = await api.get('/products');
        this.setState({products: response.data.docs});
    }; 
    render(){
     return(
        <div className="product-list">
        {this.state.products.map(produto=>(
            <h2 key={produto._id}>{produto.title}</h2>
        ))}
       </div>
     );
    }
}