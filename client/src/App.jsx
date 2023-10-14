import './App.css';
import { useState, useEffect} from "react";
import Axios from "axios"

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [listOfPatients, setListOfPatients] = useState ([]);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [email, setEmail] = useState("");
  const [medicalHistory, setMedicalHistory] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/getPatients").then((response) => {
      setListOfPatients(response.data);
    });
  }, []);

  const createPatient = () => {
    Axios.post("http://localhost:3001/addPatient", {
      name,
      gender,
      dob,
      height,
      weight,
      email,
      medicalHistory
    }).then((response)=>{
      alert("success, patient added!");
      setListOfPatients([...listOfPatients,{
        name,
        gender,
        dob,
        height,
        weight,
        email,
        medicalHistory
      }])
    });
  };

  return (
    <div className="App">
      <h1>Patients</h1>
      <div className='patientScreen'>
        <div className = "patientsDisplay"> 
          {listOfPatients.map((patient) => {
            return (
              <div className='patients'>
                <h2>Name: {patient.name}</h2>
                <h2>Gender: {patient.gender}</h2>
                <h2>Date of Birth: {patient.dob}</h2>
                <h2>Height: {patient.height}</h2>
                <h2>Weight: {patient.weight}</h2>
                <h2>Email: {patient.email}</h2>
                <h2>Medical History: {patient.medicalHistory}</h2>
              </div>
            );
          })}
        </div>
        
        

        <div>
          <div className="input-group mb-3">
            <span className="input-group-text">@</span>
            <div className="form-floating">
              <input 
                type="text" 
                className="form-control" 
                id="floatingInputGroup1" 
                placeholder="Name"
                onChange = {(event) => {
                  setName(event.target.value);
                }}
                ></input>
              <label for="floatingInputGroup1">Name</label>
            </div>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">@</span>
            <div className="form-floating">
              <input 
                type="text" 
                className="form-control" 
                id="floatingInputGroup1" 
                placeholder="Gender"
                onChange = {(event) => {
                  setGender(event.target.value);
                }}
                ></input>
              <label for="floatingInputGroup1">Gender</label>
            </div>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">@</span>
            <div className="form-floating">
              <input 
                type="text" 
                className="form-control" 
                id="floatingInputGroup1" 
                placeholder="DOB"
                onChange = {(event) => {
                  setDob(event.target.value);
                }}
                ></input>
              <label for="floatingInputGroup1">Dob</label>
            </div>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">@</span>
            <div className="form-floating">
              <input 
                type="number" 
                className="form-control" 
                id="floatingInputGroup1" 
                placeholder="Height(cm)"
                onChange = {(event) => {
                  setHeight(event.target.value);
                }}
                ></input>
              <label for="floatingInputGroup1">Height(cm)</label>
            </div>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">@</span>
            <div className="form-floating">
              <input 
                type="number" 
                className="form-control" 
                id="floatingInputGroup1" 
                placeholder="Weight(kg)"
                onChange = {(event) => {
                  setWeight(event.target.value);
                }}
                ></input>
              <label for="floatingInputGroup1">Weight(kg)</label>
            </div>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">@</span>
            <div className="form-floating">
              <input 
                type="text" 
                className="form-control" 
                id="floatingInputGroup1" 
                placeholder="email"
                onChange = {(event) => {
                  setDob(event.target.value);
                }}
                ></input>
              <label for="floatingInputGroup1">Email</label>
            </div>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">@</span>
            <div className="form-floating">
              <input 
                type="text" 
                className="form-control" 
                id="floatingInputGroup1" 
                placeholder="DOB"
                onChange = {(event) => {
                  setEmail(event.target.value);
                }}
                ></input>
              <label for="floatingInputGroup1">Dob</label>
            </div>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">@</span>
            <div className="form-floating">
              <textarea 
                type="text" 
                className="form-control" 
                id="floatingInputGroup1" 
                placeholder="Medical History"
                onChange = {(event) => {
                  setMedicalHistory(event.target.value);
                }}
                ></textarea>
              <label for="floatingInputGroup1">Medical History</label>
            </div>
          </div>
          <button onClick = {createPatient}>Add Patient</button>
        </div>
      </div>
    </div>
  );
}

export default App;
