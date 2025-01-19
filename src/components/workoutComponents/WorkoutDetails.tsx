// 'use client'
import { useAppSelector } from "@/redux/hooks";
import Image, { StaticImageData } from "next/image"

type Props = {
    name: string;
    description: string;
    duration: string;
    image: StaticImageData
}

const WorkoutDetails = ({ workout }: { workout: Props }) => {
    console.log(workout.image.src, 'WorkoutDetails');

    return (
        <div className=" mt-[65px] mx-auto max-w-[1500px] px-6 sm:px-6 lg:px-8 py-32 flex">
            <div className="flex-1 space-y-4">
                <Image
                    src={workout.image}
                    alt='Ozzy Logo'
                    height={300}
                    width={300}
                    className="h-[300px] w-[500px] object-cover rounded-xl"
                />
                <div className="flex items-center gap-64">
                    <h3 className="text-[#4E4E4E]">{workout.name}</h3>
                    <button className="btn min-w-[60px] px-2 ">Continue</button>
                </div>
                <p className="text-[#4E4E4E]/80 text-sm max-w-sm">{workout.description}</p>
                <p className="text-[#4E4E4E]/80 text-sm max-w-sm">{workout.duration}</p>
            </div>
            <div className="flex-1"></div>
        </div>
    )
}

export default WorkoutDetails
