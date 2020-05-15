import React from 'react';
import Logo from '../Media/logo.jpg';

class Nr1 extends React.Component {
  render() {
    return (
      <div className='view-nr-1'>
        <img src={Logo} alt='logo tenpo' className='logo-view-nr1'></img>
        <h1>¡Hola!</h1>
        <h2>Te damos la bienvenida</h2>
        <button type='submit'>Submit</button>
        <button type='button'>Cancel</button>
      </div>
    );
  }
}
export default Nr1;
