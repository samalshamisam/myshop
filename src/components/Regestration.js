import { useFormik } from 'formik';
import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { MdErrorOutline } from 'react-icons/md';
import { FaCheck } from 'react-icons/fa';
import * as Yup from "yup";
import './reg.css'

const Regestration = () => {
    const navigate = useNavigate()
    const [firebaseError , setFirebaseError] = useState()
    const [loading, setLoading] = useState(false);
    const [succMessg, setSuccsMessg] = useState("");

    const formik = useFormik({
        initialValues:{
            name:"",
            email:"",
            password:"",
            rePassword:"",
        },
        validationSchema: Yup.object({
            name: Yup.string().max(15, "must be 15 characters or less").required("Required"),
            email: Yup.string().email("invalid address").required("Required"),
            password: Yup.string().min(6,"must be 6 characters or less").required("Required"),
            rePassword: Yup.string().oneOf([ Yup.ref("password"), null],
            "password must match" ),
        }),
onSubmit:(values, {resetForm}) =>{
    const {name, email, password} = values;
    setLoading(true);
   

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    updateProfile(auth.currentUser,{
        displayName:name,
    });
    setSuccsMessg("Account created successfully");
     setTimeout(() => {
navigate('/Sginin')
     }, 2000);
  })
  .catch((error) => {
    // const errorCode = error.code;
    // const errorMessage = error.message;
    setLoading(false)
    if (error.code.includes("auth/email-already-in-use")){
        setFirebaseError("Email Already In Use, try another one");
        resetForm();
    }
    // ..
  });
},


    });
  return (
    <div className="aa">
    <div className='f'>
        <form onSubmit={formik.handleSubmit}>
        <input
        type='text'
        name='name'
        placeholder='Enter your name'
        autoComplete='on' 
        onChange={formik.handleChange}
        value={formik.values.name}
        onBlur={formik.handleBlur} />
        {formik.touched.name && formik.errors.name ? (
         <>
         {" "}
         {formik.errors.name}
         <MdErrorOutline className='fs' />
         </>
        ) : (
          formik.touched.name &&
          !formik.errors.name && (
            <>
            <FaCheck className='fa'/>
            </>
          )
        )}{" "}
           <input type='text' name='email' placeholder='Enter your email' 
        autoComplete='on'
        onChange={formik.handleChange}
        value={formik.values.email}
        onBlur={formik.handleBlur} />
        {formik.touched.email && formik.errors.email ? (
         <>
         {" "}
         {formik.errors.email}
         <MdErrorOutline className='fs' />
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
         <MdErrorOutline className='fs' />
         </>
        ) : (
          formik.touched.password &&
          !formik.errors.password && (
            <>
            <FaCheck className='fa'/>
            </>
          )
        )}{" "}
                  <input type='rePassword' name='rePassword' placeholder=' rePassword' 
        autoComplete='on'
        onChange={formik.handleChange}
        value={formik.values.rePassword}
        onBlur={formik.handleBlur} />
        {formik.touched.rePassword && formik.errors.rePassword ? (
         <>
         {" "}
         {formik.errors.rePassword}
         <MdErrorOutline className='fs' />
         </>
        ) : (
          formik.touched.rePassword &&
          !formik.errors.rePassword && (
            <>
            <FaCheck className='fa' />
            </>
          )
        )}
        <button type="submit" disabled={loading}>
        {loading  ?  "Processing..."  :  "Register Account"}
        </button>
        {succMessg && <p className='success'> {succMessg}</p>}
        {firebaseError && <p className='error'>{firebaseError}</p>}
        </form>
    </div>
    </div>
  )
}

export default Regestration