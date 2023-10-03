import "./Stats.scss";

const Stats = () => {
  return (
    <div className="Stats">
      <div className="Stats__card">
        <img src="StatsAward.svg" alt="" />
        <h2 className="Stats__h2">85+</h2>
        <p className="Stats__p">Award</p>
      </div>
      <div className="Stats__card">
        <img src="StatsClients.svg" alt="" />
        <h2 className="Stats__h2">96K</h2>
        <p className="Stats__p">Clients</p>
      </div>
      <div className="Stats__card">
        <img src="StatsEmployee.svg" alt="" />
        <h2 className="Stats__h2">60+</h2>
        <p className="Stats__p">Employee</p>
      </div>
      <div className="Stats__card">
        <img src="StatsProtection.svg" alt="" />
        <h2 className="Stats__h2">99%</h2>
        <p className="Stats__p">Protection</p>
      </div>
    </div>
  );
};

export default Stats;
