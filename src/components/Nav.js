import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ libraryStatus, setLibraryStatus, isPlaying }) => {
  const toggleLibraryHandler = () => {
    setLibraryStatus(!libraryStatus);
  };
  return (
    <nav>
      <div className="wrapper">
        <h1>LittlePinky Music</h1>
        <button
          className={`library-toggle ${isPlaying ? "is-playing" : " "}`}
          onClick={toggleLibraryHandler}
        >
          Library &nbsp;
          <FontAwesomeIcon icon={faMusic} />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
