import "./TuneCard.css"
import { useState } from "react";

const TuneCard = ({tuneObject}) => {


    return(
        <div className="TuneCard"
        style={{ padding: "0.5rem" }}
        >
            <p>{tuneObject.title}</p>
            <p>{tuneObject.artists[0]}</p>
            <p>{tuneObject.year}</p>
            <p>{tuneObject.mainFlow}</p>
        </div>
    )
}

export default TuneCard;