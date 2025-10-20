import Image from "next/image";

export default function ContentCard({ cont }) {
    if(cont){
        if(cont.type === 'Headline'){
        return(
            <h1 className="font-extrabold text-gray-700">{cont.content}</h1>
        );
    }
    else if(cont.type === 'Text'){
        return(
            <p>{cont.content}</p>
        );
    }
    else if(cont.type ==='Image'){
        return(
            <div className="rounded-lg overflow-hidden shadow-sm items-center">
                <Image
                src={`/${cont.content}`}
                width={1920}
                height={1080}
                alt={cont.image_description}
                />
                <p>{cont.image_description}</p>
            </div>
        );
    }
    }
    else {
        return null;
    }
}

