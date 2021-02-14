import React, { useState, useRef } from "react";
import "./styles/app.scss";
import data from "./data";
import Particles from "react-particles-js";

//Adding components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import Nav from "./components/Nav";

function App() {
  //Ref
  const audioRef = useRef(null);
  //state
  const [songs, setSongs] = useState(data);
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });
  const [libraryStatus, setLibraryStatus] = useState(false);
  //Event Handler
  const timeUpdateHandler = (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    //Calculate %
    const animationPercentage = Math.round((currentTime / duration) * 100);
    setSongInfo({ ...songInfo, currentTime, duration, animationPercentage });
  };
  const songEndHandler = async () => {
    let currentIndex = songs.findIndex((song) => song.id == currentSong.id);
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    if (isPlaying) audioRef.current.play();
  };
  return (
    <div
      className={`App ${libraryStatus ? "active-library" : ""} ${
        isPlaying ? "is-playing" : ""
      }`}
    >
      <Nav
        libraryStatus={libraryStatus}
        setLibraryStatus={setLibraryStatus}
        isPlaying={isPlaying}
      />
      <Song currentSong={currentSong} isPlaying={isPlaying} />
      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        audioRef={audioRef}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        setIsPlaying={setIsPlaying}
        songs={songs}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
      />
      <Library
        songs={songs}
        setCurrentSong={setCurrentSong}
        setSongInfo={setSongInfo}
        audioRef={audioRef}
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        songInfo={songInfo}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
        setLibraryStatus={setLibraryStatus}
      />
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
        onEnded={songEndHandler}
      ></audio>
      {isPlaying && (
        <Particles
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            pointerEvents: "none",
            zIndex: "-1",
            background:
              "linear-gradient(to right bottom, black, rgb(33, 5, 54), rgb(67, 13, 75), rgb(33, 5, 54), black)",
          }}
          height="100%"
          width="100%"
          params={{
            particles: {
              color: {
                value: "#ffcfe057",
              },
              line_linked: {
                enable: false,
              },
              number: {
                value: 50,
              },
              size: {
                value: 3,
              },
            },
          }}
        />
      )}
    </div>
  );
}

export default App;
