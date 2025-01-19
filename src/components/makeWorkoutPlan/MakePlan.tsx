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
                <form className="max-w-xl w-full mx-auto bg-[#FAFAFA66] p-7 rounded-xl">
                    <h1 className="text-[#4E4E4E] text-2xl mb-1 text-center py-5">Generate your routine for  <span className='text-[#345C8C]'>Workout Plans</span></h1>
                    <div className='space-y-1 mb-3'>
                        <h1 className='text-[#4E4E4E]'>Fitness Level ?</h1>
                        <div className="flex items-center border border-[#345C8C] py-2 px-3 rounded-full bg-white mb-4">
                            <select className=" outline-none border-none text-[#345C8C] placeholder:text-[#345C8C] bg-transparent w-full" defaultValue="">
                                <option value="" disabled>
                                    Select level
                                </option>
                                <option value="basic">Basic</option>
                                <option value="intermediate">Intermediate</option>
                                <option value="advanced">Advanced</option>
                            </select>
                        </div>
                    </div>
                    <div className='space-y-1 mb-3'>
                        <h1 className='text-[#4E4E4E]'>Where do you train ?</h1>
                        <div className="flex items-center border border-[#345C8C] py-2 px-3 rounded-full bg-white mb-4">
                            {/* <TbGenderAndrogyne className="h-5 w-5 text-[#345C8C] font-bold" /> */}
                            <select className="outline-none border-none text-[#345C8C] placeholder:text-[#345C8C] bg-transparent w-full" defaultValue="">
                                <option value="" disabled>
                                    Select place of training
                                </option>
                                <option value="at home">At Home</option>
                                <option value="at the gym">At the gym</option>
                            </select>
                        </div>
                    </div>
                    <div className='space-y-1 mb-3'>
                        <h1 className='text-[#4E4E4E]'>How long do you train ?</h1>
                        <div className="flex items-center border border-[#345C8C] py-2 px-3 rounded-full bg-white mb-4">
                            <select className="outline-none border-none text-[#345C8C] placeholder:text-[#345C8C] bg-transparent w-full" defaultValue="">
                                <option value="" disabled>
                                    Select time
                                </option>
                                <option value="20">20 minutes</option>
                                <option value="60">60 minutes</option>
                            </select>
                        </div>
                    </div>
                    <div className='space-y-1 mb-3'>
                        <h1 className='text-[#4E4E4E]'>Interested in growing a specific muscle ?</h1>
                        <div className="flex items-center border border-[#345C8C] py-2 px-3 rounded-full bg-white mb-4">
                            <select className="outline-none border-none text-[#345C8C] placeholder:text-[#345C8C] bg-transparent w-full" defaultValue="">
                                <option value="" disabled>
                                    Select muscle
                                </option>
                                <option value="general growth">General Growth</option>
                                <option value="legs and glutes">Legs and glues</option>
                                <option value="back">Back</option>
                                <option value="chest">Chest</option>
                                <option value="shoulders and arms">Shoulders and arms</option>
                                <option value="chest">Chest</option>
                            </select>
                        </div>
                    </div>
                    <div className='space-y-1 mb-3'>
                        <h1 className='text-[#4E4E4E]'>Any injuries ?</h1>
                        <div className="flex items-center border border-[#345C8C] py-2 px-3 rounded-full bg-white mb-4">
                            <select className="outline-none border-none text-[#345C8C] placeholder:text-[#345C8C] bg-transparent w-full" defaultValue="">
                                <option value="" disabled>
                                    Select injury
                                </option>
                                <option value="lower back">Lower Back</option>
                                <option value="knees">Knees</option>
                                <option value="shoulder">Shoulder (Rotator cuff)</option>
                                <option value="n/a">N/A</option>
                            </select>
                        </div>
                    </div>


                    <div className='flex justify-center items-center'>
                        <button type="submit" className="w-fit px-20 bg-[#345C8C] mt-4 py-2 rounded-full text-white font-semibold mb-2">Generate Routine</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default MakePlan
