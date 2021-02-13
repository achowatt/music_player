import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ libraryStatus, setLibraryStatus }) => {
  const toggleLibraryHandler = () => {
    setLibraryStatus(!libraryStatus);
  };
  return (
    <nav>
      <div className="wrapper">
        <h1>Little Pinky Music</h1>
        <button onClick={toggleLibraryHandler}>
          Library &nbsp;
          <FontAwesomeIcon icon={faMusic} />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
