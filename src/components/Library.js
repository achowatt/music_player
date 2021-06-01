import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({
  songs,
  setSongs,
  setCurrentSong,
  audioRef,
  setIsPlaying,
  isPlaying,
  libraryStatus,
  setLibraryStatus,
}) => {
  const toggleLibraryHandler = () => {
    setLibraryStatus(!libraryStatus);
  };
  return (
    <div
      className={`library ${libraryStatus ? "active-library" : ""} ${
        isPlaying ? "isPlaying" : ""
      }`}
    >
      <div className="library-heading">
        <h2>Music Library</h2>
        <button onClick={() => toggleLibraryHandler()}>X</button>
      </div>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            key={song.id}
            id={song.id}
            songs={songs}
            setSongs={setSongs}
            song={song}
            setCurrentSong={setCurrentSong}
            audioRef={audioRef}
            setIsPlaying={setIsPlaying}
            isPlaying={isPlaying}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
