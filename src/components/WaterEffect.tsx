
export const WaterEffect = () => {
    return(
        <div className="background">
            {[...Array(1000)].map((x, i) =>
                <div className="circle-container">
                    <div className="circle"></div>
                </div>
            )}
        </div>
    )
}