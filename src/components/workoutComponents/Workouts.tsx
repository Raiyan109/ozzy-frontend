import Image, { StaticImageData } from "next/image";

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
                        <div key={workout.id} className="bg-white rounded-xl p-6 space-y-5">
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
                                <h3 className="text-[#4E4E4E]">{workout.name}</h3>
                                <button className="btn min-w-[80px]">Exercise</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Workouts
