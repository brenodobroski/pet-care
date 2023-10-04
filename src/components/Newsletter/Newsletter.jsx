import "./Newsletter.scss";

const Newsletter = () => {
  return (
    <div className="Newsletter">
      <h2 className="Newsletter__h2">
        Subscribe Newsletter & get <br />
        Per.care News
      </h2>
      <form>
        <input
          type="email"
          placeholder="Enter your email address"
          className="email"
        />
        <input
          type="button"
          className="btn-form"
          value="Subscribe now"
          id="btn-form"
        />
      </form>
    </div>
  );
};

export default Newsletter;
