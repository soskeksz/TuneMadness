import React, { useState } from "react";
import "./TuneForm.css";

const TuneForm = ({ tune, onSave }) => {
  const [title, setTitle] = useState(tune?.title ?? "");
  const [artists, setArtists] = useState(tune?.artists ?? []);
  const [updatedArtists, setUpdatedArtists] = useState([]);
  const [newArtist, setNewArtist] = useState("");
  const [year, setYear] = useState(tune?.year ?? 0);
  const [mainFlow, setMainFlow] = useState(tune?.mainFlow ?? "");

  const addArtist = (e) => {
    e.preventDefault();
    setUpdatedArtists([...updatedArtists, newArtist]);
    console.log("artist added");
    console.log(updatedArtists);
    setArtists(updatedArtists);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (tune) {
      return onSave({
        ...tune,
        title,
        artists,
        year,
        mainFlow,
      });
    }
    return onSave({
      title,
      artists,
      year,
      mainFlow,
    });
  };

  return (
    <form className="TuneForm form" onSubmit={onSubmit}>
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
        <label htmlFor="artists">Add an artist:</label>
        <input
          type="text"
          value={newArtist}
          onChange={(e) => setNewArtist(e.target.value)}
          name="artists"
          id="artists"
        />
        <button type="button" onClick={addArtist}>
          Add artist
        </button>
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
          value={mainFlow}
          onChange={(e) => setMainFlow(e.target.value)}
        >
          <option value="1/4">1/4</option>
          <option value="1/8">1/8</option>
          <option value="1/8t">1/8t</option>
          <option value="1/2">1/2</option>
        </select>
      </div>

      <button type="submit">SUBMIT</button>
    </form>
  );
};

export default TuneForm;
