import heroImage from "@/assets/hero-img.png";

const Hero = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${heroImage.src})`,
            }}
            // style={{
            //     backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%), url(${heroImage.src})`,
            // }}
            className=" bg-cover xl:bg-contain bg-no-repeat bg-center xl:bg-top h-[50vh] md:h-[75vh] lg:h-[calc(100vh-1px)] w-full bg-blackOverlay"
        >
            <p className="text-white text-5xl">dfdf</p>
        </div>
    )
}

export default Hero
