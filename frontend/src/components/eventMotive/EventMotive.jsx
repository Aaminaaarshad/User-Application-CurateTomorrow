import "./eventMotive.css";
const EventMotivation = () => {
  return (
    <div className="about eventmotive">
        <div className="about-r " >
            <img id="ceoimg" src={require("../../assets/featured/CEO-fori.png")} alt="ceo"/>
        </div>
        <div className="about-l" >
            <h4>WHY</h4>
            <h6>Teamup For Oslo<br/>Innovation Week?</h6>
            <p>
                In 2021 the Oslo Innovation Week attracted 150 organizers, and 400 speakers and arranged 84 different events profiling the Nordic startup and scaleup ecosystem to 30.000 attendees from over 50 countries.
                <br/><br/>The OIW is expected to be even bigger this year, with an expected 50,000 attendees including 60 world-class speakers, 200 exhibitors, and 100 events and activities all wrapped in one giant gathering of nerds, policymakers, politicians, Industry leaders, startups, tech enthusiasts, and the general public.
                <br/><br/>The event provides an excellent opportunity for partners to form strong bidirectional links for the exchange of technological solutions, implementation partnerships, and sustainable ideas sharing. Through unprecedented collaboration based on a scale-up mindset, we hope to become a focal point for sharing, vetting, implementing, and accelerating thoughts, ideas, and experiments into scalable technologies.
            </p>
        </div>
    </div>
  )
}

export default EventMotivation