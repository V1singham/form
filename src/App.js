import { useState } from "react";
import "./styles.css";
import FormInput from "./components/FormInput";

const App = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "First Name",
      type: "text",
      placeholder: "First Name",
      errorMessage:
        "First Name should be 3-16 characters ",
      label: "First Name",
      required: true,
    },
    {
      id: 2,
      name: "Last Name",
      type: "text",
      placeholder: "Last Name",
      errorMessage: "enter last name",
      label: "Email",
      
    },
    {
      id: 3,
      name: "gender",
      type: "text",
      placeholder: "Gender",
      label: "Gender",
    },
    {
      id: 4,
      name: "pincode",
      type: "number",
      placeholder: "pincode",
      errorMessage: "It should be 6 digits",
      label: "pincode",
      required: true,
    },
    {
      id: 5,
      name: "Emergency contact number",
      type: "number",
      placeholder: "contact number",
      errorMessage: "10 digits",
      label: "Contact number",
      required: true,
    },
    {
      id: 6,
      name: "blood group",
      type: "text",
      placeholder: "blood group",
      errorMessage: "It should be blood groop",
      label: "Blood group",
      required: true,
    },
    {
      id: 7,
      name: "Allergies",
      type: "text",
      placeholder: "Allergies",
      errorMessage: "It should be allergis",
      label: "Allergies",
      required: true,
    },
    
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;




// First Name : Text only field
// Last Name : Text only field
// Date of Birth : Should be in the format of dd/mm/yyyy
// Gender : Should be drop-down with three option Male, Female, Other
// Pincode – Numeric field only. Should add validations for pincode in India
// Emergency contact number – Should be numeric with validation for being a mobile number
// Blood group – A Drop-down to select A +, A-, B+, B-, AB+, AB-, O+, O-
// Allergies – When Clicked should be selected from list
// Co-morbidities – Should be selected from a list
