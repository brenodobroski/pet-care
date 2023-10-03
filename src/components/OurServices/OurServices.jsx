import "./OurServices.scss";

const OurServices = () => {
  return (
    <div className="OurServices">
      <div className="OurServices__text">
        <h2 className="OurServices__h2">Our Services</h2>
        <p className="OurServices__p">
          As a team of experienced Pet owners and lovers, <br /> we really get
          to know you and your pet.
        </p>

        <div className="OurServices__check">
          <div className="OurServices__check-line">
            <img src="checked.svg" alt="" className="OurServices__checked" />
            <p className="OurServices__checked-p">
              Treatment for heart related diseoses.
            </p>
          </div>
          <div className="OurServices__check-line">
            <img src="checked.svg" alt="" className="OurServices__checked" />
            <p className="OurServices__checked-p">
              Medical treatment for disorders.
            </p>
          </div>
          <div className="OurServices__check-line">
            <img src="checked.svg" alt="" className="OurServices__checked" />
            <p className="OurServices__checked-p">Broken bone treatment</p>
          </div>
        </div>
      </div>

      <img src="OurServices-dog.svg" alt="" />
    </div>
  );
};

export default OurServices;
