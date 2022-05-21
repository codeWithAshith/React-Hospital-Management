import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const NavBarComponent = (props) => {
  return (
    <Fragment>
      <ul>
        <li className={props.page === "home" ? "active" : null}>
          <Link to="/">Home</Link>
        </li>
        <li className={props.page === "addDoctor" ? "active" : null}>
          <Link to="/addDoctor">Add Doctor</Link>
        </li>
        <li className={props.page === "addPatient" ? "active" : null}>
          <Link to="/addPatient">Add Patient</Link>
        </li>
        <li className={props.page === "schedule" ? "active" : null}>
          <Link to="/schedule">Schedule Appointment</Link>
        </li>
        <li className={props.page === "cancel" ? "active" : null}>
          <Link to="/cancel">Cancel Appointment</Link>
        </li>
        <li className="logout">
          <Link to="/login">Log out</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default NavBarComponent;
