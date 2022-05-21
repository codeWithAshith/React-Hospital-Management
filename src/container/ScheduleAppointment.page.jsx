import React, { Fragment } from "react";

import NavBarComponent from "../components/NavBar.component";
import ScheduleAppointmentComponent from "../components/ScheduleAppointment.component";

const ScheduleAppointmentPage = () => {
  return (
    <Fragment>
    <NavBarComponent page="schedule" />
      <ScheduleAppointmentComponent />
    </Fragment>
  );
};

export default ScheduleAppointmentPage;
