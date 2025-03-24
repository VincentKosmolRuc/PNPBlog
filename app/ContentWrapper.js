export default function ContentWrapper({children}) {
    return(
        <div className="flex justify-center"> 
            <div className="w-full max-w-4xl">
                <div>
                    {children}
                </div> 
            </div>
        </div>
    )
}