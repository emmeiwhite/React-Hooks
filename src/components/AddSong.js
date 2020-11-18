import React, { useState } from "react";

export default function AddSong({ addSong }) {
  const [song, setSong] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addSong(song);
    setSong("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="song">Song :</label>
          <input
            type="text"
            id="song"
            value={song}
            onChange={(e) => setSong(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit">Add Song</button>
        </div>
      </form>
    </div>
  );
}
