import Image from "next/image";

export default function ContentCard({ cont }) {

    switch (cont.type){

        case 'Headline':
            return(
            <h1 className="font-extrabold text-gray-700">{cont.content}</h1>
        );

        case 'Text':
            return(
            <p>{cont.content}</p>
        );

        case 'Image':
            return( 
            <figure className="rounded-lg overflow-hidden shadow-sm items-center">
                <Image
                src={`/${cont.content}`}
                width={1920}
                height={1080} 
                alt={cont.image_description || "image description unavailable"}
                />
                <figcaption>{cont.image_description}</figcaption>
            </figure>
        );

        default:
        return null;
    }
    
   


    // if(cont){
    //     if(cont.type === 'Headline'){
    //     return(
    //         <h1 className="font-extrabold text-gray-700">{cont.content}</h1>
    //     );
    // }
    // else if(cont.type === 'Text'){
    //     return(
    //         <p>{cont.content}</p>
    //     );
    // }
    // else if(cont.type ==='Image'){ 
    //     return( 
    //         <div className="rounded-lg overflow-hidden shadow-sm items-center">
    //             <Image
    //             src={`/${cont.content}`}
    //             width={1920}
    //             height={1080} 
    //             alt={cont.image_description != null ? (cont.image_description) : ("image description unavailable")}
    //             />
    //             <p>{cont.image_description}</p>
    //         </div>
    //     );
    // }
    // }
    // else {
    //     return null;
    // }
}

