import React from 'react';
import logo from '../../img/logoUse.png';
import './HomeLayout.css';

function HomeLayout(props){
    return(
        <div className="home-container">
            <div className="col-0">
                <div className="quien">
                    <p>{props.cartelbienvenida}</p>
                </div>
                <div className="marco-logo">
                    <div className="marcoContent">
                        <img src={logo} alt="Rectificadora Pueyrredon"/>
                        <div className="links">
                            <a href="#SobreNosotros">Sobre Nosotros</a>
                            <a>Consulta</a>
                            <a>Contacto</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomeLayout;