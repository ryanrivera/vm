import React, { Fragment, useState } from "react";
import { RichText } from "prismic-reactjs";
import emailjs, { init } from "emailjs-com";
import VisibilitySensor from "react-visibility-sensor";

const CareersForm = ({ slice }) => {
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
          "template_sa02fba",
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

    messages.first_name =
      target.first_name.value.length < 1 ? "First name is required" : "";

    messages.last_name =
      target.last_name.value.length < 1 ? "Last name is required" : "";

    messages.from_email = emailRegex.test(target.from_email.value)
      ? ""
      : "A valid email is required";

    messages.phone =
      target.phone.value.length < 1 ? "Phone number is required" : "";

    messages.hours =
      target.hours.value.length < 1
        ? "Amount of hours hoping to work is required"
        : "";

    messages.availability =
      target.availability.value.length < 1
        ? "Days of the week available to work is required"
        : "";

    messages.shifts =
      target.shifts.value == "checked" ? "Preferred shifts is required" : "";

    messages.start =
      target.start.value.length < 1 ? "Available to start is required" : "";

    messages.nearby =
      target.nearby.value.length < 1
        ? "Live near downtown San Diego is required"
        : "";

    messages.my_file =
      target.my_file.value.length < 1 ? "Please attach your resume" : "";

    setErrors(messages);
    return (
      messages.first_name == "" &&
      messages.last_name == "" &&
      messages.from_email == "" &&
      messages.phone == "" &&
      messages.hours == "" &&
      messages.availability == "" &&
      messages.shifts == "" &&
      messages.start == "" &&
      messages.nearby == "" &&
      messages.my_file == ""
    );
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
              <div className="container md:flex gap-14 pb-32">
                <div className="contact-form-form md:w-7/12">
                  {/* <RichText render={slice.primary.formText} /> */}
                  <RichText render={slice.primary.title} />
                  <RichText render={slice.primary.description} />
                  <div className="form-content">
                    <div className={"response " + showResponse}>
                      {/* formSent, formError */}
                      {/*<div className='text-center'>
                          <div className='text-red-100'>{formError}</div>
                        </div> */}
                      <div>
                        <h3>Thank you!</h3>
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
                        <div className="grid grid-cols-2 gap-8 my-5">
                          <div className="field-group">
                            <label>First Name</label>
                            <input
                              type="text"
                              name="first_name"
                              className="px-4 w-full h-10 border-2 border-valetGold"
                            />
                            <div className="formValidation text-base italic text-valetPink font-bold">
                              {errors.first_name}
                            </div>
                          </div>
                          <div className="field-group">
                            <label>Last Name</label>
                            <input
                              type="text"
                              name="last_name"
                              className="px-4 w-full h-10 border-2 border-valetGold"
                            />
                            <div className="formValidation text-base italic text-valetPink font-bold">
                              {errors.last_name}
                            </div>
                          </div>
                        </div>
                        <div className="field-group my-5">
                          <label>Email</label>
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
                          <div className="formValidation text-base italic text-valetPink font-bold">
                            {errors.phone}
                          </div>
                        </div>
                        <div className="field-group my-5">
                          <label>
                            How many hours are you hoping to work each week?
                          </label>
                          <input
                            type="text"
                            name="hours"
                            className="px-4 w-full h-10 border-2 border-valetGold"
                          />
                          <div className="formValidation text-base italic text-valetPink font-bold">
                            {errors.hours}
                          </div>
                        </div>
                        <div className="field-group my-5">
                          <label>
                            What days of the week are you available to work?
                          </label>
                          <ul className="list-none pl-0">
                            <li>
                              <input
                                type="radio"
                                name="availability"
                                value="Weekdays"
                                className="px-4 border-2 border-valetGold"
                              />{" "}
                              Weekdays
                            </li>
                            <li>
                              <input
                                type="radio"
                                name="availability"
                                value="Weekends"
                                className="px-4 border-2 border-valetGold"
                              />{" "}
                              Weekends
                            </li>
                            <li>
                              <input
                                type="radio"
                                name="availability"
                                value="Mix of both"
                                className="px-4 border-2 border-valetGold"
                              />{" "}
                              Mix of both
                            </li>
                          </ul>
                          <div className="formValidation text-base italic text-valetPink font-bold">
                            {errors.availability}
                          </div>
                        </div>
                        <div className="field-group my-5">
                          <label>Preferred shifts?</label>
                          <ul className="list-none pl-0">
                            <li>
                              <input
                                type="checkbox"
                                name="shifts"
                                value="Daytime"
                                className="px-4 border-2 border-valetGold"
                              />{" "}
                              Daytime
                            </li>
                            <li>
                              <input
                                type="checkbox"
                                name="shifts"
                                value="Evenings"
                                className="px-4 border-2 border-valetGold"
                              />{" "}
                              Evenings
                            </li>
                            <li>
                              <input
                                type="checkbox"
                                name="shifts"
                                value="Evenings to close"
                                className="px-4 border-2 border-valetGold"
                              />{" "}
                              Evenings to close (12am to 2am)
                            </li>
                            <li>
                              <input
                                type="checkbox"
                                name="shifts"
                                value="Overnight"
                                className="px-4 border-2 border-valetGold"
                              />{" "}
                              Overnight
                            </li>
                          </ul>
                          <div className="formValidation text-base italic text-valetPink font-bold">
                            {errors.shifts}
                          </div>
                        </div>
                        <div className="field-group my-5">
                          <label>
                            How soon are you available to start work?
                          </label>
                          <input
                            type="text"
                            name="start"
                            className="px-4 w-full h-10 border-2 border-valetGold"
                          />
                          <div className="formValidation text-base italic text-valetPink font-bold">
                            {errors.start}
                          </div>
                        </div>
                        <div className="field-group my-5">
                          <label>Do you live near downtown San Diego?</label>
                          <input
                            type="text"
                            name="nearby"
                            className="px-4 w-full h-10 border-2 border-valetGold"
                          />
                          <div className="formValidation text-base italic text-valetPink font-bold">
                            {errors.nearby}
                          </div>
                        </div>
                        <div className="field-group my-5">
                          <label>
                            Anything else that you would like to share with our
                            hiring team?
                          </label>
                          <textarea
                            name="share"
                            className="px-4 h-32 w-full border-2 border-valetGold"
                          ></textarea>
                        </div>
                        <div className="field-group my-5">
                          <label>Attach your resume?</label>
                          <input
                            type="file"
                            name="my_file"
                            className="w-full"
                          />
                          <div className="formValidation text-base italic text-valetPink font-bold">
                            {errors.my_file}
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
                <div className="contact-form-text md:w-5/12"></div>
              </div>
            </section>
          );
        }}
      </VisibilitySensor>
    </Fragment>
  );
};

export default CareersForm;
