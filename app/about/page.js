import Image from "next/image"

export default function Page(){
    return(
        <div className="flex flex-col sm:flex-row items-center">
            <div className="px-0 lg:px-8">
                <Image 
                    src="/VincentKosmol.jpg"
                    width={3350}
                    height={5000}
                    alt="Picture of Vincent Kosmol in ultra running outfit"
                    className="hidden sm:block"
                />
                <Image 
                    src="/VincentKosmolSmall.jpg"
                    width={3500}
                    height={2000}
                    alt="Picture of Vincent Kosmol in ultra running outfit"
                    className="block sm:hidden"
                />
            </div>
            <div className="px-8">
                <h2 className="text-4xl font-extrabold text-gray-900">About Me</h2>
                <p className="text-lg text-gray-700 mt-4">
                    My name is Vincent Kosmol, and I am on a mission to test my limits. 
                    I started running rather late, but I was immediately hooked on the 
                    simple principles of the sport. If you stay consistent and put in 
                    the work, your progress will show.
                </p>
                {/* <p className="pt-2">
                    While I enjoy running all types of distances, I am especially drawn to 
                    ultras because of their unique challenges and the intense mental strength 
                    they require. Every ultra humbles me, pushing me to new limits and offering 
                    valuable insights. I am always humbled and grateful after completing any 
                    ultra distance, ready to try and use the insights the experience has given me.
                </p>   */}
                <p className="text-lg text-gray-700 mt-4">
                    The purpose of this blog is to document my different ultra runs, challenging 
                    me to make more intentional decisions about my training, gear, nutrition, and 
                    more. My hope is that you find inspiration or useful insights while reading the 
                    race reports—helping you with your own ambitions, whether in sports or other areas of life.
                </p>
            </div>
        </div>
    )
}