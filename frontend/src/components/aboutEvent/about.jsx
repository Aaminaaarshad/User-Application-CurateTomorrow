import "./about.css";

const About = () => {
  return (
    <div className="about">
        <div className="about-l">
            <h4>What</h4>
            <h6>Is this Event</h6>
            <p>Fori is thrilled to be collaborating with Oslo Innovation Week 2022 (OIW22) to host its inaugural think-tank cluster meetup. Participants will include delegates from C40, accelerators, startups, scale-ups, government leaders, diplomats, artists, and futurists. The event is open to a select group of 100 delegates and will be hosted in the heart of Oslo at NIO House on September 28, 2022.</p>
        </div>
        <div className="about-r">
            <img src={require("../../assets/logo/forilogo.png")} alt="logo"/>
        </div>
    </div>
  )
}

export default About;