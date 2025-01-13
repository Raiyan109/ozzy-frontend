import Image from "next/image"
import tickImg from '@/assets/membership-tick.png'

const plans = [
    {
        id: 1,
        name: '3 Day Free Trial',
        price: 0,
        options: ['View Membvers directory', 'View Membvers profile', 'Send Private Messages', 'Add Media to your profile']
    },
    {
        id: 2,
        name: 'Basic',
        price: 10,
        options: ['View Membvers directory', 'View Membvers profile', 'Send Private Messages', 'Add Media to your profile']
    },
    {
        id: 3,
        name: 'Premium',
        price: 20,
        options: ['View Membvers directory', 'View Membvers profile', 'Send Private Messages', 'Add Media to your profile']
    },
]
const Membership = () => {
    return (
        <div className=' py-2 space-y-20  rounded-xl'>
            <div className='space-y-3 flex items-center justify-center flex-col text-center'>
                <h1 className='text-4xl'>Premium Membership</h1>
                <h4 className='text-sm max-w-md'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </h4>
            </div>
            <div className='flex items-center justify-center gap-12'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {plans.map((plan) => (
                        <div key={plan.id} className="bg-white rounded-xl w-64 py-6">
                            <div className="flex flex-col items-center justify-center text-[#EB4B73] gap-2 pb-5 border-b-2 border-b-[#EB4B73]/20">
                                <h1 className="text-xl">{plan.name}</h1>
                                <div className="flex flex-col items-center">
                                    <div className="flex items-center text-xl">
                                        <span>{plan.price === 0 ? '' : '$'}</span>
                                        <h2>{plan.price === 0 ? 'Free' : plan.price}</h2>
                                    </div>
                                    <span className="text-xs">{plan.price === 0 ? '' : '/month'}</span>
                                </div>
                            </div>
                            <div className="flex items-start justify-center py-6">
                                <div className="space-y-5">
                                    {plan.options.map((option, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <Image
                                                src={tickImg}
                                                alt='Tick image'
                                                height={15}
                                                width={15}
                                            />
                                            <h3 className="text-xs">{option}</h3>
                                        </div>
                                    ))}
                                    <div className="flex justify-center items-center">
                                        <button className="btn">Purchase Now</button>
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
