import { useFormik } from 'formik';
import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { MdErrorOutline } from 'react-icons/md';
import { FaCheck } from 'react-icons/fa';
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUer } from './redux/appSilce';
import './sign.css';

const Sginin = () => {
      const navigate = useNavigate()
  const [firebaseError , setFirebaseError] = useState()
      const [loading, setLoading] = useState(false);
      const [succMessg, setSuccsMessg] = useState("");
  const dispatch = useDispatch();
  const formik = useFormik({
         initialValues:{
          
             email:"",
             password:""
            
         },
         validationSchema: Yup.object({
             
             email: Yup.string().email("invalid address").required("Required"),
             password: Yup.string().min(6,"must be 6 characters or less").required("Required"),
            
         }),
 onSubmit:(values, {resetForm}) =>{
     const { email, password} = values;
     setLoading(true);
    
 
 const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
   .then((userCredential) => {
     // Signed up 
     const user = userCredential.user;
     dispatch(
      setUer({
      __id:user.uid,
      userName: user.displayName,
      email: user.email,
     })
    );
 setSuccsMessg("Logged In Successfully! Welcome You");
 setLoading(false);
     
      setTimeout(() => navigate('/')
      , 2000);
   })
   .catch((error) => {
     // const errorCode = error.code;
     // const errorMessage = error.message;
     setLoading(false)
     if (error.code.includes("auth/wrong-password")){
         setFirebaseError("Wrong Password. Please Try again.");
         
     }else if(error.code.includes("auth/user-not-found")){
      setFirebaseError("no user found with this email.")
     }else{
      setFirebaseError("An error occurred. please try again.")
     }
     resetForm();
     // ..
   });
 },
 
 
     });
   return (
    <div className='aa'>
      <div className='f'>
         <form onSubmit={formik.handleSubmit}>
   
            <input type='text' name='email' placeholder='Enter your email' 
         autoComplete='on'
         onChange={formik.handleChange}
         value={formik.values.email}
         onBlur={formik.handleBlur} />
         {formik.touched.email && formik.errors.email ? (
          <>
          {" "}
          {formik.errors.email}
          <MdErrorOutline className='fs'/>
          </>
         ) : (
           formik.touched.email &&
           !formik.errors.email && (
             <>
             <FaCheck className='fa'/>
             </>
           )
         )}{" "}
                <input type='password' name='password' placeholder=' password' 
         autoComplete='on'
         onChange={formik.handleChange}
         value={formik.values.password}
         onBlur={formik.handleBlur} />
         {formik.touched.password && formik.errors.password ? (
          <>
          {" "}
          {formik.errors.password}
          <MdErrorOutline className='fs'/>
          </>
         ) : (
           formik.touched.password &&
           !formik.errors.password && (
             <>
             <FaCheck className='fa'/>
             </>
           )
         )}
         <button type="submit" disabled={loading}>
         {loading  ?  "Signing.."  :  "Sign in"}
         </button>
         {firebaseError && <p className='error'>{firebaseError}</p>}
         </form>
      </div>
    </div>
   )
}

export default Sginin