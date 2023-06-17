// import "./Video.scss";
import { BsFillPlayFill } from "react-icons/bs";
import { useRef, useState } from "react";
import video from "../../../../../assets/videos/vid.mp4";
const Video = ({ setModal }) => {
  const [isplay, setisplay] = useState(false);
  const audioRef = useRef(null);
  const handleClick = () => {
    audioRef.current.play();
  };

  return (
    <div className="videoBlock">
      <video
        ref={audioRef}
        controls={isplay}
        onPlay={() => setisplay((prev) => true)}
        onPause={() => setisplay((prev) => false)}
        className="video"
        src={video}></video>
      {!isplay && (
        <>
          <div className="playVideoWrapper" onClick={handleClick}>
            <div className="playVideoCircle"></div>
            <BsFillPlayFill className="playVideoBtn" />
          </div>
        </>
      )}
    </div>
  );
};

export default Video;
