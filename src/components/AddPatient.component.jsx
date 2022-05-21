import React, { Fragment, useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { getAge, toDaysDate } from "../utils/utils";

const INITIAL_VALUE = {
  firstName: "",
  lastName: "",
  gender: "Male",
  age: "",
  dateOfBirth: "",
};
const AddPatientComponent = () => {
  const { patients, setPatients } = useContext(AppContext);
  const [patient, setPatient] = useState(INITIAL_VALUE);

  const addPatientHandler = (event) => {
    event.preventDefault();
    setPatients([...patients, patient]);
    setPatient(INITIAL_VALUE);
  };
  const firstNameHandler = (event) => {
    setPatient((prevPatient) => {
      return { ...prevPatient, firstName: event.target.value };
    });
  };
  const lastNameHandler = (event) => {
    setPatient((prevPatient) => {
      return { ...prevPatient, lastName: event.target.value };
    });
  };
  const genderHandler = (event) => {
    setPatient((prevPatient) => {
      return { ...prevPatient, gender: event.target.value };
    });
  };

  const dateOfBirthHandler = (event) => {
    setPatient((prevPatient) => {
      return {
        ...prevPatient,
        dateOfBirth: event.target.value,
        age: getAge(event.target.value),
      };
    });
  };

  return (
    <Fragment>
      <h1>Add Patient</h1>
      <form className="add" onSubmit={(event) => addPatientHandler(event)}>
        <label>First Name</label>
        <input
          type="text"
          placeholder="Your name.."
          value={patient.firstName}
          onChange={(event) => firstNameHandler(event)}
        />

        <label>Last Name</label>
        <input
          type="text"
          placeholder="Your last name.."
          value={patient.lastName}
          onChange={(event) => lastNameHandler(event)}
        />

        <label>Gender</label>
        <select
          value={patient.gender}
          onChange={(event) => genderHandler(event)}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <label>Date of Birth</label>
        <input
          type="date"
          placeholder="Date of birth.."
          max={toDaysDate}
          value={patient.dateOfBirth}
          onChange={(event) => dateOfBirthHandler(event)}
        />
        <label>Age</label>
        <input type="number" placeholder="Age" value={patient.age} disabled />
        <button className="btn">Add Patient</button>
      </form>
    </Fragment>
  );
};

export default AddPatientComponent;
