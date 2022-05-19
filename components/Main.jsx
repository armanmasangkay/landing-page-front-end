import Clients from "./Clients";

export default function Main() {
    return (
        <div className="lg:flex lg:flex-row-reverse flex flex-col w-full lg:w-auto lg:mx-40 items-center lg:my-20 xl:justify-center">
            <img src="images/image-hero-mobile.png" alt="" className="lg:hidden" />
            <img src="images/image-hero-desktop.png" alt="" className="lg:block lg:h-[24rem] xl:h-[30rem] xl:ml-10 hidden" />
            <div className="xl:w-1/2 w-full">
                <h1 className="text-3xl text-center lg:text-left font-bold mt-8 lg:text-5xl">Make remote Work</h1>
                <p className="text-center lg:text-left text-m-grey p-4 lg:p-0 lg:my-10 xl:text-xl">
                    Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.
                </p>
                <button className="bg-a-black px-4 py-3 text-a-white rounded-xl m-auto lg:m-0 block font-bold xl:text-xl xl:mt-10 hover:border hover:border-a-black hover:bg-white hover:text-a-black">
                    Learn more
                </button>
                <div className="mt-12">
                <Clients/>
                </div>
            </div>
         
        </div>
    );
}