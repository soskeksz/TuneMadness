import { useState, useEffect } from "react";
import TuneCard from "../Components/TuneCard";

const fetchTunes = () => fetch("/api/tunes").then((res) => res.json());

const TuneList = () => {
    const [tunes, setTunes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        fetchTunes()
            .then(tunes => setTunes(tunes))
            setLoading(false)
    },[])

  if (loading) {
    return <div>loading...</div>
  }

  return (
    <div className="TuneList">
      <p>this is the tune list</p>

        {tunes.map((tune) => (
            <TuneCard key={tune._id} tuneObject={tune}/>
        ))}

    </div>
  );
};
export default TuneList;
