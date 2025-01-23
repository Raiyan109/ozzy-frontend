'use client'
import { useAppSelector } from "@/redux/hooks";
import Image, { StaticImageData } from "next/image"
import { useRef, useState } from "react";
import { FiPlayCircle } from "react-icons/fi";
import Confetti from "react-confetti";

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
    const [isVideoVisible, setIsVideoVisible] = useState<boolean>(false);
    const [showConfetti, setShowConfetti] = useState<boolean>(false);
    const [showPopup, setShowPopup] = useState<boolean>(false);

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

    const handleImageClick = () => {
        setIsVideoVisible(true);
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    const handleCloseVideo = () => {
        setIsVideoVisible(false);
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    const handleContinue = () => {
        console.log('ok');

        setShowConfetti(true);
        setShowPopup(true);
    }

    const handleClosePopup = () => {
        setShowPopup(false);
        setShowConfetti(false);
    };

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
                {!isVideoVisible && (
                    <div
                        className="relative w-full max-w-[500px] h-[300px] rounded-xl overflow-hidden cursor-pointer"
                        onClick={handleImageClick}
                    >
                        <Image
                            src={workout.image}
                            alt="Workout Thumbnail"
                            layout="fill"
                            className="object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                            <div className="">
                                <FiPlayCircle className="h-10 w-10 text-white" />
                            </div>
                        </div>
                    </div>
                )}
                {/* Custom Video Player */}
                {/* {isVideoVisible && (
                    <div className="relative">
                        <video
                            ref={videoRef}
                            onTimeUpdate={handleTimeUpdate}
                            onEnded={handleVideoEnd}
                            className="w-full max-w-[500px] h-[300px] object-cover rounded-xl"
                            controls
                        >
                            <source src="/videos/snow.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <button
                            onClick={handleCloseVideo}
                            className="absolute top-0 right-0 lg:right-44 bg-gray-800 text-white rounded-full p-2 w-9 h-9 flex items-center justify-center"
                        >
                            ✕
                        </button>
                    </div>
                )} */}
                {/* Progress Bar */}
                {/* {isVideoVisible && (
                    <div className="h-2 bg-gray-300 w-[500px]">
                        <div className="w-full h-4 bg-gray-400 rounded-full">
                            <div
                                className="h-full text-center text-xs text-white bg-[#345C8C] rounded-full"
                                style={{ width: `${progress}%` }}
                            >
                                {Math.floor(progress)}%
                            </div>
                        </div>
                    </div>
                )} */}

                <div className="flex items-center gap-[345px]">
                    <h3 className="text-[#4E4E4E]">{workout.name}</h3>
                    <button className="btn min-w-[60px] px-2" onClick={handleContinue}>Continue</button>
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

            {/* Video Popup Modal */}
            {isVideoVisible && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
                    <div className="relative bg-white p-4 rounded-xl">
                        <video
                            ref={videoRef}
                            onTimeUpdate={handleTimeUpdate}
                            onEnded={handleVideoEnd}
                            className="w-full max-w-[500px] h-[300px] object-cover rounded-xl"
                            controls
                        >
                            <source src="/videos/snow.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <button
                            onClick={handleCloseVideo}
                            className="absolute top-2 right-2 bg-gray-800 text-white rounded-full p-2 w-9 h-9 flex items-center justify-center"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}

            {/* Confetti Effect */}
            {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}

            {/* Popup with Badge */}
            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/50">
                    <div className="bg-white p-6 rounded-xl shadow-lg space-y-4 text-center">
                        <h2 className="text-2xl font-bold text-[#4E4E4E]">Congratulations!</h2>
                        <p className="text-[#4E4E4E]/80">You've earned a badge for completing the workout!</p>
                        <div className="mx-auto w-16 h-16 rounded-full bg-[#345C8C] flex items-center justify-center text-white text-xl font-bold">
                            🎖
                        </div>
                        <button
                            onClick={handleClosePopup}
                            className="mt-4 px-6 py-2 bg-[#345C8C] text-white rounded-lg"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default WorkoutDetails
