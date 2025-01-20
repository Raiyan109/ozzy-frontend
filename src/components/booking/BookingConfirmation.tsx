'use client'
import Link from "next/link"
import upArrow from "@/assets/booking-up.png"
import calendarImg from "@/assets/booking-calendar.png"
import Image from "next/image"
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useState } from "react"


const BookingConfirmation = () => {
    const [phoneNumber, setPhoneNumber] = useState("");

    return (
        <div className="mt-20 h-screen">
            <h1 className="text-center text-2xl">Checkout</h1>
            <div className="flex justify-between gap-96 mx-auto max-w-[1480px]">
                <div className="flex-1">
                    <div className="flex items-center md:p-8 p-6  h-full ">
                        <form className="max-w-2xl w-full mx-auto  p-7 rounded-xl">
                            <h1 className="text-[#4E4E4E] text-xl mb-1 py-2">Contact Info</h1>
                            <div className="flex items-center border border-[#345C8C] py-2 px-3 rounded-xl bg-white mb-4">
                                {/* <input className="pl-5 outline-none border-none text-[#345C8C] placeholder:text-[#345C8C]" type="text" name="" id="" placeholder="Phone Number" /> */}
                                <PhoneInput
                                    placeholder="Phone number"
                                    value={phoneNumber}
                                    onChange={(value) => setPhoneNumber(value || '')}
                                    defaultCountry="US"
                                    className="pl-2 outline-none border-none text-[#345C8C] placeholder:text-[#345C8C] w-full"
                                />
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="flex items-center border border-[#345C8C] py-2 px-3 rounded-xl bg-white mb-4">
                                    <input className="pl-2 outline-none border-none text-[#345C8C] placeholder:text-[#345C8C]" type="text" name="" id="" placeholder="First Name" />
                                </div>


                                <div className="flex items-center border border-[#345C8C] py-2 px-3 rounded-xl bg-white mb-4">
                                    <input className="pl-2 outline-none border-none text-[#345C8C] placeholder:text-[#345C8C]" type="text" name="" id="" placeholder="Last Name" />
                                </div>
                            </div>

                            <div className="flex items-center border border-[#345C8C] py-2 px-3 rounded-xl bg-white mb-8">
                                <input className="pl-2 outline-none border-none text-[#345C8C] placeholder:text-[#345C8C]" type="text" name="" id="" placeholder="Email" />
                            </div>

                            <div className="space-y-3 border-b pb-12">
                                <p className="text-lg text-[#4E4E4E]">Cancellation policy</p>
                                <p className="text-[#4E4E4E]/80 text-sm">Please cancel or reschedule before 12:00 PM on Monday, January 13. See full policy</p>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="flex-1">
                    <div className="flex flex-col items-center p-2 h-full lg:w-11/12 lg:ml-auto border rounded-xl">
                        <form className="max-w-lg w-full mx-auto bg-[#FAFAFA66] p-2 rounded-xl">
                            <h1 className="text-lg mb-1 py-2">Appointment Summary</h1>
                            <div className="flex items-center justify-between border-b pb-7">
                                <div className="flex items-center gap-2">
                                    <Image
                                        src={calendarImg}
                                        alt='Ozzy Logo'
                                        height={40}
                                        width={40}
                                    />
                                    <div>
                                        <h1 className="text-sm">Tuesday, Jan 14</h1>
                                        <h1 className="text-xs">12:00 – 1:00 PM EST </h1>
                                        <h1 className="text-xs">Total determined at appointment</h1>
                                    </div>
                                </div>
                                <div>
                                    <Image
                                        src={upArrow}
                                        alt='Ozzy Logo'
                                        height={40}
                                        width={40}
                                    />
                                </div>
                            </div>

                            <div className="border-b py-4">
                                <div className="flex justify-between items-center">
                                    <h1>Nutrition Consultant</h1>
                                    <h1>-</h1>
                                </div>
                                <div className="flex justify-between items-center">
                                    <h1>Subtotal</h1>
                                    <h1>-</h1>
                                </div>
                                <div className="flex justify-between items-center">
                                    <h1>Taxes</h1>
                                    <h1>-</h1>
                                </div>
                                <div className="flex justify-between items-center">
                                    <h1>Total</h1>
                                    <h1>-</h1>
                                </div>
                            </div>

                            <div className="border-b py-4">
                                <div className="flex justify-between items-center">
                                    <h1>Due today</h1>
                                    <h1>100$</h1>
                                </div>
                                <p>This appointment includes a service with a variable price. The price will be determined at the appointment.</p>
                            </div>


                        </form>
                        <button type="submit" className="block min-w-[200px] bg-[#345C8C] mt-4 py-2 rounded-full text-white font-semibold mb-2">Book Appointment</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookingConfirmation
