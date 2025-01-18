import WorkoutDetails from "@/components/workoutComponents/WorkoutDetails";

interface WorkoutId {
    params: {
        workoutId: string;
    };
}

const WorkoutDetailsPage = async ({ params }: { params: { workoutId: string } }) => {
    const { workoutId } = await params;
    console.log(workoutId, 'workout details id');

    return (
        <div>
            <WorkoutDetails workoutId={workoutId} />
        </div>
    )
}

export default WorkoutDetailsPage
