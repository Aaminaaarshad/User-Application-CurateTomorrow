import "./EventReason.css";

const EventReason = () => {
  return (
    <div className="about eventReason">
    <div className="about-r ">
        <img id="eventReason-img" src={require("../../assets/shape/why.png")} alt="shape"/>
    </div>
    <div className="about-l  event-reason-r">
        <h4>What</h4>
        <h6>Do We Want To Do This?</h6>
        <p>
        Governments alone are not responsible for addressing climate challenges, we all are! There is a notable increase in launch of cdlimate tech initiatives, impact funds and donor based grants. Governments around the globe are showing enhanced commitment towards the urgency and importance of climate action. However, the world is still c heating up getting closer to the 1.5 degree threshold. The United Nations has predicted that at least one year between 2022 and 2026 will be the warmest on record.
        <br/><br/>
        The world is witnessing melting glaciers, droughts and food shortages. The conclusion of COP26 has also shaken the world to realize that simply thinking or talking about climate change is no longer sufficient. We have only ten years to make amends otherwise it may well be too late. Fori and its growing partners believe that by bringing the best of various stakeholders such as policies from governments, technologies from innovators and a mindset of a scale-up we can start making a difference - for that very reason, we are teaming up and launching the Think (do) Tank cluster to curate a sustainable tomorrow, together.
        </p>
    </div>
</div>
  )
}

export default EventReason