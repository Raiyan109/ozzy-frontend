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
            className=" bg-cover xl:bg-cover bg-no-repeat bg-center  h-[50vh] md:h-[70vh] lg:h-[calc(100vh-2px)] xl:h-[calc(100vh-64px)] w-full mt-16 md:mt-16 lg:mt-16 xl:mt-16 relative"
        >
            <div className="absolute top-[30%] left-[11%] space-y-5">
                <p className="text-white/70 text-sm">Find Your Energy</p>
                <h1 className="text-white text-6xl max-w-lg">Make Your Body Healthy & Fit</h1>
                <p className="text-white/70 max-w-xl text-sm">Gymhen an unknown printer took a galley of type and scrambled.It has survived nknown printercenturies.</p>
                <button className="btn hover:text-white">BOOK APPOINTMENT </button>
            </div>
        </div>
    )
}

export default Hero
