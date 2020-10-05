import React from "react";
import video from "../../src/assets/sample-mp4-file.mp4";

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

//class properties transform
//https://nestedsoftware.com/2018/05/28/javascript-frustration-classes-and-class-properties-transform-16gl.32994.html

  playVideo = () => {
    //console.log(this.videoRef);
    this.videoRef.current.play();
  }

  pauseVideo = () => {
    this.videoRef.current.pause();
  }

  render() {
    return (
      <div>
        <video ref={this.videoRef} width="300" height="200" controls>
          <source src={video} type="video/mp4"></source>
        </video>
        <div>
          <button onClick={this.playVideo}>Play</button>
          <button onClick={this.pauseVideo}>Pause</button>
        </div>
      </div>
    );
  }
}

export default VideoPlayer;
