import "./eventGoal.css";

const EventGoal = () => {
  return (
    <div className="eventGoal">
        <img src={require("../../assets/shape/counter-shape-2.png")} alt="shape"/>
        <img src={require("../../assets/shape/hero-sahpe-1.png")} alt="shape"/>
        <img src={require("../../assets/shape/ab-shape-4.png")} alt="shape"/>
        <div className="eventGoal-container about">
            <div className="eventGoal-container-l">
                <div className="countSpeaker goalcounter">
                    <h4>20</h4>
                    <p>Speakers</p>
                </div>
                <div className="countworkshop goalcounter">
                    <h4>05</h4>
                    <p>Workshop</p>
                </div>
                <div className="countattende goalcounter">
                    <h4>100</h4>
                    <p>Attendees</p>
                </div>
            </div>
            <div className="eventGoal-container-r">
                <div className="about-l" style={{width:"100%"}}>
                    <h4>What</h4>
                    <h6>Do We Want To Do?</h6>
                    <p>
                        The event will bring together difference-makers in
                        the climate fight under one roof. This will be
                        the start of a 10-year mandate to reverse the
                        years of climate damage. The aim is to scale
                        everything that works with a startup scaleup mindset.
                        These include climate-focused technologies, policy,
                        great ideas, and tested best practices
                        among participating delegates and the respective organizations
                        in order to have a speedy global impact. The Think(&do)
                        Tank with a10-year mandate and commitment to execute
                        with a scale up mindset can help make the difference
                        in the fight against climate change.<br/><br/>
                        The event will begin with round table introductions followed by a
                        deep dive design thinking-led session for the creation of the think
                        tank's 10-year open mandate. An important part of the event would be
                        the exchange of current ideas, technologies, and their current impacts
                        by the event's participants and their respective organizations.
                    </p>
                    <div className="eventGoal-detail">
                        <div>
                        <h4>Where</h4>
                        <p>NIO House, Oslo</p>
                        </div>
                        <div>
                        <h4>When</h4>
                        <p>28th September, 2022</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EventGoal;