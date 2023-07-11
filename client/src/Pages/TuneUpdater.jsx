import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TuneForm from "../Components/TuneForm";

const fetchTune = (id) => {
  return fetch(`/api/tunes/${id}`).then((res) => res.json());
};


const TuneUpdater = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [tuneToUpdate, setTuneToUpdate] = useState(null);
  const [tuneLoading, setTuneLoading] = useState(true);

  useEffect(() => {
    setTuneLoading(true);
    fetchTune(id)
      .then((tune) => {
        setTuneToUpdate(tune);
        console.log(tune);
        setTuneLoading(false);
    });
  }, [id]);

  if (tuneLoading) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <div>
      <TuneForm
        tune={tuneToUpdate}
        onSave={null}
         onCancel={() => navigate("/")}
      />
    </div>
  );
};

export default TuneUpdater;
