import React, { useState, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [doctors, setDoctors] = useState([
    {
      firstName: "Arjun",
      lastName: "Karthick",
      gender: "Male",
      specialization: "General",
      visitingHours: "1 to 2pm",
    },
    {
      firstName: "Rahul",
      lastName: "Karthick",
      gender: "Male",
      specialization: "Internal Medicine",
      visitingHours: "1 to 2pm",
    },
    {
      firstName: "Sunil",
      lastName: "Karthick",
      gender: "Male",
      specialization: "Pediatrics",
      visitingHours: "1 to 2pm",
    },
    {
      firstName: "Varun",
      lastName: "Karthick",
      gender: "Male",
      specialization: "Orthopedics",
      visitingHours: "1 to 2pm",
    },
    {
      firstName: "Vishnu",
      lastName: "Karthick",
      gender: "Male",
      specialization: "Ophthalmology",
      visitingHours: "1 to 2pm",
    },
  ]);
  const [patients, setPatients] = useState([
    {
      id: 1,
      firstName: "Sunil",
      lastname: "Karthick",
      gender: "Male",
      age: "25",
      dateOfBirth: "01/01/1997",
    },
  ]);
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      patient_id: 1,
      specialization: "General",
      doctor: "Karthick",
      date: "04/05/2022",
      visitingHours: "1 to 2pm",
    },
  ]);

  return (
    <AppContext.Provider
      value={{
        doctors,
        setDoctors,
        patients,
        setPatients,
        appointments,
        setAppointments,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
