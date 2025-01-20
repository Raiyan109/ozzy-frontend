'use client'

import tickImg from '@/assets/membership-tick.png'
import { useState } from "react"
import progressImg1 from '@/assets/progress-1.png'
import progressImg2 from '@/assets/progress-2.png'
import Image from 'next/image'
import CircularProgressBar from './CircularProgressBar'
import bookImg from '@/assets/bookImg-1.png'
import Link from 'next/link'

interface Plan {
    id: number
    name: string
    price: number
    features: string[]
}

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
const DashboardHome = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const handleSubscribe = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setIsLoading(true)
        setError(null)
        console.log('Clicked in handleSubscribe')

        try {
            const res = await fetch(`http://192.168.10.32:5002/api/v1/subscription/subscribe?plan=starter`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            })

            if (!res.ok) {
                const errorData = await res.text()
                throw new Error(`Failed to subscribe: ${res.status} ${res.statusText}. ${errorData}`)
            }

            const data = await res.json()
            console.log('Subscription successful:', data)
            if (data && data.data.url) {
                window.location.href = data.data.url; // Redirects to the URL
            } else {
                throw new Error('Stripe URL not provided in response.');
            }
            // Handle successful subscription here (e.g., redirect to a success page)
        } catch (err) {
            console.error('Error details:', err)
            setError(err instanceof Error ? err.message : 'An unknown error occurred')
        } finally {
            setIsLoading(false)
        }
    }
    return (
        <div className="py-32 space-y-12">
            <div className="bg-white rounded-xl p-3 space-y-2 flex items-center justify-center flex-col mx-auto w-fit">
                <h1 className="text-center">Your Progress</h1>
                <div className="flex items-center justify-center gap-5">
                    <div className="bg-[#ECDBF0] p-1 rounded-xl flex flex-col items-center justify-center w-56 gap-5">
                        <div className='bg-white rounded-full p-2'>
                            <Image
                                src={progressImg1}
                                alt='Progress Image'
                                height={40}
                                width={40}
                            />
                        </div>
                        <CircularProgressBar progress={42} total={135} />
                        <p className='text-sm'>50% of your goals</p>
                    </div>
                    <div className="bg-[#BAE6E8] p-1 rounded-xl flex flex-col items-center justify-center w-56 gap-5">
                        <div className='bg-white rounded-full p-2'>
                            <Image
                                src={progressImg2}
                                alt='Progress Image'
                                height={40}
                                width={40}
                            />
                        </div>
                        <CircularProgressBar progress={42} total={135} />
                        <p className='text-sm'>50% of your goals</p>
                    </div>
                </div>
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
                                <Link href='/booking'>
                                    <button className="btn py-1">Booked</button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default DashboardHome
