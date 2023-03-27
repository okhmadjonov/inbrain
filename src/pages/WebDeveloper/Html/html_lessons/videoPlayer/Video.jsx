import "./Video.scss";
import { BsFillPlayFill } from "react-icons/bs";
import { FaRegHandPointer } from "react-icons/fa";
import { useContext, useRef, useState } from "react";
import video from "../../../../../assets/videos/vid.mp4";
import Context from "../../../../../components/Context/Context";
const Video = ({ setModal }) => {
  const [isplay, setisplay] = useState(false);
  const audioRef = useRef(null);

  const { ModalFunc } = useContext(Context)

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
        src={video}
        //   src="https://static.vecteezy.com/system/resources/previews/001/909/008/mp4/cool-rotating-triangle-wireframe-tunnel-3d-illustration-dj-loop-free-video.mp4"
      ></video>
      {!isplay && (
        <>
          <div className="playVideoWrapper" onClick={handleClick}>
            <div className="playVideoCircle"></div>
            <BsFillPlayFill className="playVideoBtn" />
          </div>

          <div
            className="modal__finger"
            onClick={() => ModalFunc(true)}
            style={{ cursor: "pointer" }}>
            <FaRegHandPointer
              style={{
                backgroundColor: "#dd515d",
                position: "absolute",
                width: "50px",
                borderRadius: "5px",
                height: "50px",
                cursor: "pointer",
                bottom: "70px",
                right: "20px",
                opacity: "0.5",
              }}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Video;
