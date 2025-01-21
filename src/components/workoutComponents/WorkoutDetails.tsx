'use client'
import { useAppSelector } from "@/redux/hooks";
import Image, { StaticImageData } from "next/image"
import { useRef, useState } from "react";
// import workoutVideo from '@/assets/videos/snow.mp4'

type Props = {
    id: number;
    name: string;
    description: string;
    duration: string;
    image: StaticImageData
}

const WorkoutDetails = ({ workout, workouts }: { workout: Props, workouts: Props[] }) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [progress, setProgress] = useState<number>(0);

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            const currentTime = videoRef.current.currentTime;
            const duration = videoRef.current.duration;
            setProgress((currentTime / duration) * 100);
        }
    };

    const handleVideoEnd = () => {
        setProgress(100);
    };
    console.log(workout.image.src, 'WorkoutDetails');

    return (
        <div className=" mt-[65px] mx-auto max-w-[1500px] px-6 sm:px-6 lg:px-8 py-32 flex">
            <div className="flex-1 space-y-4">
                {/* <Image
                    src={workout.image}
                    alt='Ozzy Logo'
                    height={300}
                    width={300}
                    className="h-[300px] w-[500px] object-cover rounded-xl"
                /> */}
                {/* Custom Video Player */}
                <div className=" w-full max-w-[500px] h-[300px] rounded-xl overflow-hidden">
                    <video
                        ref={videoRef}
                        onTimeUpdate={handleTimeUpdate}
                        onEnded={handleVideoEnd}
                        className="w-full h-full object-cover"
                        controls
                    >
                        <source src='/videos/snow.mp4' type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                </div>
                {/* Progress Bar */}
                <div className=" h-2 bg-gray-300 w-full">
                    <div
                        className="h-full bg-blue-500 transition-all duration-200"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
                <div className="flex items-center gap-[345px]">
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
                                <h1 className="text-[#4E4E4E] text-sm">{item.name}</h1>
                                <h1 className="text-[#4E4E4E] ">{item.duration}</h1>
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
