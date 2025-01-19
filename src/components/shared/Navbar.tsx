'use client'
import Image from 'next/image'
import logo from '@/assets/ozzy-nav-logo.png'
import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [color, setColor] = useState(false)
    const pathname = usePathname();

    const handleClick = () => {
        setOpen(!open);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // const changeColor = () => {
    //     if (window.scrollY >= 100) {
    //         setColor(true)
    //     }
    //     else {
    //         setColor(false)
    //     }
    // }
    // window.addEventListener('scroll', changeColor)

    return (
        <div>
            <div className="fixed top-0 left-0 w-full z-50 bg-[#F2F5F7] border-b backdrop-blur-lg bg-opacity-80">
                <div className="mx-auto max-w-[1580px] px-6 sm:px-6 lg:px-8 ">
                    <div className="relative flex h-16 justify-between">
                        <div className="flex flex-1 items-stretch justify-start">
                            <Link className="flex flex-shrink-0 items-center" href="/">
                                <Image
                                    src={logo}
                                    alt='Ozzy Logo'
                                    height={110}
                                    width={110}
                                />
                            </Link>
                        </div>
                        <div className="flex-1 md:hidden ease-in-out duration-300 flex items-center justify-end">
                            <label >
                                <div
                                    className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center"
                                >
                                    <input className="hidden peer" type="checkbox" onClick={handleClick} />
                                    <div
                                        className="w-[50%] h-[2px] bg-black rounded-sm transition-all duration-300 origin-left translate-y-[0.45rem] peer-checked:rotate-[-45deg]"
                                    ></div>
                                    <div
                                        className="w-[50%] h-[2px] bg-black rounded-md transition-all duration-300 origin-center peer-checked:hidden"
                                    ></div>
                                    <div
                                        className="w-[50%] h-[2px] bg-black rounded-md transition-all duration-300 origin-left -translate-y-[0.45rem] peer-checked:rotate-[45deg]"
                                    ></div>
                                </div>
                            </label>

                        </div>
                        <div className={`${open ? 'px-2 py-3 absolute top-20 bg-[#F2F5F7] w-full flex flex-col items-center justify-center text-white' : 'hidden'}  md:flex flex-col md:flex-row gap-x-5 gap-y-2 md:items-center md:p-0 sm:p-4 p-4 justify-between md:bg-transparent bg-darkBrown md:shadow-none shadow-md opacity-95`}>
                            <Link href='/' className={`${pathname === "/" ? "text-[#345C8C] text-sm font-medium" : "text-gray-700 hover:text-[#345C8C] text-sm font-medium"}`}>Home</Link>
                            <Link href='/workout' className={`${pathname === "/workout" ? "text-[#345C8C] text-sm font-medium" : "text-gray-700 hover:text-[#345C8C] text-sm font-medium"}`}>Workout plan</Link>
                            <Link href='/nutrition' className={`${pathname === "/nutrition" ? "text-[#345C8C] text-sm font-medium" : "text-gray-700 hover:text-[#345C8C] text-sm font-medium"}`}>Nutrition plan</Link>
                            <Link href='/' className={`${pathname === "/" ? "text-[#345C8C] text-sm font-medium" : "text-gray-700 hover:text-[#345C8C] text-sm font-medium"}`}>Sports plan</Link>
                            <Link href='/' className={`${pathname === "/" ? "text-[#345C8C] text-sm font-medium" : "text-gray-700 hover:text-[#345C8C] text-sm font-medium"}`}>Subscription</Link>
                            <Link className="btn"
                                href="/signup">Sign up
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
