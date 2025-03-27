import Image from "next/image"

export default function Page(){
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center"> 
            <div>
                <Image 
                    src="/VincentKosmolDesktop.jpg"
                    width={2800}
                    height={5000}
                    alt="Picture of Vincent Kosmol in ultra running outfit"
                    className="mt-8 rounded-4xl shadow-2xl hidden sm:block"
                />
                <Image 
                    src="/VincentKosmolMobil.jpg"
                    width={3500}
                    height={2000}
                    alt="Picture of Vincent Kosmol in ultra running outfit"
                    className="block sm:hidden shadow-2xl"
                />
            </div>
            <div className="sm:ps-10">
                <h2 className="sm:mt-4 font-extrabold text-gray-700">About Me</h2>
                <p className="text-sm text-gray-700">
                    My name is Vincent B.G. Kosmol, and I am on a mission to test my limits. 
                    I started running rather late, but I was immediately hooked on the 
                    simple principles of the sport. If you stay consistent and put in 
                    the work, your progress will show.
                </p>
                <p className="text-sm text-gray-700 mt-4">
                    While I enjoy running all types of distances, I am especially drawn to 
                    ultras because of their unique challenges and the intense mental strength 
                    they require. Every ultra humbles me, pushing me to new limits and offering 
                    valuable insights. I am always humbled and grateful after completing any 
                    ultra distance, ready to try and use the insights the experience has given me.
                </p>   
            </div>
            <div className="sm:ps-10">
                <h2 className="font-extrabold text-gray-700 hidden sm:block">Meaning</h2>
                <p className="text-sm text-gray-700 hidden sm:block">
                    The purpose of this blog is to document my different ultra runs, challenging 
                    me to make more intentional decisions about my training, gear, nutrition, and 
                    more. My hope is that you find inspiration or useful insights while reading the 
                    race reports—helping you with your own ambitions, whether in sports or other areas of life.
                </p>
                <Image 
                    src="/VincentKosmol2Mobil.jpg"
                    width={3500}
                    height={2000}
                    alt="Picture of Vincent Kosmol in ultra running outfit"
                    className="block shadow-2xl sm:hidden"
                />
            </div>
            <div>
                <Image 
                    src="/VincentKosmol2Desktop.jpg"
                    width={2800}
                    height={5000}
                    alt="Picture of Vincent Kosmol in ultra running outfit"
                    className="mb-8 shadow-2xl rounded-4xl hidden sm:block"
                /> 
                <h2 className="font-extrabold text-gray-700 block sm:hidden">Meaning</h2>
                <p className="text-sm text-gray-700 mb-6 block sm:hidden">
                    The purpose of this blog is to document my different ultra runs, challenging 
                    me to make more intentional decisions about my training, gear, nutrition, and 
                    more. My hope is that you find inspiration or useful insights while reading the 
                    race reports—helping you with your own ambitions, whether in sports or other areas of life.
                </p>
            </div>

        </div>
    )
}