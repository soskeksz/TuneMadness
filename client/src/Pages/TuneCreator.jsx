import { useState, } from "react";
import TuneForm from "../Components/TuneForm";
import {useNavigate} from "react-router-dom";

const createTune = (tune) => {
    return fetch ("/api/tunes", {
        method: "POST",
        headers: {
           "Content-Type": "application-json",
        },
        body: JSON.stringify(tune)
    }).then((res) => res.json());
};


const TuneCreator = () => {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const handleCreateTune = (tune) => {
        setLoading(true);

        createTune(tune)
            .then(() => {
                setLoading(false);
                console.log("tune created");
                navigate("/");
            })
    };

    if (loading) {
        return <div>Loading...</div>
    }

    return(
        <div className="TuneCreator">
            <TuneForm 
            onSave={handleCreateTune}
            onCancel={() => navigate("/")}
            />
        </div>
    )
}

export default TuneCreator;