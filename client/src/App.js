import './App.css';
import { useState, useEffect} from "react";
import Axios from "axios"

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
        
        <div className='addPatientForm'>
          <input 
            type = "text" 
            placeholder = "Name" 
            onChange = {(event) => {
              setName(event.target.value);
            }}
          />
          <input 
            type = "text" 
            placeholder = "Gender" 
            onChange = {(event) => {
              setGender(event.target.value);
            }}
          />
          <input 
            type = "text" 
            placeholder = "DOB" 
            onChange = {(event) => {
              setDob(event.target.value);
            }}
          />
          <input 
            type = "number" 
            placeholder = "Height" 
            onChange = {(event) => {
              setHeight(event.target.value);
            }}
          />
          <input 
            type = "number" 
            placeholder = "Weight" 
            onChange = {(event) => {
              setWeight(event.target.value);
            }}
          />
          <input 
            type = "text" 
            placeholder = "Email" 
            onChange = {(event) => {
              setEmail(event.target.value);
            }}
          />
          <input 
            type = "text" 
            placeholder = "Medical History" 
            onChange = {(event) => {
              setMedicalHistory(event.target.value);
            }}
          />
          <button onClick = {createPatient}>Add Patient</button>
        </div>
      </div>
    </div>
  );
}

export default App;
