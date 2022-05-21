import React, { Fragment, useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { toDaysDate } from "../utils/utils";

const INITIAL_VALUE = {
  patient_id: "",
  specialization: "",
  doctor: "",
  date: "",
  visitingHours: "",
};
const ScheduleAppointmentComponent = () => {
  const { doctors, appointments, setAppointments, patients } =
    useContext(AppContext);
  const [appointment, setAppointment] = useState(INITIAL_VALUE);

  console.log(doctors);

  const addHandler = (event) => {
    event.preventDefault();
    setAppointments([...appointments, appointment]);
    setAppointment(INITIAL_VALUE);
  };
  const idHandler = (event) => {
    setAppointment((prevAppointment) => {
      return { ...prevAppointment, patient_id: event.target.value };
    });
  };
  const specializationHandler = (event) => {
    setAppointment((prevAppointment) => {
      return { ...prevAppointment, specialization: event.target.value };
    });
  };
  const doctorHandler = (event) => {
    setAppointment((prevAppointment) => {
      return { ...prevAppointment, doctor: event.target.value };
    });
  };
  const dateHandler = (event) => {
    setAppointment((prevAppointment) => {
      return { ...prevAppointment, date: event.target.value };
    });
  };
  const visitingHoursHandler = (event) => {
    setAppointment((prevAppointment) => {
      return { ...prevAppointment, visitingHours: event.target.value };
    });
  };

  return (
    <Fragment>
      <h1>Schedule Appointment</h1>
      <form className="add" onSubmit={(event) => addHandler(event)}>
        <label>Patient Id</label>
        <select
          value={appointment.patient_id}
          onChange={(event) => idHandler(event)}
        >
          <option value="select-patient_id">Select patient Id</option>
          {patients.map((patient) => (
            <option value={patient.id}>{patient.id}</option>
          ))}
        </select>

        <label>Specialization</label>
        <select
          value={appointment.specialization}
          onChange={(event) => specializationHandler(event)}
        >
          <option value="select-specialization">Select Specialization</option>
          <option value="General">General</option>
          <option value="Internal Medicine">Internal Medicine</option>
          <option value="Pediatrics">Pediatrics</option>
          <option value="Orthopedics">Orthopedics</option>
          <option value="Ophthalmology">Ophthalmology</option>
        </select>

        <label>Doctor</label>
        <select onChange={(event) => doctorHandler(event)}>
          <option value="select-doctor">Select Doctor</option>
          {doctors
            .filter(
              (doctor) => doctor.specialization === appointment.specialization
            )
            .map((doctor) => (
              <option value={doctor.firstName + " " + doctor.lastName}>
                {doctor.firstName + " " + doctor.lastName}
              </option>
            ))}
        </select>

        <label>Visiting Date</label>
        <input
          type="date"
          placeholder="Date of appointment.."
          value={appointment.date}
          min={toDaysDate}
          onChange={(event) => dateHandler(event)}
        />

        <label>Visiting Hours</label>
        <select
          value={appointment.visitingHours}
          onChange={(event) => visitingHoursHandler(event)}
        >
          <option value="select-hours">Select Visiting Hours</option>
          <option value="1 to 2pm" selected>
            1 to 2pm
          </option>
          <option value="2 to 3pm">2 to 3pm</option>
          <option value="3 to 4pm">3 to 4pm</option>
          <option value="4 to 5pm">4 to 5pm</option>
          <option value="5 to 6pm">5 to 6pm</option>
        </select>

        <button className="btn">Add Doctor</button>
      </form>
    </Fragment>
  );
};

export default ScheduleAppointmentComponent;
