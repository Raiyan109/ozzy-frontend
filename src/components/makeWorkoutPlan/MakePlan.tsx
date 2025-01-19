import signupPage from '@/assets/signup.png'
import Image from 'next/image'
import Link from 'next/link';
import { CiMail, CiLock } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";
import { TbGenderAndrogyne } from "react-icons/tb";

const MakePlan = () => {
    return (
        <div>
            <div className="flex items-center justify-center h-screen">
                <form className="max-w-lg w-full mx-auto bg-[#FAFAFA66] p-7 rounded-xl">
                    <h1 className="text-white font-bold text-2xl mb-1 text-center py-5">Sign up</h1>
                    <div className="flex items-center border border-[#345C8C] py-2 px-3 rounded-full bg-white mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#345C8C]" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                clipRule="evenodd" />
                        </svg>
                        <input className="pl-5 outline-none border-none text-[#345C8C] placeholder:text-[#345C8C]" type="text" name="" id="" placeholder="Name" />
                    </div>
                    <div className="flex items-center border border-[#345C8C] py-2 px-3 rounded-full bg-white mb-4">
                        <CiMail className="h-5 w-5 text-[#345C8C] font-bold" />
                        <input className="pl-5 outline-none border-none text-[#345C8C] placeholder:text-[#345C8C]" type="text" name="" id="" placeholder="Email" />
                    </div>
                    <div className="flex items-center border border-[#345C8C] py-2 px-3 rounded-full bg-white mb-4">
                        <TbGenderAndrogyne className="h-5 w-5 text-[#345C8C] font-bold" />
                        <select className="pl-5 outline-none border-none text-[#345C8C] placeholder:text-[#345C8C] bg-transparent w-full">
                            <option value="" disabled selected>
                                Gender
                            </option>
                            <option value="option1">Male</option>
                            <option value="option2">Female</option>
                        </select>
                    </div>

                    <div className="flex items-center border border-[#345C8C] py-2 px-3 rounded-full bg-white mb-4">
                        <FaPhone className="h-4 w-4 text-[#345C8C]" />
                        <input className="pl-5 outline-none border-none text-[#345C8C] placeholder:text-[#345C8C]" type="text" name="" id="" placeholder="Phone Number" />
                    </div>
                    <div className="flex items-center border border-[#345C8C] py-2 px-3 rounded-full bg-white mb-4">
                        <CiLock className="h-5 w-5 text-[#345C8C] font-bold" />
                        <input className="pl-5 outline-none border-none text-[#345C8C] placeholder:text-[#345C8C]" type="text" name="" id="" placeholder="Password" />
                    </div>

                    <button type="submit" className="block w-full bg-[#345C8C] mt-4 py-2 rounded-full text-white font-semibold mb-2">Register</button>
                    <div className='text-center'>
                        <span className="text-sm ml-2 cursor-pointer  text-white">Already  have an account ?  </span>
                        <Link href='/signin' className='text-[#345C8C]'>Sign In</Link>
                    </div>
                    {/* <div className="mb-12">
                                <h3 className="text-2xl font-bold text-yellow-400">Create an account</h3>
                            </div>

                            <div>
                                <label className="text-white text-xs block mb-2">Full Name</label>
                                <div className="relative flex items-center">
                                    <input name="name" type="text" required className="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-yellow-400 pl-2 pr-8 py-3 outline-none" placeholder="Enter name" />
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2" viewBox="0 0 24 24">
                                        <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                                        <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" data-original="#000000"></path>
                                    </svg>
                                </div>
                            </div>
                            <div className="mt-8">
                                <label className="text-white text-xs block mb-2">Email</label>
                                <div className="relative flex items-center">
                                    <input name="email" type="text" required className="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-yellow-400 pl-2 pr-8 py-3 outline-none" placeholder="Enter email" />
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2" viewBox="0 0 682.667 682.667">
                                        <defs>
                                            <clipPath id="a" clipPathUnits="userSpaceOnUse">
                                                <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                                            </clipPath>
                                        </defs>
                                        <g clipPath="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                                            <path fill="none" strokeMiterlimit="10" strokeWidth="40" d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z" data-original="#000000"></path>
                                            <path d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z" data-original="#000000"></path>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                            <div className="mt-8">
                                <label className="text-white text-xs block mb-2">Password</label>
                                <div className="relative flex items-center">
                                    <input name="password" type="password" required className="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-yellow-400 pl-2 pr-8 py-3 outline-none" placeholder="Enter password" />
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2 cursor-pointer" viewBox="0 0 128 128">
                                        <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
                                    </svg>
                                </div>
                            </div>

                            <div className="flex items-center mt-8">
                                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 rounded" />
                                <label htmlFor="remember-me" className="text-white ml-3 block text-sm">
                                    I accept the <a href="javascript:void(0);" className="text-yellow-500 font-semibold hover:underline ml-1">Terms and Conditions</a>
                                </label>
                            </div>

                            <div className="mt-8">
                                <button type="button" className="w-max shadow-xl py-3 px-6 text-sm text-gray-800 font-semibold rounded bg-transparent bg-yellow-400 hover:bg-yellow-500 focus:outline-none">
                                    Register
                                </button>
                                <p className="text-sm text-white mt-8">Already have an account? <a href="javascript:void(0);" className="text-yellow-400 font-semibold hover:underline ml-1">Login here</a></p>
                            </div> */}
                </form>
            </div>
        </div>
    )
}

export default MakePlan
