import WorkoutDetails from "@/components/workoutComponents/WorkoutDetails";
import WorkoutImg from "@/assets/workout-img.png"

const workouts = [
    {
        id: 1,
        name: 'Full Body',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita suscipit error quas porro qui. Non',
        duration: '10 min',
        image: WorkoutImg
    },
    {
        id: 2,
        name: 'Jumping',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita suscipit error quas porro qui. Non',
        duration: '8 min',
        image: WorkoutImg
    },
    {
        id: 3,
        name: 'Light Job',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita suscipit error quas porro qui. Non',
        duration: '12 min',
        image: WorkoutImg
    },
    {
        id: 4,
        name: 'Arm Circles',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita suscipit error quas porro qui. Non',
        duration: '5 min',
        image: WorkoutImg
    },
    {
        id: 5,
        name: 'Squats',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita suscipit error quas porro qui. Non',
        duration: '9 min',
        image: WorkoutImg
    },
    {
        id: 6,
        name: 'Pushups',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita suscipit error quas porro qui. Non',
        duration: '5 min',
        image: WorkoutImg
    },
    {
        id: 7,
        name: 'Plank',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita suscipit error quas porro qui. Non',
        duration: '10 min',
        image: WorkoutImg
    },
    // {
    //     id: 8,
    //     name: 'Monday-Chest day',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita suscipit error quas porro qui. Non',
    //     duration: '10 minutes',
    //     image: WorkoutImg
    // },
]

interface WorkoutId {
    params: {
        workoutId: string;
    };
}

const WorkoutDetailsPage = async ({ params }: { params: { workoutId: string } }) => {
    const { workoutId } = await params;

    // Find the workout that matches the workoutId
    const workout = workouts.find(workout => workout.id === parseInt(workoutId));
    console.log(workout, 'from WorkoutDetailsPage');


    if (!workout) {
        return (
            <div>
                <h1>Workout not found</h1>
            </div>
        );
    }

    return (
        <div>
            <WorkoutDetails workout={workout} workouts={workouts} />
        </div>
    )
}

export default WorkoutDetailsPage
