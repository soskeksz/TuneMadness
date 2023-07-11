import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TuneForm from "../Components/TuneForm";

const fetchTunes = () => fetch("/api/tunes").then((res) => res.json());

const TuneUpdater = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [tuneToUpdate, setTuneToUpdate] = useState(null);

  useEffect(() => {
    fetchTunes().then((tunes) => {
      const tune = tunes.find((tune) => tune._id === id);
      setTuneToUpdate(tune);
    });
  }, [id]);

  return (
    <div>
      <TuneForm
        tune={tuneToUpdate}
        onSave={null}
         onCancel={() => navigate("/")} // Use navigate(-1) to navigate back to the previous page
      />
    </div>
  );
};

export default TuneUpdater;
