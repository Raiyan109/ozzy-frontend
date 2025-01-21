'use client'
import Image, { StaticImageData } from "next/image";
import { redirect } from "next/navigation";

type Props = {
    id: number;
    name: string;
    image: StaticImageData,
    description: string,
    duration: string,
}
const SingleWorkout = ({ workout }: { workout: Props }) => {
    return (
        <div className="bg-white rounded-xl p-6 space-y-5 cursor-pointer w-[350px]" onClick={() => redirect(`/workout/${workout?.id}`)}>
            <div className="flex items-center justify-center">
                <Image
                    src={workout.image}
                    alt={workout.name}
                    height={180}
                    width={180}
                    className="w-full"
                />
            </div>
            <div className="flex items-center justify-between gap-8">
                <div className="flex items-center gap-1 text-lg">
                    <h3 className="text-[#4E4E4E]">{workout.name}</h3>
                    <h3 className="text-[#4E4E4E]">{workout.duration}</h3>
                </div>
                <button className="btn min-w-[90px] text-sm px-2">View Details</button>
            </div>
        </div>
    )
}

export default SingleWorkout
