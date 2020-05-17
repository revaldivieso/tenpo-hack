import React from 'react';
import logotenpo from '../Media/logotenpo.svg';
import{Link} from 'react-router-dom';

class Nr1 extends React.Component {
  render() {
    return (

      <div className="container_1">
        <img src={logotenpo} className="logo mt-3 ml-3 mb-5" alt='logo tenpo'/>
        <h1 className="text_view1 ml-3"><strong>¡Hola!</strong></h1>
        <h2 className="text_view1 ml-3">Te damos la bienvenida</h2>

        <div className="btns_view1">
          <Link to="/view_2">
            <button className="btn1_view1 ml-3 mb-2" type='submit'><strong>
              CREAR UNA CUENTA</strong>
            </button>
          </Link>
          <button className='btn2_view1 ml-3' type='button'><strong>
            INICIAR SESIÓN</strong>
          </button>
          <p className="text_view1 text_paypal ml-5 mt-5">Regístrate con <strong>multicaja PayPal</strong></p>
        </div>

      </div>
    );
  }
}
export default Nr1;
