import React, {Component} from 'react';
import './QuiS.css';


class QuiS extends Component{
    render(){
        return(
            <section className="content-Quis flex" id="SobreNosotros">
                <div className="info">
                    <h3>Quienes Somos</h3>
                    <p>Esta delicia indie que junta tres géneros que en un principio parecían imposibles de casa, cuenta la historia de Anna, una joven adolescente que ve como su pequeño pueblo de Little Heaven es atacado por una epidemia zombie en plena Navidad. Anna y sus amigos deberán enfrentarse a los muertos vivientes en una carrera desesperada para dar con sus seres queridos. </p>
                    <h3>Servicios</h3>
                    <div className="servicios">
                        <div className="servicio s1">
                            <div className="servicio-img" />
                            <h5>Rectificacion motores Diesel y Nafteros</h5>
                        </div>
                        <div className="servicio s2">
                            <div className="servicio-img" />
                            <h5>Ventas de repuestos</h5>
                        </div>
                        <div className="servicio s3">
                            <div className="servicio-img" />
                            <h5>Pruebas Hidraulicas</h5>
                        </div>
                    </div>
                </div>
                <div className="content-info-img">

                </div>
            </section>
        );
    }
}
export default QuiS;