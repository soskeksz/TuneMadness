import { useState, useEffect } from "react";

const fetchTunes = () => fetch("/api/tunes").then((res) => res.json());

const TuneList = () => {


    return (
        <div className="TuneList">
            <p>this is the tune list</p>
        </div>
    )
}
export default TuneList;