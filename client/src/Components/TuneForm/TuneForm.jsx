import { useState, useEffect } from "react";

const TuneForm = ({tune, onSave}) => {
    const [title, setTitle] = useState(tune?.title ?? "");
    const [artists, setArtists] = useState(tune?.asrtist ?? []);
    const [year, setYear] = useState(tune?.year ?? 0);
    const [mainFlow, setMainFlow] = useState(tune?.mainFlow ?? "" );

    const onSubmit = (e) => {
        e.preventDefault();


    }

    return(
    
        <form className="TuneForm" onSubmit={onSubmit}>

            <div className="control">

                <label htmlFor="title"></label>
                
                <input type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                name="title"
                id="title"
                />

            </div>

        </form>

    )
}
export default TuneForm;