// 'use client'
import { useAppSelector } from "@/redux/hooks";
import Image, { StaticImageData } from "next/image"

type Props = {
    id: number;
    name: string;
    description: string;
    duration: string;
    image: StaticImageData
}

const WorkoutDetails = ({ workout, workouts }: { workout: Props, workouts: Props[] }) => {
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

            <div className="flex-1 space-y-5">
                {workouts.map((item) => (
                    <div key={item.id} className="bg-white rounded-xl flex gap-12 items-center justify-between p-3">
                        <div className="flex items-center gap-4">
                            <Image
                                src={item.image}
                                alt={item.name}
                                height={80}
                                width={80}
                                className="w-24 object-contain rounded-xl"
                            />
                            <div className="flex flex-col gap-3">
                                <h1 className="text-[#4E4E4E] text-sm">{workout.name}</h1>
                                <h1 className="text-[#4E4E4E] ">{workout.duration}</h1>
                            </div>
                        </div>
                        <button className="btn min-w-[60px] px-2 ">Continue</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WorkoutDetails
