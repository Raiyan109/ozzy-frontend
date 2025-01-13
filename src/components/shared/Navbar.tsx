import Image from 'next/image'
import logo from '@/assets/ozzy-nav-logo.png'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div>
            <div className="fixed top-0 left-0 w-full z-50 bg-white border-b backdrop-blur-lg bg-opacity-80">
                <div className="mx-auto max-w-[1580px] px-6 sm:px-6 lg:px-8 ">
                    <div className="relative flex h-16 justify-between">
                        <div className="flex flex-1 items-stretch justify-start">
                            <Link className="flex flex-shrink-0 items-center" href="/">
                                <Image
                                    src={logo}
                                    alt='Ozzy Logo'
                                    height={80}
                                    width={80}
                                />
                            </Link>
                        </div>
                        <div className="flex-shrink-0 flex px-2 py-3 items-center space-x-8">
                            <Link href='/' className="text-gray-700 hover:text-[#EB4B73] text-sm font-medium">Home</Link>
                            <Link href='/' className="text-gray-700 hover:text-[#EB4B73] text-sm font-medium">Workout plan</Link>
                            <Link href='/' className="text-gray-700 hover:text-[#EB4B73] text-sm font-medium">Nutrition plan</Link>
                            <Link href='/' className="text-gray-700 hover:text-[#EB4B73] text-sm font-medium">Sports plan</Link>
                            <Link href='/' className="text-gray-700 hover:text-[#EB4B73] text-sm font-medium">Subscription</Link>
                            <a className="btn"
                                href="#">Sign up
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
