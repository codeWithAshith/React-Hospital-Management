import React, { Fragment, useContext } from "react";
import { AppContext } from "../context/AppContext";

const CancelAppointmentComponent = () => {
  const { appointments, setAppointments } = useContext(AppContext);

  const deleteHandler = (id) => {
    let index = appointments
      .map((x) => {
        return x.Id;
      })
      .indexOf(id);

    appointments.splice(index, 1);
    setAppointments([...appointments]);
  };
  return (
    <Fragment>
      <h1>Cancel Appointment</h1>

      <table>
        <tr>
          <th>Patient Id</th>
          <th>Doctor</th>
          <th>Visit Date</th>
          <th>Visiting Hours</th>
          <th>Action</th>
        </tr>
        {appointments.map((appointment) => {
          console.log(appointment);
          return (
            <tr>
              <td>{appointment.patient_id}</td>
              <td>{appointment.doctor}</td>
              <td>{appointment.date}</td>
              <td>{appointment.visitingHours}</td>
              <td>
                <button
                  className="delete"
                  onClick={() => deleteHandler(appointment.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </Fragment>
  );
};

export default CancelAppointmentComponent;
