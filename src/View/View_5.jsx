import React from 'react';
import { Link } from 'react-router-dom';

const View_5 = () => {
    return ( 
        <div className="container_2">

            <div className="container-fluid row">
                <Link to= "/View_3">
                    <i className="mt-4 ml-3 mb-3 arrow fas fa-arrow-left"></i>    
                </Link>
                <p className="comencemos mt-4 ml-2">¡Y POR ÚLTIMO! TU SEGURIDAD</p>
                <h4 className="mb-3 ml-4"><strong>Crea tu clave de acceso de 4 dígitos</strong></h4>
                <p className="ml-4 mb-5">Con ella podrás acceder de forma segura.</p>
                
                <div className="row d-flex justify-content-center ml-4 mt-4">
                    <input type="number" className="input_clave mr-3"/>
                    <input type="number" className="input_clave mr-3"/>
                    <input type="number" className="input_clave mr-3"/>
                    <input type="number" className="input_clave mr-3"/>
                </div>

                <div className="container-fluid">
                    <Link to="/View_6">
                        <button className="btn_view5 ml-4">CONTINUAR</button>
                    </Link>
                </div>
                
            </div>
            

        </div>
     );
}
 
export default View_5;
