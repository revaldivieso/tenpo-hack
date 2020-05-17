import React from 'react';
import icon1_v1 from '../Media/icon1_v1.svg';
import icon2_v1 from '../Media/icon2_v1.svg';
import icon3_v1 from '../Media/icon3_v1.svg';
import{Link} from 'react-router-dom';

const View_2 = () => {
    return ( 
        <div className="container_2">
            <Link to= "/">
                <i className="mt-4 ml-3 mb-3 arrow fas fa-arrow-left"></i>
            </Link>
            <div className="ml-3 mb-5">
                <h4 className="mb-2"><strong>¿Estás list@?</strong></h4>
                <p className="mb-4">Antes de seguir queremos contarte que:</p>
                
                <div>

                    <div className="d-flex flex-direction-column">
                        <img src={icon1_v1} alt="icono regulacion" className="mr-3"/>
                        <p><strong>Estamos regulados </strong>por la CMF, abriremos una cuenta digital a tu nombre.</p>
                    </div>
                    
                    <div className="d-flex flex-direction-column">
                        <img src={icon2_v1} alt="icono cedula" className="mr-3"/>
                        <p><strong>¡Ten tu cédula a la mano! </strong>Vamos a necesitar algunos datos personales como tu <strong>RUT y N° de serie.</strong></p>
                    </div>
                    
                    <div className="d-flex flex-direction-column">
                        <img src={icon3_v1} alt="icono seguridad" className="mr-3"/>
                        <p>Recuerda que tu plata con <strong>Tenpo siempre está segura.</strong></p>
                    </div>
                </div>


            </div>
            <div className="btns_view2">
                <p className="text-center"><strong>¡Empecemos validando tu correo!</strong></p>
            
            <div className="d-flex flex-column">
                <Link to="/view_3">
                    <button className="btn1_view2 ml-3 mb-2">CONTINUAR CON GOOGLE</button>
                </Link>
                    <button className="btn2_view2 ml-3">CONTINUAR CON MI CORREO</button>
            </div>
                
            </div>
        </div> 
    );
}
 
export default View_2;
