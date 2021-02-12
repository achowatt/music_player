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
}) => {
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <h2>Library</h2>
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
