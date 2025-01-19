'use client'
import Image, { StaticImageData } from "next/image";
import { redirect } from "next/navigation";

type Props = {
    id: number;
    name: string;
    image: StaticImageData
}
const SingleNutrition = ({ nutrition }: { nutrition: Props }) => {
    return (
        <div className="bg-white rounded-xl p-6 space-y-5 cursor-pointer" onClick={() => redirect(`/nutrition/${nutrition?.id}`)}>
            <div className="flex items-center justify-center">
                <Image
                    src={nutrition.image}
                    alt={nutrition.name}
                    height={180}
                    width={180}
                    className="w-full"
                />
            </div>
            <div className="flex items-center justify-between gap-8">
                <h3 className="text-[#4E4E4E]">{nutrition.name}</h3>
                <button className="btn min-w-[80px]">Exercise</button>
            </div>
        </div>
    )
}

export default SingleNutrition
