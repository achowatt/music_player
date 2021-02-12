import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";
import { playSong } from "../util";

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
  //UseEffect
  useEffect(() => {
    const selectedSong = songs.map((song) => {
      if (song.id === currentSong.id) {
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
  }, [currentSong]);

  //Event Handlers
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

  const skipTrackHandler = (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === "skip-forward") {
      setCurrentSong(
        songs[(currentIndex + 3 * songs.length + 1) % songs.length]
      );
    } else if (direction === "skip-back") {
      setCurrentSong(
        songs[(currentIndex + 100 * songs.length - 1) % songs.length]
      );
    }
    playSong(setIsPlaying, audioRef);
  };
  //Add the styles
  const trackAnim = {
    transform: `translateX(${songInfo.animationPercentage}%)`,
  };

  const trackColor = {
    backgroundImage: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`,
  };

  console.log(songInfo.animationPercentage);
  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
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
        <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          className="skip-back"
          size="2x"
          icon={faAngleLeft}
          onClick={() => skipTrackHandler("skip-back")}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          size="2x"
          icon={isPlaying ? faPause : faPlay}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
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
