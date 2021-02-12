export const playSong = (setIsPlaying, audioRef) => {
  //   audioRef.current.play();
  if (setIsPlaying) {
    const playPromise = audioRef.current.play();
    if (playPromise !== undefined) {
      playPromise.then((audio) => {
        audioRef.current.play();
        setIsPlaying(true);
      });
    }
  }
};
