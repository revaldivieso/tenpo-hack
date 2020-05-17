import React from 'react';
import circlen from '../Media/circlen.png';
import { Link } from 'react-router-dom';

const View_4 = () => {
    return ( 
        <div className="container_3 container-fluid">

    
                <div className="d-flex flex-column align-items-center">
                    <Link to="/View_5">
                        <img src={circlen} alt="" className="circlen"/>
                    </Link>
                    <p className="text_view4">Un momento...</p>
                    <p className="text_view4">Estamos validando tus datos...</p>
                
            
        </div>


            
           
        </div>
     );
}
 
export default View_4;
