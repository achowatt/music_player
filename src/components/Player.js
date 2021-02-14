import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
  setCurrentSong,
  currentSong,
  isPlaying,
  setIsPlaying,
  setSongInfo,
  audioRef,
  songInfo,
  setSongs,
  songs,
}) => {
  //Event Handlers
  const activeLibraryHandler = (nextPrev) => {
    const selectedSong = songs.map((song) => {
      if (song.id === nextPrev.id) {
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
    setSongs(selectedSong);
  };

  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const dragHandler = (e) => {
    setSongInfo({ ...songInfo, currentTime: e.target.value });
    audioRef.current.currentTime = e.target.value;
  };

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const skipTrackHandler = async (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === "skip-forward") {
      await setCurrentSong(
        songs[(currentIndex + 3 * songs.length + 1) % songs.length]
      );
      activeLibraryHandler(
        songs[(currentIndex + 3 * songs.length + 1) % songs.length]
      );
    } else if (direction === "skip-back") {
      await setCurrentSong(
        songs[(currentIndex + 100 * songs.length - 1) % songs.length]
      );
      activeLibraryHandler(
        songs[(currentIndex + 100 * songs.length - 1) % songs.length]
      );
    }
    isPlaying && audioRef.current.play();
  };
  //Add the styles
  const trackAnim = {
    transform: `translateX(${songInfo.animationPercentage}%)`,
  };

  const trackColor = {
    backgroundImage: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`,
  };

  const controlColor = isPlaying ? "pink" : "grey";
  return (
    <div className="player">
      <div className="time-control">
        <p className={`time ${isPlaying ? "is-playing" : ""}`}>
          {getTime(songInfo.currentTime)}
        </p>
        <div className="track" style={trackColor}>
          <input
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            onChange={dragHandler}
            type="range"
          />
          <div className="animate-track" style={trackAnim}></div>
        </div>
        <p className={`time ${isPlaying ? "is-playing" : ""}`}>
          {songInfo.duration ? getTime(songInfo.duration) : "0:00"}
        </p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          color={controlColor}
          className="skip-back"
          size="2x"
          icon={faAngleLeft}
          onClick={() => skipTrackHandler("skip-back")}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          color={controlColor}
          onClick={playSongHandler}
          className="play"
          size="2x"
          icon={isPlaying ? faPause : faPlay}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          color={controlColor}
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
          onClick={() => skipTrackHandler("skip-forward")}
        ></FontAwesomeIcon>
      </div>
    </div>
  );
};

export default Player;
