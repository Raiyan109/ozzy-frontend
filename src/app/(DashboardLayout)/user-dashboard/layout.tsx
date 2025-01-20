import { ReactNode } from "react"
import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"


const UserDashboardLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="">
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default UserDashboardLayout 