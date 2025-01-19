import signupPage from '@/assets/signup.png'
import Image from 'next/image'
import Link from 'next/link';
import { CiMail, CiLock } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";
import { TbGenderAndrogyne } from "react-icons/tb";

const MakeNutritionPlan = () => {
    return (
        <div>
            <div className="flex items-center justify-center h-screen">
                <form className="max-w-xl w-full mx-auto bg-[#FAFAFA66] p-7 rounded-xl">
                    <h1 className="text-[#4E4E4E] text-2xl mb-1 text-center py-5">Generate your routine for  <span className='text-[#345C8C]'>Meal Plans</span></h1>
                    <div className='space-y-1 mb-3'>
                        <h1 className='text-[#4E4E4E]'>Your Gender</h1>
                        <div className="flex items-center border border-[#345C8C] py-2 px-3 rounded-full bg-white mb-4">
                            <select className=" outline-none border-none text-[#345C8C] placeholder:text-[#345C8C] bg-transparent w-full" defaultValue="">
                                <option value="" disabled>
                                    Select gender
                                </option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                    </div>
                    <div className='space-y-1 mb-3'>
                        <h1 className='text-[#4E4E4E]'>Your Age</h1>
                        <div className="flex items-center border border-[#345C8C] py-2 px-3 rounded-full bg-white mb-4">
                            <input className="pl-5 outline-none border-none text-[#345C8C] placeholder:text-[#345C8C]" type="text" name="" id="" placeholder="" />
                        </div>
                    </div>
                    <div className='space-y-1 mb-3'>
                        <h1 className='text-[#4E4E4E]'>Your Height</h1>
                        <div className="flex items-center border border-[#345C8C] py-2 px-3 rounded-full bg-white mb-4">
                            <input className="pl-5 outline-none border-none text-[#345C8C] placeholder:text-[#345C8C]" type="text" name="" id="" placeholder="" />
                        </div>
                    </div>
                    <div className='space-y-1 mb-3'>
                        <h1 className='text-[#4E4E4E]'>Your Weight</h1>
                        <div className="flex items-center border border-[#345C8C] py-2 px-3 rounded-full bg-white mb-4">
                            <input className="pl-5 outline-none border-none text-[#345C8C] placeholder:text-[#345C8C]" type="text" name="" id="" placeholder="" />
                        </div>
                    </div>
                    <div className='space-y-1 mb-3'>
                        <h1 className='text-[#4E4E4E]'>Muscle Growth</h1>
                        <div className="flex items-center border border-[#345C8C] py-2 px-3 rounded-full bg-white mb-4">
                            <input className="pl-5 outline-none border-none text-[#345C8C] placeholder:text-[#345C8C]" type="text" name="" id="" placeholder="" />
                        </div>
                    </div>

                    <div className='space-y-1 mb-3'>
                        <h1 className='text-[#4E4E4E]'>Weight/Fat Loss</h1>
                        <div className="flex items-center border border-[#345C8C] py-2 px-3 rounded-full bg-white mb-4">
                            <select className="outline-none border-none text-[#345C8C] placeholder:text-[#345C8C] bg-transparent w-full" defaultValue="">
                                <option value="" disabled>
                                    Select
                                </option>
                                <option value="4">4 days</option>
                            </select>
                        </div>
                    </div>
                    <div className='space-y-1 mb-3'>
                        <h1 className='text-[#4E4E4E]'>Improving fitness performance (long/distance/speed running)</h1>
                        <div className="flex items-center border border-[#345C8C] py-2 px-3 rounded-full bg-white mb-4">
                            <select className="outline-none border-none text-[#345C8C] placeholder:text-[#345C8C] bg-transparent w-full" defaultValue="">
                                <option value="" disabled>
                                    Select
                                </option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>


                    <div className='flex justify-center items-center'>
                        <Link href='/generated-nutrition-plan'>
                            <button type="submit" className="w-fit px-20 bg-[#345C8C] mt-4 py-2 rounded-full text-white font-semibold mb-2">Generate Routine</button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default MakeNutritionPlan
