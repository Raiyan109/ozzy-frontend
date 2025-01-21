'use client'
import Image from "next/image"
import tickImg from '@/assets/membership-tick.png'
import { useState } from "react"

interface Plan {
    id: number
    name: string
    price: number
    features: string[]
}


// const plans = [
//     {
//         id: 1,
//         name: '3 Day Free Trial',
//         price: 0,
//         options: ['View Membvers directory', 'View Membvers profile', 'Send Private Messages', 'Add Media to your profile']
//     },
//     {
//         id: 2,
//         name: 'Basic',
//         price: 10,
//         options: ['View Membvers directory', 'View Membvers profile', 'Send Private Messages', 'Add Media to your profile']
//     },
//     {
//         id: 3,
//         name: 'Premium',
//         price: 20,
//         options: ['View Membvers directory', 'View Membvers profile', 'Send Private Messages', 'Add Media to your profile']
//     },
// ]
const Membership = ({ plans }: { plans: Plan[] }) => {
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
        <div className=' py-2 space-y-20  rounded-xl'>
            <div className='space-y-3 flex items-center justify-center flex-col text-center'>
                <h1 className='text-4xl'>Premium Membership</h1>
                <h4 className='text-sm max-w-md'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </h4>
            </div>
            <div className='flex items-center justify-center gap-12'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {plans.map((plan: Plan) => (
                        <div key={plan.id} className="bg-white rounded-xl w-64 py-6">
                            <div className="flex flex-col items-center justify-center text-[#345C8C] gap-2 pb-5 border-b-2 border-b-[#345C8C]/20 min-h-[130px]">
                                <h1 className="text-xl text-center">{plan.name}</h1>
                                <div className="flex flex-col items-center">
                                    <div className="flex items-center text-xl">
                                        <span>{plan.price === 0 ? '' : '$'}</span>
                                        <h2>{plan.price === 0 ? 'Free' : plan.price}</h2>
                                    </div>
                                    <span className="text-xs">{plan.price === 0 ? '' : '/month'}</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-center py-6">
                                <div className="space-y-5 flex flex-col items-start justify-center">
                                    {plan.features.map((option, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <Image
                                                src={tickImg}
                                                alt='Tick image'
                                                height={15}
                                                width={15}
                                            />
                                            <h3 className="text-xs max-w-[160px]">{option}</h3>
                                        </div>
                                    ))}
                                    {/* {plan.options.map((option, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <Image
                                                src={tickImg}
                                                alt='Tick image'
                                                height={15}
                                                width={15}
                                            />
                                            <h3 className="text-xs">{option}</h3>
                                        </div>
                                    ))} */}
                                    <div className="flex justify-center items-center">
                                        <button className="btn" onClick={handleSubscribe}>Purchase Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Membership
