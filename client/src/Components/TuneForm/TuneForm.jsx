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

                <label htmlFor="title">Title:</label>
                <input 
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    name="title"
                    id="title"
                />
            </div>

            <div className="control">
                {/*figure out how we want to store multiple artists*/}
                <label htmlFor="artists"></label>
                <input 
                    type="text"
                    value={null}
                    onChange={(e) => null}
                    name="artists"
                    id="artists"
                />
            </div>

            <div className="control">
                <label htmlFor="year">Year:</label>
                <input 
                    type="number"
                    value={year}
                    onChange={(e) => setYear(e.target.value)} 
                    name="year" 
                    id="year" 
                />
            </div>

            <div>
                <label htmlFor="mainFlow">Main flow:</label>
                <select 
                name="mainFlow" 
                id="mainFlow"
                defaultValue={mainFlow}
                value={mainFlow}
                onChange={(e) => setMainFlow(e.target.value)}
                >
                    <option value="1/4">1/4</option>
                    <option value="1/8">1/8</option>
                    <option value="1/8t">1/8t</option>
                    <option value="1/2">1/2</option>
                </select>
            </div>

        </form>

    )
}
export default TuneForm;