import React from 'react';
import icon2_v1 from '../Media/icon2_v1.svg';
import{Link} from 'react-router-dom';

const View_3 = () => {
    return ( 
        <div className="container_2">

            <div className="container-fluid row">
                <Link to= "/View_2">
                    <i className="mt-4 ml-3 mb-3 arrow fas fa-arrow-left"></i>    
                </Link>
                    <p className="comencemos mt-4 ml-2">COMENCEMOS CON TUS DATOS</p>
                    <h4 className="mb-3 ml-4"><strong>Ingresa tu RUT y N° de documento o serie</strong></h4>
                    <p className="ml-4 mb-5">¡Recuerda! Abrir tu cuenta con Tenpo es seguro y gratis.</p>

                    <form action="" className="ml-4 mb-4">
                        
                        <input type="text" name="" id="" placeholder="RUT" className="input_rut_serie mb-5"/>
                        
                        <input type="text" name="" id="" placeholder="Número de documento o serie" className="input_rut_serie"/>
                    </form>

                        <div className="d-flex borde_cedula ml-4 mb-5">
                            <div>
                                <img src={icon2_v1} alt="icono cedula" className="cedula ml-2"/>
                            </div>
                            <div className="ml-5 pr-2 pt-1 pb-1">
                                <p className="text_cedula">Este número lo puedes ver en tu cédula de identidad</p>
                                <a href="" className="text_purple text_cedula">¿Dónde lo encuentro?</a>
                            </div>
                        </div>
                    
                    <div className="d-flex ml-4 mb-3">
                        <input type="checkbox" name="" value=""className="check"/>
                        <p>Acepto conforme los <a href="" className="text_purple"> términos y condiciones del servicio.</a></p>
                    </div>
                    

                    <div className="container-fluid">
                        <Link to="/View_4">
                           <button className="btn_view3 ml-4">CONTINUAR</button>
                        </Link>
                    </div>
                    
                    
             

            </div>
        </div>
     );
}
 
export default View_3;