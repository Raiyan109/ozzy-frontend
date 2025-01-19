import NutritionImg from '@/assets/nutrition-hero.png'
import NutritionHero from "./NutritionHero"
import Nutritions from "./Nutritions"


const Nutrition = () => {
    const nutritions = [
        {
            id: 1,
            name: 'Monday-Chest day',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita suscipit error quas porro qui. Non',
            duration: '10 minutes',
            image: NutritionImg
        },
        {
            id: 2,
            name: 'Monday-Chest day',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita suscipit error quas porro qui. Non',
            duration: '10 minutes',
            image: NutritionImg
        },
        {
            id: 3,
            name: 'Monday-Chest day',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita suscipit error quas porro qui. Non',
            duration: '10 minutes',
            image: NutritionImg
        },
        {
            id: 4,
            name: 'Monday-Chest day',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita suscipit error quas porro qui. Non',
            duration: '10 minutes',
            image: NutritionImg
        },
        {
            id: 5,
            name: 'Monday-Chest day',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita suscipit error quas porro qui. Non',
            duration: '10 minutes',
            image: NutritionImg
        },
        {
            id: 6,
            name: 'Monday-Chest day',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita suscipit error quas porro qui. Non',
            duration: '10 minutes',
            image: NutritionImg
        },
        {
            id: 7,
            name: 'Monday-Chest day',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita suscipit error quas porro qui. Non',
            duration: '10 minutes',
            image: NutritionImg
        },
        {
            id: 8,
            name: 'Monday-Chest day',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita suscipit error quas porro qui. Non',
            duration: '10 minutes',
            image: NutritionImg
        },
    ]
    return (
        <div className="mx-auto max-w-[1500px]">
            <NutritionHero />
            <Nutritions nutritions={nutritions} />
        </div>
    )
}

export default Nutrition
