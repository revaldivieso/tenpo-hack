import React from 'react';
import{Link} from 'react-router-dom';

const View_3 = () => {
    return ( 
        <div className="container_2">

            <div className="container-fluid row">
                <Link to= "/View_2">
                    <i className="mt-4 ml-3 mb-3 arrow fas fa-arrow-left"></i>    
                </Link>
                    <p className="comencemos mt-4 ml-2"><strong>COMENCEMOS CON TUS DATOS</strong></p>
             

            </div>
        </div>
     );
}
 
export default View_3;