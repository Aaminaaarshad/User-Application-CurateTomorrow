import "./video.css";

const Video = () => {
  return (
    <div className="video-container">
        <h6>Make the event great</h6>
        <div className="container-yt">
                <iframe className="responsive-iframe" src="https://www.youtube-nocookie.com/embed/RD6Cs6L5Hpc?controls=0" title="Oslo Innovation Week 2020" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen=""></iframe>
            {/* <iframe class="responsive-iframe" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe> */}
        </div>  
    </div>
  )
}

export default Video