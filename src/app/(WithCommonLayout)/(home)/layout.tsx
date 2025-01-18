import Footer from "@/components/shared/Footer"
import Navbar from "@/components/shared/Navbar"
import { ReactNode } from "react"

const HomeLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="">
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default HomeLayout 