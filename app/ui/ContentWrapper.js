// import "../app/globals.css";

export default function ContentWrapper({children}) {
    return(
        <div className="flex justify-center"> 
            <div className="w-full max-w-6xl">
                <div className="sides h-full bg site">
                    {children}
                </div> 
            </div>
        </div>
    )
}