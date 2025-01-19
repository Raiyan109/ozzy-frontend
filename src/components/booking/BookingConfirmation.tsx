import Link from "next/link"


const BookingConfirmation = () => {
    return (
        <div>
            <h1>Checkout</h1>
            <div className="flex">
                <div>
                    <div className="flex items-center md:p-8 p-6 bg-[#345C8C] h-full lg:w-11/12 lg:ml-auto">
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
                                {/* <CiMail className="h-5 w-5 text-[#345C8C] font-bold" /> */}
                                <input className="pl-5 outline-none border-none text-[#345C8C] placeholder:text-[#345C8C]" type="text" name="" id="" placeholder="Email" />
                            </div>
                            <div className="flex items-center border border-[#345C8C] py-2 px-3 rounded-full bg-white mb-4">
                                {/* <TbGenderAndrogyne className="h-5 w-5 text-[#345C8C] font-bold" /> */}
                                <select className="pl-5 outline-none border-none text-[#345C8C] placeholder:text-[#345C8C] bg-transparent w-full" defaultValue="">
                                    <option value="" disabled>
                                        Gender
                                    </option>
                                    <option value="option1">Male</option>
                                    <option value="option2">Female</option>
                                </select>
                            </div>

                            <div className="flex items-center border border-[#345C8C] py-2 px-3 rounded-full bg-white mb-4">
                                {/* <FaPhone className="h-4 w-4 text-[#345C8C]" /> */}
                                <input className="pl-5 outline-none border-none text-[#345C8C] placeholder:text-[#345C8C]" type="text" name="" id="" placeholder="Phone Number" />
                            </div>
                            <div className="flex items-center border border-[#345C8C] py-2 px-3 rounded-full bg-white mb-4">
                                {/* <CiLock className="h-5 w-5 text-[#345C8C] font-bold" /> */}
                                <input className="pl-5 outline-none border-none text-[#345C8C] placeholder:text-[#345C8C]" type="text" name="" id="" placeholder="Password" />
                            </div>

                            <button type="submit" className="block w-full bg-[#345C8C] mt-4 py-2 rounded-full text-white font-semibold mb-2">Register</button>
                            <div className='text-center'>
                                <span className="text-sm ml-2 cursor-pointer  text-white">Already  have an account ?  </span>
                                <Link href='/signin' className='text-[#345C8C]'>Sign In</Link>
                            </div>

                        </form>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default BookingConfirmation
