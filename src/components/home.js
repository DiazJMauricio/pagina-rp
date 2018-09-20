import React, {Component} from 'react';
import './home.css';
import logo from '../img/logoUse.png';

class Home extends Component {

    render(){
        return(
            <div className="home-container">
                <div className="col-0">
                    <div className="quien">
                        <p>
                        Con solo presionar un botón en el espejo retrovisor o en la aplicación, nuestra tecnología ofrece más seguridad y practicidad para tu día a día. Aprovechá esta nueva experiencia a bordo de tu Chevrolet.
                        </p>
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
        );
    }
}
export default Home;
