// import React, { useState, useEffect } from "react";
// import { Route, Link, Switch } from "react-router-dom";
// import * as yup from "yup";
// import axios from "axios";

// function LogIn() {
//   const [errors, setErrors] = useState({
//     username: "",
//     password: "",
//     login: "",
//   });

//   const [buttonDisabled, setButtonDisabled] = useState("");
//   const [formState, setFormState] = useState({
//     username: "",
//     password: "",
//     submit: false,
//   });
//   const [post, setPost] = useState([]);
//   const formSchema = yup.object().shape({
//     username: yup
//       .string()
//       .required("Enter your name here please")
//       .min(2, "Your real name must be longer than 2 characters"),
//     password: yup.string(),
//     submit: yup.boolean(),
//   });

//   useEffect(() => {
//     console.log("a form state change has been made");
//     formSchema.isValid(formState).then((valid) => {
//       setButtonDisabled(!valid);
//     });
//   });

//   const validateChange = (e) => {
//     yup
//       .reach(formSchema, e.target.username)
//       .validate(e.target.value)
//       .then((valid) => {
//         setErrors({
//           ...errors,
//           [e.target.username]: "",
//         });
//       })
//       .catch((err) => {
//         setErrors({
//           ...errors,
//           [e.target.name]: err.errors[0],
//         });
//       });
//   };
//   const inputChange = (e) => {
//     e.persist();
//     const newFormData = {
//       ...formState,
//       [e.target.username]:
//         e.target.type === "checkbox" ? e.target.checked : e.target.value,
//     };
//     validateChange(e);
//     setFormState(newFormData);
//   };
//   const formSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .post("https://reqres.in/api/users", formState)
//       .then((res) => {
//         setPost(res.data);
//         console.log("success", post);
//         setFormState({
//           username: "",
//           password: "",
//         });
//       })
//       .catch((err) => {
//         console.log(err.response);
//       });
//   };
//   return (
//     <div className='login'>
//       <h2>Secret Family Recipie</h2>
//       <h3>LogIn page</h3>

//       <form className='form' onSubmit={formSubmit}>
//         {/* //name */}
//         <label htmlFor='username'>
//           Username
//           <input
//             className='input'
//             type='text'
//             id='username'
//             name='username'
//             onChange={inputChange}
//             value={formState.username}
//           />
//           {errors.username.length > 0 ? (
//             <p className='error'>{errors.username}</p>
//           ) : null}
//         </label>

//         {/* //email */}
//         <label htmlFor='password'>
//           Password
//           <input
//             className='input'
//             type='password'
//             id='password'
//             name='password'
//             onChange={inputChange}
//             value={formState.password}
//           />
//           {errors.password.length > 0 ? (
//             <p className='error'>{errors.password}</p>
//           ) : null}
//         </label>

//         <button className='login-btn' type='submit'>
//               Log In
//             </button>
//                <p className='signup-small-font'></p>
//                  Not a member yet? Sign Up{" "}
//               <Link to='/sign-up' className='signup-link'>
//                   here
//               </Link>

//       </form>
//     </div>
//   );
// }

// export default LogIn;
