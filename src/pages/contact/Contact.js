import React from "react";
import "./Contact.css";

export const Contact = () => {
  return (
    <div className="contact-container">
      <form
        className="form-container"
        action="https://formsubmit.co/vandbpressurewashing@gmail.com"
        method="POST"
      >
        <input
          type="hidden"
          name="_subject"
          value="Pressure Washing Customer!!!"
        ></input>
        <input
          type="hidden"
          name="_next"
          value="https://www.vandbpressurewashing.com"
        ></input>
        <label className="name">Name:</label>
        <input placeholder="Name" type="text" name="name" autoFocus required />
        <label className="email">Email:</label>
        <input placeholder="Email" type="email" name="email" required />
        <label className="text-area">Message: </label>
        <textarea
          placeholder="What type of service are you looking for?"
          cols="39"
          rows="4"
          name="message"
          required
        ></textarea>
        <div className="button-container">
          <button className="button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
