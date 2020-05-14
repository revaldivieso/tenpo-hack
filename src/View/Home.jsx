import React, { Fragment } from 'react';

function Home() {
  return (
    <Fragment>
      <label htmlFor='namedInput'>Name:</label>
      <input title='Nombre' id='namedInput' type='text' name='name' />
    </Fragment>
  );
}

export default Home;
