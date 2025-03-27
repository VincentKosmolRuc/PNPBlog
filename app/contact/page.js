import Image from "next/image";

export default function Page() {
    return (
        <div className="grid grid-cols-1 items-center px-4">
            <div className="justify-self-center">
                <Image 
                    src="/VincentKosmolContact.jpg"
                    width={2000}
                    height={1000}
                    alt="Picture of Vincent Kosmol in ultra running outfit"
                    className="w-3xl mt-10 rounded-4xl shadow-2xl"
                />
            </div>
            <div className="text-gray-700 mt-10 text-center"> 
                <p className="mb-4">
                    Have a question about ultra running or one of my race reports?  
                    Want to work together?
                </p>
                <p className="font-semibold">
                    You are always welcome to write to me at  
                    <a href="mailto:paceandprogress@gmail.com" className="text-blue-600 hover:underline">
                        {" "}paceandprogress@gmail.com
                    </a>
                </p>
            </div>
        </div>
    );
}
