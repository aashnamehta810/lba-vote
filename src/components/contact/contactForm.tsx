const ContactForm = () => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="fullName">full name*</label>
        <input id="fullName" type="text" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email*</label>
        <input id="email" type="mail" />
      </div>
      <div className="form-group">
        <label htmlFor="phone">phone*</label>
        <input id="phone" type="text" />
      </div>
      <div className="form-group">
        <label htmlFor="message">message*</label>
        <textarea id="message" />
      </div>

      <button type="submit" className="orangeOutline-btn contact-form-btn">
        <span>submit</span>
      </button>
    </form>
  );
};

export default ContactForm;
