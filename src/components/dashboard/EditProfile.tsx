import Image from "next/image"
import profileImage from "@/assets/profile-image.png"
import Link from "next/link"


const EditProfile = () => {
    return (
        <div className="py-20">
            <div className="mx-auto max-w-[700px] h-screen py-20">
                <div className="flex items-center justify-center mb-5">
                    <Image
                        src={profileImage}
                        alt='Profile Image'
                        height={140}
                        width={140}
                        className="object-contain rounded-full "
                    />
                </div>
                <div className="space-y-4 mb-12">
                    <div className="space-y-1">
                        <h1 className="text-[#4E4E4E]">Name</h1>
                        <div className="flex items-center border border-[#4E4E4E] py-2 px-3 rounded-xl bg-white mb-8">
                            <input className=" outline-none border-none text-[#4E4E4E] placeholder:text-[#4E4E4E]" type="text" name="" id="" placeholder="Name" />
                        </div>
                    </div>
                    <div className="space-y-1">
                        <h1 className="text-[#4E4E4E]">Email</h1>
                        <div className="flex items-center border border-[#4E4E4E] py-2 px-3 rounded-xl bg-white mb-8">
                            <input className=" outline-none border-none text-[#4E4E4E] placeholder:text-[#4E4E4E]" type="text" name="" id="" placeholder="Email" />
                        </div>
                    </div>
                    <div className="space-y-1">
                        <h1 className="text-[#4E4E4E]">Phone Number</h1>
                        <div className="flex items-center border border-[#4E4E4E] py-2 px-3 rounded-xl bg-white mb-8">
                            <input className=" outline-none border-none text-[#4E4E4E] placeholder:text-[#4E4E4E]" type="text" name="" id="" placeholder="Phone Number" />
                        </div>
                    </div>
                </div>
                <Link href='/booking' className="flex items-center justify-center">
                    <button className="btn min-w-[300px] py-1">Update</button>
                </Link>
            </div>
        </div>
    )
}

export default EditProfile
