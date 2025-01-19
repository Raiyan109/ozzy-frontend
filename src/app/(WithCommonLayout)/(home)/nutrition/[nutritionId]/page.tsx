
import WorkoutImg from "@/assets/workout-img.png"
import NutritionDetails from "@/components/nutritionComponents/NutritionDetails";

const nutritions = [
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

interface WorkoutId {
    params: {
        nutritionId: string;
    };
}

const NutritionDetailsPage = async ({ params }: { params: { nutritionId: string } }) => {
    const { nutritionId } = await params;

    // Find the workout that matches the workoutId
    const nutrition = nutritions.find(nutrition => nutrition.id === parseInt(nutritionId));
    console.log(nutrition, 'from nutritionDetailsPage');


    if (!nutrition) {
        return (
            <div>
                <h1>nutrition not found</h1>
            </div>
        );
    }

    return (
        <div>
            <NutritionDetails nutrition={nutrition} nutritions={nutritions} />
        </div>
    )
}

export default NutritionDetailsPage
