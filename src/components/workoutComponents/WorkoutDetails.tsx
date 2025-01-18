'use client'
import { useAppSelector } from "@/redux/hooks";
import Image from "next/image"


const WorkoutDetails = ({ workoutId }: { workoutId: string }) => {
    const state = useAppSelector(state => state.test)
    console.log(state);
    return (
        <div>
            <div>
                {/* <Image
                                    src={logo}
                                    alt='Ozzy Logo'
                                    height={80}
                                    width={80}
                                /> */}
            </div>
            <div></div>
        </div>
    )
}

export default WorkoutDetails
