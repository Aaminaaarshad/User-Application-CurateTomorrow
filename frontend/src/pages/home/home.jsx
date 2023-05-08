import Hero from "../../components/hero/Hero";
import About from "../../components/aboutEvent/about";
import EventGoal from "../../components/eventGoal/eventGoal";
import EventReason from "../../components/eventReason/EventReason";
import "./home.css"
import EventMotive from "../../components/eventMotive/EventMotive";
import Video from "../../components/video/video";
import Speaker from "../../components/speaker/speaker";
import Partners from "../../components/partners/partners";
import Sponsorship from "../../components/sponsorship/sponsorship";
import Feautred from "../../components/featured/feautred";
import Counter from "../../components/counter/counter";
import Header from "../../components/header/header";

const Home = () => {
  return (
    <>
    <Header/>

    <div className="home-page">
      <div className="hero-section">
        <Hero/>
        <svg viewBox="0 0 1440 220" style={{marginBottom:"-6px"}}>
        <path fill="#fff" fillOpacity="1" d="M0,0L40,37.3C80,75,160,149,240,149.3C320,149,400,75,480,53.3C560,32,640,64,720,96C800,128,880,160,960,176C1040,192,1120,192,1200,165.3C1280,139,1360,85,1400,58.7L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
        </svg>
      </div>
      <Counter/>
      <About/>
      <EventGoal/>
      <EventMotive/>
      <EventReason/>
      <Video/>
      <Speaker/>
      <Partners/>
      <Sponsorship/>
      {/* <Feautred/> */}
    </div>
    </>
  )
}

export default Home