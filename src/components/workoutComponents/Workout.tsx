import WorkoutHero from "./WorkoutHero"
import WorkoutImg from "@/assets/workout-img.png"
import Workouts from "./Workouts"


const Workout = () => {
    const workouts = [
        {
            id: 1,
            name: 'Monday-Chest day',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita suscipit error quas porro qui. Non',
            duration: '10 minutes',
            image: WorkoutImg
        },
        {
            id: 2,
            name: 'Monday-Chest day',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita suscipit error quas porro qui. Non',
            duration: '10 minutes',
            image: WorkoutImg
        },
        {
            id: 3,
            name: 'Monday-Chest day',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita suscipit error quas porro qui. Non',
            duration: '10 minutes',
            image: WorkoutImg
        },
        {
            id: 4,
            name: 'Monday-Chest day',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita suscipit error quas porro qui. Non',
            duration: '10 minutes',
            image: WorkoutImg
        },
        {
            id: 5,
            name: 'Monday-Chest day',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita suscipit error quas porro qui. Non',
            duration: '10 minutes',
            image: WorkoutImg
        },
        {
            id: 6,
            name: 'Monday-Chest day',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita suscipit error quas porro qui. Non',
            duration: '10 minutes',
            image: WorkoutImg
        },
        {
            id: 7,
            name: 'Monday-Chest day',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita suscipit error quas porro qui. Non',
            duration: '10 minutes',
            image: WorkoutImg
        },
        {
            id: 8,
            name: 'Monday-Chest day',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita suscipit error quas porro qui. Non',
            duration: '10 minutes',
            image: WorkoutImg
        },
    ]
    return (
        <div className="mx-auto max-w-[1500px]">
            <WorkoutHero />
            <Workouts workouts={workouts} />
        </div>
    )
}

export default Workout
