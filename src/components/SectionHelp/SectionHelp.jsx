import "./SectionHelp.scss";

const SectionHelp = () => {
  return (
    <div className="SectionHelp">
      <div className="SectionHelp__img-left">
        <img src="SectionHelpLeft.svg" alt="" />
      </div>
      <div className="SectionHelp__Text">
        <h3 className="SectionHelp__h3">How can we help</h3>

        <h2 className="SectionHelp__h2">
          While you are on vacation or <br /> at work can be stressful
        </h2>
      </div>
      <div className="SectionHelp__img-right">
        <img src="SectionHelpRight.svg" alt="" />
      </div>
    </div>
  );
};

export default SectionHelp;
