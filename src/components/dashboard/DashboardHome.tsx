import progressImg1 from '@/assets/progress-1.png'
import progressImg2 from '@/assets/progress-2.png'
import Image from 'next/image'
import CircularProgressBar from './CircularProgressBar'

const DashboardHome = () => {
    return (
        <div className="py-20 mx-auto max-w-[1580px]">
            <div className="bg-white rounded-xl p-3 space-y-2">
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
        </div>
    )
}

export default DashboardHome
