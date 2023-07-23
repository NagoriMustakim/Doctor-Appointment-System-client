import React from 'react'
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import styles from '../pages/Styles/login.module.css'
import toast, { Toaster } from 'react-hot-toast';
import { registerValidation } from '../helper/userValid';
export const Register = () => {
    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            mobile: '',
            password: '',
            retype: '',
            address: '',
            city: '',
        },
        validate: registerValidation,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async values => {
            console.log(values);
        }
    })


    const showpassword = () => {
        var x = document.getElementById("myInput");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }

    return (
        <section className={`py-1 ${styles.registerbg}`} >
            <Toaster position='top-center' reverseOrder={false}></Toaster>
            <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                    <div className="text-center dark:bg-neutral-900 rounded-lg">
                        <img
                            className="mx-auto w-56 transition duration-300 ease-in-out hover:scale-110"
                            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                            alt="logo" />
                        <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold text-white  transition duration-300 ease-in-out hover:scale-110">
                            Welcome to doctor appointment system
                        </h4>
                    </div>
                    <div className={`mb-0 px-6 py-6 ${styles.registerglass}`}>

                        <div className="text-center flex justify-between">

                            <h6 className="text-blueGray-700 text-xl font-bold">
                                Register
                            </h6>
                        </div>
                    </div>
                    <div className={`flex-auto px-4 lg:px-10 py-10 pt-0 ${styles.registerglass}`}>
                        <form onSubmit={formik.handleSubmit}>

                            {/* need to work on this */}
                            {/* <div className="text-center flex justify-between mt-2">
                                <h6 className="text-blueGray-400 text-sm mt-3 mb-2 font-bold uppercase">
                                    User Information
                                </h6>
                                <button  className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="reset" value="Reset" disabled>
                                    Reset
                                </button>
                            </div> */}

                            <h6 className="text-blueGray-400 text-sm mt-3 mb-2 font-bold uppercase">
                                User Information
                            </h6>
                            <div className="flex flex-wrap">
                                <div className="w-full lg:w-6/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                            First Name
                                        </label>
                                        <input  {...formik.getFieldProps('firstname')} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder='Enter your name' required />
                                    </div>
                                </div>
                                <div className="w-full lg:w-6/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                            Last Name
                                        </label>
                                        <input  {...formik.getFieldProps('lastname')} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder='Enter you surname' required />
                                    </div>
                                </div>
                                <div className="w-full lg:w-6/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                            Email address
                                        </label>
                                        <input {...formik.getFieldProps('email')} type="email" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder='Enter your email' required />
                                    </div>
                                </div>
                                <div className="w-full lg:w-6/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                            Mobile
                                        </label>
                                        <input  {...formik.getFieldProps('mobile')} type='text' className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder='Enter your mobile number' required />
                                    </div>
                                </div>
                                <div className="w-full lg:w-6/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                            Password
                                        </label>
                                        <input {...formik.getFieldProps('password')} type="password" id="myInput" className="border-0 px-3 py-3  mb-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder='Enter your password' required />
                                        <label >
                                            <input className='mr-1' type="checkbox" onClick={showpassword} />
                                            Show Password
                                        </label>
                                    </div>
                                </div>
                                <div className="w-full lg:w-6/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                            Confim Password
                                        </label>
                                        <input {...formik.getFieldProps('retype')} type="password" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder='ReEnter your password' required />
                                    </div>
                                </div>
                            </div>

                            <hr className="mt-6 border-b-1 border-blueGray-300" />

                            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                Contact Information
                            </h6>
                            <div className="flex flex-wrap">
                                <div className="w-full lg:w-12/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                            Address
                                        </label>
                                        <input {...formik.getFieldProps('address')} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder='Enter your Address' required />
                                    </div>
                                </div>
                                <div className="w-full lg:w-4/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                            City
                                        </label>
                                        <input {...formik.getFieldProps('city')} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder='City Name' required />
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col items-center mt-5'>
                                <button className="bg-blue-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type='submit'>
                                    Register
                                </button>
                            </div>
                            <p className='text-l text-gray-500 mt-4' >Already have account? <Link className='text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700' to={'/login'}>Login</Link></p>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
