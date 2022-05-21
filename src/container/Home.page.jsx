import React, { Fragment } from "react";

import HomeComponent from "../components/Home.component";
import NavBarComponent from "../components/NavBar.component";

const HomePage = () => {
  return (
    <Fragment>
      <NavBarComponent page="home" />
      <HomeComponent />
    </Fragment>
  );
};

export default HomePage;
