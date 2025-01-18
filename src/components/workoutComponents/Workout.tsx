import WorkoutHero from "./WorkoutHero"
import WorkoutImg from "@/assets/workout-img.png"
import Workouts from "./Workouts"


const Workout = () => {
    const workouts = [
        {
            id: 1,
            name: 'Monday-Chest day',
            image: WorkoutImg
        },
        {
            id: 2,
            name: 'Monday-Chest day',
            image: WorkoutImg
        },
        {
            id: 3,
            name: 'Monday-Chest day',
            image: WorkoutImg
        },
        {
            id: 4,
            name: 'Monday-Chest day',
            image: WorkoutImg
        },
        {
            id: 5,
            name: 'Monday-Chest day',
            image: WorkoutImg
        },
        {
            id: 6,
            name: 'Monday-Chest day',
            image: WorkoutImg
        },
    ]
    return (
        <div className="mx-auto max-w-[1580px]">
            <WorkoutHero />
            <Workouts workouts={workouts} />
        </div>
    )
}

export default Workout
