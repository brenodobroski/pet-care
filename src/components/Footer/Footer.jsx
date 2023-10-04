import "./Footer.scss";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer__left">
        <h2 className="Footer__h2">
          Pet<span className="Footer__span">.</span>care
        </h2>
        <h3 className="Footer__h3">Opening times</h3>
        <p className="Footer__p">Monday - Saturday: 10am - 4pm</p>
        <p className="Footer__p">Sunday: Closed</p>
        <div className="Footer__icons">
          <img src="facebook.svg" alt="" />
          <img src="instagram.svg" alt="" />
          <img src="twitter.svg" alt="" />
        </div>
      </div>
      <div className="Footer__right">
        <div className="Footer__col">
          <h4 className="Footer__h4">Address</h4>
          <ul>
            <li>
              <a className="Footer__col-a">15-17 Oldgate</a>
            </li>
            <li>
              <a className="Footer__col-a" href="">
                Morpeth
              </a>
            </li>
            <li>
              <a className="Footer__col-a" href="">
                NE61 1QF
              </a>
            </li>
            <li>
              <a className="Footer__col-a" href="">
                +001 (313) 512 895
              </a>
            </li>
            <li>
              <a className="Footer__col-a" href="">
                info@petcare.co.uk
              </a>
            </li>
          </ul>
        </div>
        <div className="Footer__col">
          <h4 className="Footer__h4">Quick Links</h4>
          <ul>
            <li>
              <a className="Footer__col-a">Cats</a>
            </li>
            <li>
              <a className="Footer__col-a" href="">
                Puppy
              </a>
            </li>
            <li>
              <a className="Footer__col-a" href="">
                Kitten
              </a>
            </li>
            <li>
              <a className="Footer__col-a" href="">
                Whole Prey
              </a>
            </li>
            <li>
              <a className="Footer__col-a" href="">
                Small Animal
              </a>
            </li>
          </ul>
        </div>
        <div className="Footer__col">
          <h4 className="Footer__h4">Here to Help</h4>
          <ul>
            <li>
              <a className="Footer__col-a">About us</a>
            </li>
            <li>
              <a className="Footer__col-a" href="">
                FAQ
              </a>
            </li>
            <li>
              <a className="Footer__col-a" href="">
                Blog
              </a>
            </li>
            <li>
              <a className="Footer__col-a" href="">
                Delivery
              </a>
            </li>
            <li>
              <a className="Footer__col-a" href="">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
