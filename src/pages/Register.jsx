import React from 'react'
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import styles from '../pages/Styles/login.module.css'

export const Register = () => {
    return (
        <section className={`py-1 ${styles.registerbg}`} >
            <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                    <div class="text-center dark:bg-neutral-900 rounded-lg">
                        <img
                            class="mx-auto w-56 transition duration-300 ease-in-out hover:scale-110"
                            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                            alt="logo" />
                        <h4 class="mb-12 mt-1 pb-1 text-xl font-semibold text-white  transition duration-300 ease-in-out hover:scale-110">
                            Welcome to doctor appointment system
                        </h4>
                    </div>
                    <div className={`mb-0 px-6 py-6 ${styles.registerglass}`}>

                        <div className="text-center flex justify-between">

                            <h6 className="text-blueGray-700 text-xl font-bold">
                                Register
                            </h6>
                            <button className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">
                                Reset
                            </button>
                        </div>
                    </div>
                    <div className={`flex-auto px-4 lg:px-10 py-10 pt-0 ${styles.registerglass}`}>
                        <form>
                            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                User Information
                            </h6>
                            <div className="flex flex-wrap">
                                <div className="w-full lg:w-6/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                                            First Name
                                        </label>
                                        <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder='Enter your name' required />
                                    </div>
                                </div>
                                <div className="w-full lg:w-6/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                                            Last Name
                                        </label>
                                        <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder='Enter you surname' required />
                                    </div>
                                </div>
                                <div className="w-full lg:w-6/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                                            Email address
                                        </label>
                                        <input type="email" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder='Enter your email' required />
                                    </div>
                                </div>
                                <div className="w-full lg:w-6/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                                            Mobile
                                        </label>
                                        <input type='text' className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder='Enter your mobile number' required />
                                    </div>
                                </div>
                                <div className="w-full lg:w-6/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                                            Password
                                        </label>
                                        <input type="password" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder='Enter your password' required />
                                    </div>
                                </div>
                                <div className="w-full lg:w-6/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                                            Confim Password
                                        </label>
                                        <input type="password" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder='ReEnter your password' required />
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
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                                            Address
                                        </label>
                                        <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder='Enter your Address' required />
                                    </div>
                                </div>
                                <div className="w-full lg:w-4/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                                            City
                                        </label>
                                        <input type="email" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder='City Name' required />
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col items-center mt-5'>
                                <button className="bg-blue-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type='submit'>
                                    Register
                                </button>
                            </div>
                            <p className='text-l text-gray-500' >Already have account? <Link className='text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700' to={'/login'}>Login</Link></p>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
