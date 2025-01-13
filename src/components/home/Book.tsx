import Image from "next/image"
import bookImg from '@/assets/bookImg-1.png'

const appointments = [
    {
        id: 1,
        image: bookImg,
        name: 'Nutrition Consult',
        price: 666,
        description: 'Consultation to create program for desired goal'
    },
    {
        id: 2,
        image: bookImg,
        name: 'Nutrition Consult',
        price: 100,
        description: 'Consultation to create program for desired goal'
    },
    {
        id: 3,
        image: bookImg,
        name: 'Free Call',
        price: 0,
        description: 'Consultation to create program for desired goal'
    },
    {
        id: 4,
        image: bookImg,
        name: 'Fitness Training',
        price: 440,
        description: 'Strength and conditioning session to attain desired goal.'
    },
]
const Book = () => {
    return (
        <div className=' py-2 space-y-20  rounded-xl'>
            <div className='space-y-3 flex items-center justify-center flex-col text-center'>
                <h1 className='text-4xl'>Book Appointment</h1>
            </div>
            <div className='flex items-center justify-center gap-12'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {appointments.map((plan) => (
                        <div key={plan.id} className="bg-white rounded-xl w-64 py-3">
                            <div className="flex flex-col items-center justify-center gap-5">
                                <Image
                                    src={plan.image}
                                    alt={plan.name}
                                    height={150}
                                    width={150}
                                    className="object-cover w-56"
                                />
                                <div className={`${plan.price === 0 ? 'text-center' : 'flex items-center justify-between'} gap-14`}>
                                    <h1>{plan.name}</h1>
                                    <h1>{plan.price === 0 ? '' : '$'}{plan.price === 0 ? '' : plan.price}</h1>
                                </div>
                                <h1 className="text-xs text-center max-w-[200px]">{plan.description}</h1>
                                <button className="btn py-1">Book</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Book
