import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";


function SignUp() {

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    submit: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState("");
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    submit: false,
  });
  const [post, setPost] = useState([]);
  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Enter your name here please")
      .min(2, "Your real name must be longer than 2 characters"),
    email: yup.string(),
    submit: yup.boolean(),
  });

  useEffect(() => {
    console.log("a form state change has been made");
    formSchema.isValid(formState).then((valid) => {
      setButtonDisabled(!valid);
    });
  });

  const validateChange = (e) => {
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setErrors({
          ...errors,
          [e.target.name]: "",
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [e.target.name]: err.errors[0],
        });
      });
  };
  const inputChange = (e) => {
    e.persist();
    const newFormData = {
      ...formState,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    };
    validateChange(e);
    setFormState(newFormData);
  };
  const formSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/users", formState)
      .then((res) => {
        setPost(res.data);
        console.log("success", post);
        setFormState({
          name: "",
          email: "",
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  return (
    <div className='signup'>
  
        <h2>Secret Family Recipie</h2>
        <h3>SignUp Form</h3>
      

      <form className='form' onSubmit={formSubmit}>
            {/* //name */}
            <label htmlFor='name'>
              Name
              <input
                className='input'
                type='text'
                id='name'
                name='name'
                onChange={inputChange}
                value={formState.name}
              />
                      {errors.name.length > 0 ? (
                <p className='error'>{errors.name}</p>
              ) : null}
            </label>


          {/* //email */}
          <label htmlFor='email'>
            Email
            <input
              className='input'
              type='email'
              id='email'
              name='email'
              onChange={inputChange}
              value={formState.email}
            />
            {errors.email.length > 0 ? (
              <p className='error'>{errors.email}</p>
            ) : null}
          </label>
          <button className='button' disabled={buttonDisabled} type='submit'>
            Submit
          </button>
          <button className='button' disabled={buttonDisabled} type='submit'>
            LogIn
          </button>
        </form>
      </div>
    
  );
}

export default SignUp;