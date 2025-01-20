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
const plans = [
    { id: 1, name: 'Workout Membership', price: 0, features: ['View Members Directory', 'View Members Profile', 'Send Private Messages', 'Add Media To Your Profile'] },
    { id: 2, name: 'Nutrition Membership ', price: 20, features: ['View Members Directory', 'View Members Profile', 'Send Private Messages', 'Add Media To Your Profile'] },
    { id: 3, name: 'Nutrition Membership', price: 60, features: ['Discuss your program', 'Track your progress by scheduling calls periodically', 'Accountability', ' life style coaching'] },
]

const UserSubscriptions = () => {
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
        <div className="py-20">
            <div className='flex items-center justify-center gap-12'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {plans.map((plan: Plan) => (
                        <div key={plan.id} className="bg-white rounded-xl w-64 py-6">
                            <div className="flex flex-col items-center justify-center text-[#EB4B73] gap-2 pb-5 border-b-2 border-b-[#EB4B73]/20 min-h-[130px]">
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
                                    <div className="flex justify-center items-center gap-3">
                                        <button className="btn bg-[#EBF8FF] text-[#4E4E4E] min-w-[60px]" onClick={handleSubscribe}>Renew</button>
                                        <button className="btn min-w-[60px]" onClick={handleSubscribe}>Cancel</button>
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

export default UserSubscriptions
