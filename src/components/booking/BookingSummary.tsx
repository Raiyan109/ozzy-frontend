

const BookingSummary = () => {
    return (
        <div className="py-20 mx-auto max-w-[700px] h-screen">
            <div className="bg-white p-4 rounded-xl space-y-2">
                {/* Thanks */}
                <div className="bg-[#55769F] rounded-xl py-5 px-3 space-y-2">
                    <h1 className="text-white text-sm">Thanks for booking</h1>
                    <h1 className="text-white text-sm">Fantastic! Your booking was successful. We’ll send you a confirmation email with the details below. Check your spam folder if it doesn't arrive in the next few minutes, it might be hiding there.</h1>
                </div>
                {/* Location */}
                <div>
                    <div className="bg-[#55769F] rounded-xl p-2">
                        <h1 className="text-white text-xl">Location</h1>

                    </div>
                    {/* Map */}
                    <div className="h-32">
                        <div className="responsive-map mb-20">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14592.428723553468!2d90.37924195918481!3d23.88581775724912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c46b6de8f207%3A0x638eb6830d10167d!2sSector%2010%2C%20Dhaka%201230!5e0!3m2!1sen!2sbd!4v1724650366545!5m2!1sen!2sbd" width="200" height="120" allowFullScreen style={{ border: '0' }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
                {/* Service */}
                <div>
                    <div className="bg-[#55769F] rounded-xl p-2">
                        <h1 className="text-white text-xl">Service</h1>

                    </div>
                    <div className="h-12">

                    </div>
                </div>
                {/* Time */}
                <div>
                    <div className="bg-[#55769F] rounded-xl p-2">
                        <h1 className="text-white text-xl">Time</h1>

                    </div>
                    <div className="h-12">

                    </div>
                </div>
                {/* Payment */}
                <div className="border border-[#4E4E4E] py-12 px-2 rounded-xl">
                    <div className="flex items-center justify-between">
                        <h1>Payment is due at your appointment.</h1>
                        <button className="btn bg-[#55769F] min-w-[80px]">Due to appointment</button>
                    </div>
                </div>
                {/* Cancel */}
                <div className="border border-[#4E4E4E] py-12 px-2 rounded-xl">
                    <h1 className="text-[#4E4E4E]/80 text-sm">Please cancel or reschedule before 12:00 PM on Monday, January 13. See full policy</h1>
                </div>
            </div>
        </div>
    )
}

export default BookingSummary
