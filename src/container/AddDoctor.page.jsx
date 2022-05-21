import React, { Fragment } from "react";

import NavBarComponent from "../components/NavBar.component";
import AddDoctorComponent from "../components/AddDoctor.component";

const AddDoctorPage = () => {
  return (
    <Fragment>
      <NavBarComponent page="addDoctor" />
      <AddDoctorComponent />
    </Fragment>
  );
};

export default AddDoctorPage;
