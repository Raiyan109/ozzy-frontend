import { StaticImageData } from "next/image";
import SingleNutrition from "./SingleNutrition";


type Props = {
    id: number;
    name: string;
    image: StaticImageData
}

const Nutritions = ({ nutritions }: { nutritions: Props[] }) => {
    return (
        <div className="py-8">
            <h1>Your Exercise</h1>
            <div className="flex items-center justify-center py-5">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-14">
                    {nutritions.map((nutrition) => (
                        <SingleNutrition key={nutrition.id} nutrition={nutrition} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Nutritions
