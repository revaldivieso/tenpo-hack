import React, { useCallback } from 'react';
import Assistence from '../Media/assistence.png';
import DarkModeSwitch from './DarkModeSwitch';
import FontSizeToggle from './FontSizeToggle';
import useScreenReader from 'react-screenreader';

const AccesibleNav = () => {
  const { reader, read, a11y } = useScreenReader();

  const onButtonClick = useCallback(() => read(`Hello screen reader!`), []);

  return (
    <nav className='accesible-nav'>
      {a11y()}
      <button
        onClick={onButtonClick}
        {...reader('This sentence will be read on button focus')}>
        <img
          className='assistive-btn'
          src={Assistence}
          alt='boton para acceder a la asistencia auditiva'></img>
      </button>

      <DarkModeSwitch />
      <FontSizeToggle />
    </nav>
  );
};
export default AccesibleNav;
