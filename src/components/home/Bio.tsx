import Image from "next/image"
import bioImg from "@/assets/bio.png"


const Bio = () => {
    return (
        <div className=' py-24 space-y-20 bg-white max-w-[1580px] container mx-auto my-16 rounded-xl'>
            <div className='text-center space-y-3'>
                <h1 className='text-4xl'>My Bio</h1>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <div className='flex flex-col md:flex-row items-center gap-10'>
                    <div className='flex-1'>
                        <Image
                            src={bioImg}
                            alt='Bio image'
                            height={400}
                            width={400}
                        />
                    </div>
                    <div className='flex-1'>
                        <div className=" space-y-4 text-headingColor/80">
                            <p className="text-xs max-w-3xl">OZZY GODINEZ
                            </p>
                            <p className="text-xs max-w-3xl">Former division one college football player and experienced elite athlete, I bring to OEG Stretching Strength a combination of my passion for sports, fitness and healing achieved through a career competing in track, football, basketball, as well as personal recovery from sports related injuries.
                            </p>
                            <p className="text-xs max-w-3xl"> While sports had always been present in my life since a young age, the desire for healing was equally important. As a small child, I wanted to be a doctor, telling my sick grandmother “I’m going to fix you.” Sports and healing were a natural compliment and these two things were realized when I received a football scholarship from Oklahoma State University. This was an opportunity to compete in sports on a collegiate level, while earning a Bachelor of Science in Health Wellness.</p>
                            <p className="text-xs max-w-3xl"> With sports comes injury, both during and after college – right shoulder surgery, umbilical hernia surgery, medial and lateral injuries to both knees. Throughout the recovery process I continued to train in the gym and work through these injuries, later receiving extensive education in personal training, Olympic style lifting, TRX, Bosu and other systems.</p>
                            <p className="text-xs max-w-3xl">As a young athlete I witnessed fundamental things missing from a lot of training programs, such as nutrition, hydration, stretching and proper warm-up and cool down. To this day, many young athletes, including pro athletes, drink sodium filled sports drinks thinking they are making healthy decisions. How wrong are they, and I was once one of them.</p>
                            <p className="text-xs max-w-3xl">I am constantly active, both in the gym, as well as participating in competitive activities such as racquetball, basketball and bodybuilding. I stay informed on the latest information relating to health and fitness, and see longevity as a core principle of OEG Stretching Strength, staying active and healing for as long as I can. Nutrition is an essential part to this success. I attend seminars on nutrition and educate myself on super foods, anti oxidants, free radicals and their affects on the body. But my greatest priority to this day remains stretching and specifically Ki-hara Resistance stretching. I am also certified in table Thai massage and have studied other methods such as triggers and active releases.</p>
                            <p className="text-xs max-w-3xl">Anyone that wants to strengthen, stretch, become stronger or bigger, or wants to get back into a fitness routine, can benefit from OEG Stretching Strength.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bio
