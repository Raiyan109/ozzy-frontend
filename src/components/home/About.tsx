import Image from 'next/image'
import aboutImg from '@/assets/about-img.png'

const About = () => {
    return (
        <div className=' py-24 space-y-20 bg-white max-w-[1580px] container mx-auto my-16 rounded-xl'>
            <div className='text-center space-y-3'>
                <h1 className='text-4xl'>About OEG</h1>
                <h4 className='text-sm'>What is Oeg Stretching Strength?</h4>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <div className='flex flex-col md:flex-row items-center gap-20'>
                    <div className='flex-1'>
                        <Image
                            src={aboutImg}
                            alt='About image'
                            height={300}
                            width={300}
                        />
                    </div>
                    <div className='flex-1'>
                        <div className=" space-y-4 text-headingColor/80">
                            <h1 className="text-4xl max-w-lg">We believe in doing</h1>
                            <p className="text-xs max-w-lg">OEG Stretching Strength is a balanced fitness program that combines gym, nutrition, stretching and therapy suited to fit an average person looking to start/or start over, as well as all levels of athletes. This includes younger athletes, pro athletes, former athletes, weekend warriors and master athletes.
                            </p>
                            <p className="text-xs max-w-lg"> OEG Stretching Strength has proven success in helping clients achieve weight loss or muscle gain and assist those in recovery or coping with existing chronic pain due to surgery. This program has also helped those with certain disabilities/diseases such as MS & neuropathy.</p>
                            <p className="text-xs max-w-lg"> This system is for anyone looking to make health, wellness and nutrition a priority in their life at any age or physical ability, and to achieve the highest level of quality of life.</p>
                            <div>
                                <ul className='list-disc text-sm'>
                                    <li>Learn at your own pace, anytime, anywhere.</li>
                                    <li>Learn at your own pace, anytime, anywhere.</li>
                                </ul>
                            </div>

                            <div className='space-y-7'>
                                <div className='flex items-center gap-20 pb-7 border-b'>
                                    <div className='flex items-end'>
                                        <h1 className='text-[#EB4B73] font-bold text-4xl'>30+</h1>
                                        <h2 className='text-sm'>/Years</h2>
                                    </div>
                                    <h1 className='leading-4'>Our mission’s to drive grow & improve progress.</h1>
                                </div>
                                <div className='flex items-center gap-20'>
                                    <div className='flex items-end'>
                                        <h1 className='text-[#EB4B73] font-bold text-4xl'>30+</h1>
                                        <h2 className='text-sm'>/Years</h2>
                                    </div>
                                    <h1 className='leading-4'>Our mission’s to drive grow & improve progress.</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
