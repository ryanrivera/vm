import React, { Fragment, useState } from "react";
import { RichText } from "prismic-reactjs";
import emailjs, { init } from "emailjs-com";
import VisibilitySensor from "react-visibility-sensor";

const OptOutForm = ({ slice }) => {
  const [formSent, setFormSent] = useState(false);
  const [formError, setFormError] = useState("");
  const [errors, setErrors] = useState({});
  const [showResponse, setShowResponse] = useState("hidden");

  function sendEmail(e) {
    e.preventDefault();

    init("user_aGJFLX9Jg3s9gD7pWpfHG");

    if (validateForm(e.target)) {
      emailjs
        .sendForm(
          "service_2fm0zwp",
          "template_42mzimd",
          e.target,
          "user_aGJFLX9Jg3s9gD7pWpfHG"
        )
        .then(
          (result) => {
            setFormSent(true);
            setShowResponse("visible");
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

    messages.phone =
      target.phone.value.length < 1 ? "Phone number is required" : "";

    messages.sms = target.sms.value.length < 1 ? "SMS ID is required" : "";

    setErrors(messages);
    return messages.phone == "" && messages.sms == "";
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
              <div className="container md:flex gap-14 pt-40 md:pt-64 pb-32">
                <div className="contact-form-form md:w-7/12 lg:w-5/12">
                  <RichText render={slice.primary.formText} />
                  <p className="md:hidden">
                    <img
                      className="w-8/12 max-w-sm"
                      src={slice.primary.image.url}
                      alt={slice.primary.image.alt}
                    />
                  </p>
                  <div className="form-content lg:w-8/12">
                    <div className={"response " + showResponse}>
                      <div>
                        <h4>Thank you!</h4>
                        <p>We’ll get back to you shortly</p>
                        <a href="#" onClick={closeFormResponse}>
                          Close
                        </a>
                      </div>
                    </div>
                    <div className={showResponse === "visible" ? "hidden" : ""}>
                      <form
                        className="contact-form"
                        enctype="multipart/form-data"
                        onSubmit={sendEmail}
                      >
                        <div className="field-group my-5">
                          <label>Phone</label>
                          <input
                            type="text"
                            name="phone"
                            className="px-4 w-full h-10 border-2 border-valetGold"
                          />
                          <div className="formValidation text-base italic text-valetPink font-bold">
                            {errors.phone}
                          </div>
                        </div>

                        <div className="field-group my-5">
                          <label>SMS ID</label>
                          <input
                            type="text"
                            name="sms"
                            className="px-4 w-full h-10 border-2 border-valetGold"
                          />
                          <div className="formValidation text-base italic text-valetPink font-bold">
                            {errors.sms}
                          </div>
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
                <div className="contact-form-text md:w-6/12 lg:w-5/12">
                  <img
                    className="hidden md:block w-8/12 max-w-sm"
                    src={slice.primary.image.url}
                    alt={slice.primary.image.alt}
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

export default OptOutForm;
