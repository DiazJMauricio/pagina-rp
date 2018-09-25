import React, {Component} from 'react';
import HomeLayout from '../components/HomeLayout';

class Home extends Component {
    state = {
        cartelbienvenida: "asasas"
    }
    render(){
        return(
            <HomeLayout cartelbienvenida={state.cartelbienvenida}/>
        );
    }
}
export default Home;