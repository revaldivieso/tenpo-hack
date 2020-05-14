import React from "react";
import Assistence from "../Media/assistence.png";

class AccesibleNav extends React.Component {
  render() {
    return (
      <nav className="accesible-nav">
        <a href="#" className="assistive-btn">
          <img
            src={Assistence}
            alt="boton para acceder a la asistencia auditiva"
          ></img>
        </a>
      </nav>
    );
  }
}
export default AccesibleNav;
