import Image, { StaticImageData } from "next/image";
import SingleWorkout from "./SingleWorkout";

type Props = {
    id: number;
    name: string;
    image: StaticImageData
}

const Workouts = ({ workouts }: { workouts: Props[] }) => {
    return (
        <div className="py-8">
            <h1>Your Exercise</h1>
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
