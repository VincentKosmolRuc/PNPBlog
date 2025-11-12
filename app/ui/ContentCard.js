import Image from "next/image";

export default function ContentCard({ cont }) {

    switch (cont.type){

        case 'Headline':
            return(
            <h1 className="pt-1 font-extrabold text-gray-700">{cont.content}</h1>
        );

        case 'Text':
            return(
            <p className="">{cont.content}</p>
        );

        case 'Image':
            return( 
            <figure className="overflow-hidden shadow-sm items-center mt-6 mb-6">
                <Image
                src={`/${cont.content}`}
                width={960}
                height={540} 
                alt={cont.image_alt || "image description unavailable"} 
                />
                <figcaption className="bg-stone-300 p-2">{cont.image_description}</figcaption>
            </figure>
        );

        default:
        return null;
    }
    
   
}

