import React, { Fragment, useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const INITIAL_VALUE = {
  firstName: "",
  lastName: "",
  gender: "Male",
  specialization: "General",
  visitingHours: "1 to 2pm",
};

const AddDoctorComponent = () => {
  const { doctors, setDoctors } = useContext(AppContext);
  const [doctor, setDoctor] = useState(INITIAL_VALUE);

  const addDoctorHandler = (event) => {
    event.preventDefault();
    setDoctors([...doctors, doctor]);
    setDoctor(INITIAL_VALUE);
  };

  const firstNameHandler = (event) => {
    setDoctor((prevDoctor) => {
      return { ...prevDoctor, firstName: event.target.value };
    });
  };

  const lastNameHandler = (event) => {
    setDoctor((prevDoctor) => {
      return { ...prevDoctor, lastName: event.target.value };
    });
  };

  const genderHandler = (event) => {
    console.log(event);
    setDoctor((prevDoctor) => {
      return { ...prevDoctor, gender: event.target.value };
    });
  };

  const specializationHandler = (event) => {
    console.log("sas");
    setDoctor((prevDoctor) => {
      return { ...prevDoctor, specialization: event.target.value };
    });
  };

  const visitingHoursHandler = (event) => {
    setDoctor((prevDoctor) => {
      return { ...prevDoctor, visitingHours: event.target.value };
    });
  };

  return (
    <Fragment>
      <h1>Add Doctor</h1>
      <form className="add" onSubmit={(event) => addDoctorHandler(event)}>
        <label>First Name</label>
        <input
          type="text"
          placeholder="Your name.."
          value={doctor.firstName}
          onChange={(event) => firstNameHandler(event)}
        />

        <label>Last Name</label>
        <input
          type="text"
          placeholder="Your last name.."
          value={doctor.lastName}
          onChange={(event) => lastNameHandler(event)}
        />

        <label>Gender</label>
        <select
          value={doctor.gender}
          onChange={(event) => genderHandler(event)}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <label>Specialization</label>
        <select
          value={doctor.specialization}
          onChange={(event) => specializationHandler(event)}
        >
          <option value="General">General</option>
          <option value="Internal Medicine">Internal Medicine</option>
          <option value="Pediatrics">Pediatrics</option>
          <option value="Orthopedics">Orthopedics</option>
          <option value="Ophthalmology">Ophthalmology</option>
        </select>
        <label>Visiting Hours</label>
        <select
          value={doctor.visitingHours}
          onChange={(event) => visitingHoursHandler(event)}
        >
          <option value="1 to 2pm">1 to 2pm</option>
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

export default AddDoctorComponent;
