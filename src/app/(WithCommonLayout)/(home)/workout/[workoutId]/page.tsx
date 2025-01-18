interface WorkoutId {
    params: {
        workoutId: string;
    };
}

const WorkoutDetailsPage = async ({ params }: Readonly<{ params: Promise<{ workoutId: WorkoutId }> }>) => {
    const { workoutId } = await params;
    console.log(workoutId, 'workout details id');


    return (
        <div>

        </div>
    )
}

export default WorkoutDetailsPage
