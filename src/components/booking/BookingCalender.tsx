'use client'
import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"

// Helper function to format the date
const formatDate = (date: Date | undefined) => {
    if (!date) return "";
    const today = new Date();
    const isToday = date.toDateString() === today.toDateString();

    const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        month: "short",
        day: "numeric",
        year: "numeric",
    };

    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);
    return isToday ? `Today, ${formattedDate}` : formattedDate;
};

const BookingCalender = () => {
    const [date, setDate] = useState<Date | undefined>(new Date());

    console.log(formatDate(date), 'formatted date from BookingCalender');

    return (
        <div>
            <div className="flex justify-center items-start mt-16 pt-32">
                <div className="flex-1">
                    <div className="flex flex-col gap-12 items-center justify-center mb-12">
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            className="rounded-md border"
                        />

                    </div>

                </div>
                <div className="flex-1 space-y-3">
                    <h1 className="text-[#202020]">Appointment Summary</h1>
                    <div className="space-y-1 border border-[#4E4E4E] w-72 p-3 rounded-xl">
                        <h1 className="text-[#202020]">Nutrition Consult</h1>
                        <div className="flex items-center gap-4">
                            <p className="text-[#4E4E4E]/80">Price varies</p>
                            <p className="text-[#4E4E4E]/80">•</p>
                            <p className="text-[#4E4E4E]/80">1 Hour</p>
                        </div>

                    </div>
                </div>

            </div>
            <div className="pb-12">
                <div className="border-t pt-6 w-1/5 ml-[350px]">
                    <div>
                        <p className="text-[#4E4E4E]">{formatDate(date)}</p>
                    </div>
                    <div className="space-y-1 mt-8">
                        <h1 className="text-[#4E4E4E] text-2xl">Morning</h1>
                        <p className="text-[#4E4E4E] text-sm">No Availability</p>
                    </div>
                    <div className="space-y-1 mt-8">
                        <h1 className="text-[#4E4E4E] text-2xl">Afternoon</h1>
                        <div className="flex items-center gap-5">
                            <button className="btn bg-[#F7B9C9] text-[#4E4E4E] border-none outline-none rounded-xl py-3 text-xl flex items-center justify-center hover:bg-[#F7B9C9]/80 hover:text-[#4E4E4E]">2:00 PM</button>
                            <button className="btn bg-[#F7B9C9] text-[#4E4E4E] border-none outline-none rounded-xl py-3 px-1 max-w-[70px] text-xl flex items-center justify-center hover:bg-[#F7B9C9]/80 hover:text-[#4E4E4E]">3:40 PM</button>
                        </div>
                    </div>
                    <div className="space-y-1 mt-8">
                        <h1 className="text-[#4E4E4E] text-2xl">Evening</h1>
                        <p className="text-[#4E4E4E] text-sm">No Availability</p>
                    </div>
                    <div className="mt-12">
                        <button type="submit" className="w-fit px-20 bg-[#345C8C] mt-4 py-2 rounded-full text-white font-semibold mb-2">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingCalender;
