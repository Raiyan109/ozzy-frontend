'use client'
import resetImg from '@/assets/reset.png'
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { IoKeyOutline } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa";

const ResetPassword = () => {
    const router = useRouter()
    return (
        <div>
            <div className=" bg-white md:h-screen">
                <div className="grid md:grid-cols-2 items-center gap-8 h-full">
                    <div className="max-md:order-1 p-4">

                        <Image
                            src={resetImg}
                            alt='Reset password image'
                            height={800}
                            width={800}
                            className="lg:max-w-[85%] w-full h-full aspect-square object-contain block mx-auto"
                        />
                    </div>

                    <div className="flex items-center md:p-8 p-6 bg-[#345C8C] h-full lg:w-11/12 lg:ml-auto">
                        <form className="max-w-lg w-full mx-auto bg-[#FAFAFA66] p-7 rounded-xl">
                            <div className='space-y-6 mb-6'>
                                <div className='flex items-center gap-5 justify-center'>
                                    <FaArrowLeft className='text-white h-5 w-5 hover:text-[#345C8C] cursor-pointer' onClick={() => router.back()} />
                                    <h1 className="text-white font-bold text-2xl text-center ">Reset Password</h1>
                                </div>
                                <p className='text-white/75 text-center text-sm'>Your password must be 8-10 character long.</p>
                            </div>
                            <div className="flex items-center border border-[#345C8C] py-2 px-3 rounded-full bg-white mb-4">
                                <IoKeyOutline className="h-5 w-5 text-[#345C8C] font-bold" />
                                <input className="pl-5 outline-none border-none text-[#345C8C] placeholder:text-[#345C8C]" type="text" name="" id="" placeholder="Enter Password" />
                            </div>
                            <div className="flex items-center border border-[#345C8C] py-2 px-3 rounded-full bg-white mb-4">
                                <IoKeyOutline className="h-5 w-5 text-[#345C8C] font-bold" />
                                <input className="pl-5 outline-none border-none text-[#345C8C] placeholder:text-[#345C8C]" type="text" name="" id="" placeholder="Re-Enter Password" />
                            </div>

                            <button type="submit" className="block w-full bg-[#345C8C] mt-4 py-2 rounded-full text-white font-semibold mb-2">Confirm</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword
