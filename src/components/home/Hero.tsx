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
            className=" bg-cover xl:bg-cover bg-no-repeat bg-center  h-[50vh] md:h-[70vh] lg:h-[calc(100vh-2px)] xl:h-[calc(100vh-64px)] w-full mt-16 md:mt-16 lg:mt-16 xl:mt-16"
        >
            <p className="text-white text-5xl">dfdf</p>
        </div>
    )
}

export default Hero
