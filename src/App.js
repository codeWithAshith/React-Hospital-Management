import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddDoctorPage from "./container/AddDoctor.page";
import AddPatientPage from "./container/Addpatient.page";
import CancelAppointmentPage from "./container/CancelAppointment.page";
import HomePage from "./container/Home.page";
import LoginPage from "./container/Login.page";
import ScheduleAppointmentPage from "./container/ScheduleAppointment.page";
import { AppProvider } from "./context/AppContext";

const App = () => {
  return (
    <Fragment>
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/addDoctor" element={<AddDoctorPage />} />
            <Route path="/addPatient" element={<AddPatientPage />} />
            <Route path="/schedule" element={<ScheduleAppointmentPage />} />
            <Route path="/cancel" element={<CancelAppointmentPage />} />
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </Fragment>
  );
};

export default App;
