import React, {Component} from 'react';
import './Consulta.css';


class Consulta extends Component{
    render(){
        return(
            <section className="content-Consulta flex" id="">
                <div className="content-form-consulta">
                    <h3>Envia tu Consulta</h3>
                    <form>
                        <div className="w-f">
                            <input className="inp" type="text"></input>
                            <input className="inp" type="text"></input>
                        </div>
                        <div className="w-f">
                            <textarea></textarea>
                        </div>
                        <div className="w-f flex">
                            <input type="submit" value="Envia tu consulta" className="btn"></input>
                        </div>
                    </form>
                </div>
            </section>
        );
    }
}
export default Consulta;