import Image from "next/image"

const HomeBanner = () => {
    return (
        <div className="bg-gradient-to-r from-sky-500 to-sky-800">
            <div className="px-2 md:5 xl:px-8 py-12 mx-auto flex flex-col md:flex-row justify-evenly items-center gap-10">
                <div className="text-center flex flex-col gap-2 flex-1">
                    <h2 className="text-white text-3xl font-bold md:text-4xl lg:text-5xl">Summer Sale!</h2>
                    <p className="text-white text-sm md:text-[16px]">Enjoy discounts on selectec items</p>
                    <p className="uppercase text-yellow-400 text-2xl font-bold md:text-3xl lg:text-4xl">get 55% off</p>
                </div>
                <div className="aspect-auto flex-1">
                    <Image
                        src="/banner-image.png"
                        alt="Banner Img"
                        height={100}
                        width={400}
                        className="w-auto h-36 sm:h-40 md:h-48 lg:h-56"
                    />
                </div>
            </div>
        </div>
    )
}

export default HomeBanner