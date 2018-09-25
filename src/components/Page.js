import React, { Component } from 'react';
import Home from '../Home/containers/home';
import NavBar from './NavBar';
import QuiS from './QuiS';
import Contacto from './Contacto';

class Page extends Component{
    render(){
        return(
            <div className="Page">
                <NavBar />
                <Home />
                <div >
                    <div className="title col-0">
                        <h2>Nuestros Servicios</h2>
                    </div>
                    <section id="servicios" className="col-0">
                        <div className="baner">
                            <div className="sub-baner">
                                <div>
                                    <h4>Rectificamos Motores Diesel y Nafteros</h4>
                                    <p>Con solo presionar un botón en el espejo retrovisor o en la aplicación, nuestra tecnología ofrece más seguridad y practicidad para tu día a día. Aprovechá esta nueva experiencia a bordo de tu Chevrolet.</p>
                                </div>
                            </div>
                            <div className="sub-baner baner-img" />
                        </div>
                        <div className="baner b2">
                            <div className="sub-baner baner-img" />
                            <div className="sub-baner">
                                <div>
                                    <h4>Rectificamos Motores Diesel y Nafteros</h4>
                                    <p>Con solo presionar un botón en el espejo retrovisor o en la aplicación, nuestra tecnología ofrece más seguridad y practicidad para tu día a día. Aprovechá esta nueva experiencia a bordo de tu Chevrolet.</p>
                                </div>
                            </div>
                        </div>
                        <div className="cartel-marco">
                            <div className="cartel">
                                <div><h4>Venta de Repuestos</h4></div>
                                <div className="cartel-imagenes">
                                    <img />
                                    <img />
                                    <img />
                                </div>
                                <div>
                                    <h5>Y otras marcas</h5>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="title col-0">
                        <h2>Información de Contacto</h2>
                    </div>
                    <div className="info-sections col-0">
                        <section id="info" className="col-2">
                            <div className="infocontacto">
                                <div className="inf">
                                    <img src=""/> 
                                    <div className="infText">
                                        <p className="infT">Dirección</p>
                                        <p className="">Pasaje J.M. Pueyrredon 142 BA°Cantisani </p>
                                        <p className="">San luis Capital 5700</p>
                                    </div>
                                </div>
                                <div className="inf">
                                    <img src=""/>
                                    <div className="infText">
                                        <p className="infT">E-mail</p>
                                        <p className="">email@gmail.com</p>
                                    </div>
                                </div>
                                <div className="inf">
                                    <img src=""/> 
                                    <div className="infText">
                                        <p className="infT">Telefono</p>
                                        <p className="">+54 9266 4446948</p>
                                    </div>
                                </div>
                                <div className="inf">
                                    <img src=""/> 
                                    <div className="infText">
                                        <p className="infT">Horario de Atención</p>
                                        <p className="">Lunes a Viernes de 8hs a 17hs</p>
                                    </div>
                                </div>
                            </div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1667.0897152207435!2d-66.33737245556641!3d-33.31412425540022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d43bf983742e7d%3A0xe03e8e5628e1ebcc!2sRectificacion+Pueyrredon!5e0!3m2!1ses-419!2sar!4v1536720575012" width="100%"  frameBorder="0" style={{bottom: 0}} allowFullScreen></iframe>
                        </section>
                        <section className="content-consulta col-2" id="consulta">
                            <div className="content-form-consulta">
                                <h3>Envia tu Consulta</h3>
                                <form>
                                    <input className="inp" type="text" placeholder="Nombre"></input>
                                    <input className="inp" type="text" placeholder="E-mail"></input>
                                    <input className="inp" type="text" placeholder="Asunto"></input>
                                    <textarea placeholder="Consulta" cols="auto" rows="5" wrap="hard" maxLength="1000"></textarea>
                                    <input type="submit" value="Enviar Consulta" className="btn"></input>
                                </form>
                            </div>
                        </section>
                    </div>
                    <footer>
                        <div className="col-0">
                            <p>Terminos y condiciones</p>
                            <p>Aviso Legal</p>
                            <p className="">CUIT: 20068134340</p>
                            <p>Copyright © 2018 Rectificadora Pueyrredon</p>
                            <a href="http://www.diazjmauricio.com">Designed by Diaz J. Mauricio</a>
                        </div>
                    </footer>
                </div>
            </div>
        );
    }
}
export default Page;