import heroImage from "@/assets/workout-hero.png";
import Link from "next/link";

const WorkoutHero = () => {
    return (
        <div
            style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%),url(${heroImage.src})`,
            }}
            // style={{
            //     backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%), url(${heroImage.src})`,
            // }}
            className=" bg-cover xl:bg-cover bg-no-repeat bg-center  h-[50vh] md:h-[70vh] lg:h-[calc(100vh-2px)] xl:h-[calc(100vh-87px)] w-full mt-16 md:mt-16 lg:mt-16 xl:mt-20 relative rounded-none xl:rounded-xl flex justify-center items-center"
        >
            <div className="space-y-6">
                <h1 className="text-white text-6xl max-w-lg leading-[90px] ">Get Ready for the Workout</h1>
                <Link href='/make-workout-plan'>
                    <button className="btn-circle">Make your plan </button>
                </Link>
            </div>
        </div>
    )
}

export default WorkoutHero
