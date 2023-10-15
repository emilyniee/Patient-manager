import { useState, useEffect} from "react";
import Axios from "axios"

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  const [listOfPatients, setListOfPatients] = useState ([]);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [email, setEmail] = useState("");

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
    }).then((response)=>{
      alert("success, patient added!");
      setListOfPatients([...listOfPatients,{
        name,
        gender,
        dob,
        height,
        weight,
        email,
      }])
    });
  };

return (
  <div>
  <nav class="navbar" style={{'background-color': 'lightblue'}}>
      <div class="container-fluid p-2 px-3">
      Dashboard
      <span class="navbar-text">
        <i class="bi bi-person-circle"></i>
      </span>
      </div>
    </nav>
  <div class="p-4">
    <div class="row align-items-start">
      <div class="col-4 rounded p-3" style={{'background-color': 'lightblue'}}>
        <div className="input-group mb-3">
          <div className="form-floating">
            <input 
              type="text" 
              className="form-control" 
              id="floatingInputGroup1"
              onChange = {(event) => {
                setName(event.target.value);
              }}
              ></input>
            <label for="floatingInputGroup1">Name</label>
          </div>
        </div>
        <div className="input-group mb-3">
          <div className="form-floating">
            <input 
              type="text" 
              className="form-control" 
              id="floatingInputGroup1"
              onChange = {(event) => {
                setGender(event.target.value);
              }}
              ></input>
            <label for="floatingInputGroup1">Gender</label>
          </div>
        </div>
        <div className="input-group mb-3">
          <div className="form-floating">
            <input 
              type="text" 
              className="form-control" 
              id="floatingInputGroup1" 
              onChange = {(event) => {
                setDob(event.target.value);
              }}
              ></input>
            <label for="floatingInputGroup1">DOB</label>
          </div>
        </div>
        <div className="input-group mb-3">
          <div className="form-floating">
            <input 
              type="number" 
              className="form-control" 
              id="floatingInputGroup1" 
              onChange = {(event) => {
                setHeight(event.target.value);
              }}
              ></input>
            <label for="floatingInputGroup1">Height(cm)</label>
          </div>
          <div className="form-floating">
            <input 
              type="number" 
              className="form-control" 
              id="floatingInputGroup1" 
              onChange = {(event) => {
                setWeight(event.target.value);
              }}
              ></input>
            <label for="floatingInputGroup1">Weight(kg)</label>
          </div>
        </div>
        <div className="input-group mb-3">
          <div className="form-floating">
            <input 
              type="text" 
              className="form-control" 
              id="floatingInputGroup1" 
              onChange = {(event) => {
                setEmail(event.target.value);
              }}
              ></input>
            <label for="floatingInputGroup1">Email</label>
          </div>
        </div>
        <button type="button" class="btn btn-light" onClick = {createPatient}>Add Patient</button>
      </div>
      <div class="col">
        <h2>Patients</h2>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Gender</th>
              <th scope="col">DOB</th>
              <th scope="col">Height</th>
              <th scope="col">Weight</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
          {listOfPatients.map((patient, i) => {
              return (
                <tr>
                  <th scope="row">{patient.name}</th>
                  <td>{patient.gender}</td>
                  <td>{patient.dob}</td>
                  <td>{patient.height}</td>
                  <td>{patient.weight}</td>
                  <td>{patient.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="accordion" id="accordionExample">
          
        </div>
      </div>
    </div>
  </div>
  </div>
);
}

export default App;
