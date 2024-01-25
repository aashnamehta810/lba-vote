const RegisterForm = () => {
  return (
    <form>
      <div className="form-row">
        <div className="col-12 col-md-6">
          <div className="form-group">
            <label htmlFor="firstName">first name</label>
            <input id="firstName" type="text" value="Bryan" />
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="form-group">
            <label htmlFor="lastName">last name</label>
            <input id="lastName" type="text" value="Payton" />
          </div>
        </div>
      </div>
      <div className="form-row">
        <div className="col-12">
          <div className="form-group select-field">
            <label>League applying for</label>
            <select>
              <option value="Division">Junior Basketball</option>
              <option value="test">Junior Basetball</option>
              <option value="test1">Junior Bowling</option>
              <option value="test2">Teens Basketball</option>
            </select>
          </div>
        </div>
      </div>
      <div className="form-row">
        <div className="col-12">
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input id="age" type="number" value="4" />
          </div>
        </div>
      </div>
      <div className="form-row">
        <div className="col-12">
          <div className="form-group">
            <label htmlFor="schoolAttending">
              School attending (where applicable)
            </label>
            <input
              id="schoolAttending"
              type="text"
              value="Spring Hill Charter School"
            />
          </div>
        </div>
      </div>
      <div className="form-row">
        <div className="col-12">
          <div className="form-group">
            <label htmlFor="phone">phone</label>
            <input id="phone" type="text" value="732.994.9780" />
          </div>
        </div>
      </div>
      <div className="form-row">
        <div className="col-12">
          <div className="form-group">
            <label htmlFor="email">email</label>
            <input id="email" type="email" value="random@email.com" />
          </div>
        </div>
      </div>
      <div className="form-row">
        <div className="col-12">
          <div className="form-group select-field">
            <label>
              Have you attended LBA before? <br /> If yes, which league?
            </label>
            <select>
              <option value="Division">Junior Basketball</option>
              <option value="test">Junior Basetball</option>
              <option value="test1">Junior Bowling</option>
              <option value="test2">Teens Basketball</option>
            </select>
          </div>
        </div>
      </div>

      <button type="submit" className="blueOutline-btn contact-form-btn">
        <img src="/assets/images/writing-icon.svg" alt="icon" />
        <span>Register</span>
      </button>
    </form>
  );
};

export default RegisterForm;
