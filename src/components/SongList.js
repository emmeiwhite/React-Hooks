import React, { useState, useEffect } from "react";
// import uuid from "uuid/v1";
import AddSong from "./AddSong";

import "./SongList.css";

export default function SongList() {
  const [songs, setSongs] = useState([
    { title: "In the winds", id: 1 },
    { title: "human psychology is blurred", id: 2 },
    { title: "Play around and around", id: 3 },
  ]);

  const [age, setAge] = useState("");

  const addSong = (song) => {
    setSongs([...songs, { title: song, id: Math.random() }]);
  };

  /* --- Getting invoked everytime the data upadtes --- */
  useEffect(() => {
    console.log("useEffect() ran !!!");
  });

  return (
    <div className="songs-list">
      <h1>Song List</h1>
      {songs.map((song) => (
        <div className="song-card" key={song.id}>
          <h2>{song.title}</h2>
        </div>
      ))}
      <AddSong addSong={addSong} />

      <div>
        <h1>Button</h1>
        <button onClick={() => setAge(age + 1)}>Add Age : {age}</button>
      </div>
    </div>
  );
}
