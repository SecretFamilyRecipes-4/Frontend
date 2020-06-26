import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";
import LogInFormStyling from './LogInFormStyling';


function LogIn() {
  const [errors, setErrors] = useState({
    username: "",
    password: "",
    login: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState("");
  const [formState, setFormState] = useState({
    username: "",
    password: "",
    submit: false,
  });
  const [post, setPost] = useState([]);
  const formSchema = Yup.object().shape({
    username: Yup
      .string()
      .required("Enter your name here please")
      .min(2, "Your real name must be longer than 2 characters"),
    password: Yup.string(),
    submit: Yup.boolean(),
  });

  useEffect(() => {
    console.log("a form state change has been made");
    formSchema.isValid(formState).then((valid) => {
      setButtonDisabled(!valid);
    });
  });

  const inputChange = (e) => {
    const { name, value } = e.target;
    Yup.reach(formSchema, name)
        .validate(value)
        .then(() => {
            setErrors({
                ...errors,
                [name]: "",
            });
        })
        .catch((err) => {
            setErrors({
                ...errors,
                [name]: err.errors[0],
            });
        });
    setFormState({
        ...formState,
        [name]: value,
    });
};

  const formSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/users", formState)
      .then((res) => {
        setPost(res.data);
        console.log("success", post);
        setFormState({
          username: "",
          password: "",
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  return (
    <LogInFormStyling className='login'>
      <h2>Random Taco Recipie App</h2>
      <h3>LogIn page</h3>

      <form className='form-inline' onSubmit={formSubmit}>
        <div className="form-group">
          {/* //name */}
          <label htmlFor='username'>Username</label>
          <input
            className='input form-control'
            type='text'
            id='username'
            name='username'
            onChange={inputChange}
            value={formState.username}
          />
        </div>
          {/* {errors.username.length > 0 ? (
            <p className='error'>{errors.username}</p>
          ) : null} */}
        

        {/* //email */}
        <div className="form-group">
          <label htmlFor='psw'>Password</label>
          <input
            className='form-control'
            type='password'
            id='password'
            name='password'
            onChange={inputChange}
            value={formState.password}
          />
        </div>
          {/* {errors.password.length > 0 ? (
            <p className='error'>{errors.password}</p>
          ) : null} */}


        <button className='login-btn btn btn-default' type='submit'>
              Log In
            </button>
               <p className='signup-small-font'></p>
                 Not a member yet? Sign Up{" "}
              <Link to='/signup' className='signup-link'>
                  here
              </Link>
            
      </form>
    </LogInFormStyling>
  );
}

export default LogIn;
