import React from 'react';
import celu from '../Media/celu.png';

const View_6 = () => {
    return ( 
        <div className="container_4">

            <div className="d-flex flex-column align-items-center">
                <img src={celu} alt="" className="celu mb-4"/>
                <h4 className="text_view6 mb-3">¡GENIAL!</h4>
                <p className="text2_view6 mb-5">¡Ya puedes empezar a disfrutar de Tenpo!</p>
               

                <button className="btn2_view1 ml-3 mt-5" type="button">
                COMENZAR
                </button>

            </div>
            

        </div>
     );
}
 
export default View_6;
