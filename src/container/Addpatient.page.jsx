import React, { Fragment } from "react";

import NavBarComponent from "../components/NavBar.component";
import AddPatientComponent from "../components/AddPatient.component";

const AddPatientPage = () => {
  return (
    <Fragment>
    <NavBarComponent page="addPatient" />
      <AddPatientComponent />
    </Fragment>
  );
};

export default AddPatientPage;
