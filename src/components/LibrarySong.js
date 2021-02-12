import React from "react";
import { playSong } from "../util";

const LibrarySong = ({
  song,
  id,
  setSongs,
  songs,
  setCurrentSong,
  audioRef,
  setIsPlaying,
}) => {
  const songSelectHandler = () => {
    setCurrentSong(song);
    playSong(setIsPlaying, audioRef);
    //Add Active State
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);
  };
  //Event Handlers
  // const playSongHandler = () => {
  //   audioRef.current.play();
  //   setIsPlaying(true);
  // };

  return (
    //GOAL: add an onClick, so that you can change the songs based on what you click
    <div
      className={`library-song ${song.active ? "selected" : ""}`}
      onClick={songSelectHandler}
    >
      <img src={song.cover} alt={song.name} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
