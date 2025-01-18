import SigninImg from '@/assets/login.png'
import Image from 'next/image'
import Link from 'next/link';
import { CiMail, CiLock } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";
import { TbGenderAndrogyne } from "react-icons/tb";

const Signin = () => {
    return (
        <div>
            <div className=" bg-white md:h-screen">
                <div className="grid md:grid-cols-2 items-center gap-8 h-full">
                    <div className="max-md:order-1 p-4">
                        {/* <img src="https://readymadeui.com/signin-image.webp" className="lg:max-w-[85%] w-full h-full aspect-square object-contain block mx-auto" alt="login-image" /> */}
                        <Image
                            src={SigninImg}
                            alt='Sign up page'
                            height={800}
                            width={800}
                            className="lg:max-w-[85%] w-full h-full aspect-square object-contain block mx-auto"
                        />
                    </div>

                    <div className="flex items-center md:p-8 p-6 bg-[#345C8C] h-full lg:w-11/12 lg:ml-auto">
                        <form className="max-w-lg w-full mx-auto bg-[#FAFAFA66] p-7 rounded-xl">
                            <h1 className="text-white font-bold text-2xl mb-1 text-center py-5">Sign in</h1>

                            <div className="flex items-center border border-[#345C8C] py-2 px-3 rounded-full bg-white mb-4">
                                <CiMail className="h-5 w-5 text-[#345C8C] font-bold" />
                                <input className="pl-5 outline-none border-none text-[#345C8C] placeholder:text-[#345C8C]" type="text" name="" id="" placeholder="Email" />
                            </div>
                            <div className="flex items-center border border-[#345C8C] py-2 px-3 rounded-full bg-white mb-4">
                                <CiLock className="h-5 w-5 text-[#345C8C] font-bold" />
                                <input className="pl-5 outline-none border-none text-[#345C8C] placeholder:text-[#345C8C]" type="text" name="" id="" placeholder="Password" />
                            </div>
                            <div className='flex justify-between items-center'>
                                <div className="flex items-center ">
                                    <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 rounded" />
                                    <label htmlFor="remember-me" className="text-white ml-3 block text-sm">
                                        Remember me
                                    </label>
                                </div>
                                <Link href='/' className="text-white ml-3 block text-sm">Forgot password?</Link>
                            </div>
                            <button type="submit" className="block w-full bg-[#345C8C] mt-4 py-2 rounded-full text-white font-semibold mb-2">Sign in</button>
                            <div className='text-center'>
                                <span className="text-sm ml-2 cursor-pointer  text-white">Don't have an account ?  </span>
                                <Link href='/signup' className='text-[#345C8C]'>Sign up</Link>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin
