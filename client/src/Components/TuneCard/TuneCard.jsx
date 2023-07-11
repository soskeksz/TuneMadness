import { Link } from "react-router-dom";
import "./TuneCard.css"

const TuneCard = ({tuneObject}) => {



    return(
        <div className="TuneCard"
        style={{ padding: "0.5rem" }}
        >
            <p>Title:{tuneObject.title}</p>
            <p>Artist: {tuneObject.artists[0]}</p>
            <p>Year: {tuneObject.year}</p>
            <p>Main flow: {tuneObject.mainFlow}</p>
            <Link to={`/update/${tuneObject._id}`}>
                <button type="button">Update</button>
              </Link>



        </div>
    )
}

export default TuneCard;