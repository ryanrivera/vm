import React, { Fragment, useState } from "react";
import { RichText } from "prismic-reactjs";
import emailjs, { init } from "emailjs-com";
import VisibilitySensor from "react-visibility-sensor";

const ContactForm = ({ slice }) => {
  const [formSent, setFormSent] = useState(false);
  const [formError, setFormError] = useState("");
  const [errors, setErrors] = useState({});
  const [showResponse, setShowResponse] = useState("hidden");
  const emailRegex =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  function sendEmail(e) {
    e.preventDefault();

    init("user_aGJFLX9Jg3s9gD7pWpfHG");

    if (validateForm(e.target)) {
      emailjs
        .sendForm(
          "service_2fm0zwp",
          "template_33rj16i",
          e.target,
          "user_aGJFLX9Jg3s9gD7pWpfHG"
        )
        .then(
          (result) => {
            setFormSent(true);
            setShowResponse("visible");
            //dataLayer.push({'event' : 'formSubmitted', 'formName' : 'Contact Us'});
          },
          (error) => {
            setFormError(error.text);
            setShowResponse("visible");
          }
        );
    }
  }

  function closeFormResponse(e) {
    e.preventDefault();
    resetForm();
    setShowResponse("hidden");
  }

  function resetForm() {
    const form = document.querySelector(".section-contact-form form");
    form.reset();
  }

  function validateForm(target) {
    let messages = {};

    messages.name = target.name.value.length < 1 ? "Name is required" : "";

    messages.from_email = emailRegex.test(target.from_email.value)
      ? ""
      : "A valid email is required";

    setErrors(messages);
    return messages.name == "" && messages.from_email == "";
  }

  const [hasAnimated, setHasAnimated] = useState(false);
  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setHasAnimated(true);
    }
  };

  return (
    <Fragment>
      <VisibilitySensor onChange={onVisibilityChange} partialVisibility>
        {({ isVisible }) => {
          const isInView = isVisible || hasAnimated;
          return (
            <section
              className={
                isInView
                  ? "section-contact-form fadeIn enter"
                  : "section-contact-form fadeIn"
              }
            >
              <div className="container md:flex gap-14">
                <div className="contact-form-form md:w-7/12">
                  <div className="form-content lg:pr-20">
                    <div className={"response " + showResponse}>
                      {/* formSent, formError */}
                      {/*<div className='text-center'>
                          <div className='text-red-100'>{formError}</div>
                        </div> */}
                      <div>
                        <h2>Thank you!</h2>
                        <p>We’ll get back to you shortly</p>
                        <a href="#" onClick={closeFormResponse}>
                          Close
                        </a>
                      </div>
                    </div>
                    <div className={showResponse === "visible" ? "hidden" : ""}>
                      <form className="contact-form" onSubmit={sendEmail}>
                        <div className="field-group my-5">
                          <label>Name*</label>
                          <input
                            type="text"
                            name="name"
                            className="px-4 w-full h-10 border-2 border-valetGold"
                          />
                          <div className="formValidation text-base italic text-valetPink font-bold">
                            {errors.name}
                          </div>
                        </div>
                        <div className="field-group my-5">
                          <label>Email*</label>
                          <input
                            type="email"
                            name="from_email"
                            className="px-4 w-full h-10 border-2 border-valetGold"
                          />
                          <div className="formValidation text-base italic text-valetPink font-bold">
                            {errors.from_email}
                          </div>
                        </div>
                        <div className="field-group my-5">
                          <label>Phone</label>
                          <input
                            type="text"
                            name="phone"
                            className="px-4 w-full h-10 border-2 border-valetGold"
                          />
                        </div>
                        <div className="field-group my-5">
                          <label>Message</label>
                          <textarea
                            name="message"
                            className="px-4 h-32 w-full border-2 border-valetGold"
                          ></textarea>
                        </div>
                        <div className="my-10">
                          <button
                            className="btn border-2 border-black font-bold rounded-md py-2 p-14"
                            type="submit"
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="contact-form-text md:w-5/12">
                  <div className="">
                    <RichText render={slice.primary.description} />
                  </div>
                  <img
                    className="h-32 mt-14"
                    src="images/SVG/g-flags-gold-black-90.svg"
                    alt="Black and gold flags"
                  />
                </div>
              </div>
            </section>
          );
        }}
      </VisibilitySensor>
    </Fragment>
  );
};

export default ContactForm;
