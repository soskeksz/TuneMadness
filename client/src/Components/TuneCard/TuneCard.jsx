import { useNavigate } from "react-router-dom";
import "./TuneCard.css"

const TuneCard = ({tuneObject}) => {
const navigate = useNavigate();

    return(
        <div className="TuneCard"
        style={{ padding: "0.5rem" }}
        >
            <p>Title:{tuneObject.title}</p>
            <p>Artist: {tuneObject.artists[0]}</p>
            <p>Year: {tuneObject.year}</p>
            <p>Main flow: {tuneObject.mainFlow}</p>
            <button onClick={navigate(`/update/${tuneObject._id}`)}>UPDATE</button>
        </div>
    )
}

export default TuneCard;