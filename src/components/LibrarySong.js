import React from "react";

const LibrarySong = ({
  song,
  id,
  setSongs,
  songs,
  setCurrentSong,
  audioRef,
  setIsPlaying,
  isPlaying,
}) => {
  const songSelectHandler = async () => {
    await setCurrentSong(song);
    setIsPlaying(true);
    audioRef.current.play();
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

  return (
    //GOAL: add an onClick, so that you can change the songs based on what you click
    <div
      className={`library-song ${song.active && "selected"} `}
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
