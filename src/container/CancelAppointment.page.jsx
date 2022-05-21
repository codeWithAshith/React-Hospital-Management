import React, { Fragment } from "react";

import NavBarComponent from "../components/NavBar.component";
import CancelAppointmentComponent from "../components/CancelAppointment.component";

const CancelAppointmentPage = () => {
  return (
    <Fragment>
    <NavBarComponent page="cancel" />
      <CancelAppointmentComponent />
    </Fragment>
  );
};

export default CancelAppointmentPage;
