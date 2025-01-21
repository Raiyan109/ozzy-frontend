import Image, { StaticImageData } from "next/image";
import SingleWorkout from "./SingleWorkout";

type Props = {
    id: number;
    name: string;
    image: StaticImageData,
    description: string,
    duration: string,
}

const Workouts = ({ workouts }: { workouts: Props[] }) => {
    return (
        <div className="py-20">
            <div className="flex items-center gap-3">
                <h1 className="text-[18px] pl-8">Work 1 Plan</h1>
                <div className="flex items-center gap-2">
                    <button className="btn min-w-[80px]">Warmup</button>
                    <button className="btn bg-transparent text-[#345C8C] min-w-[80px]">Main Exercises</button>
                    <button className="btn bg-transparent text-[#345C8C] min-w-[80px]">Dynamic Strectches</button>
                </div>
            </div>
            <div className="flex items-center justify-center py-5">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-14">
                    {workouts.map((workout) => (
                        <SingleWorkout key={workout.id} workout={workout} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Workouts
