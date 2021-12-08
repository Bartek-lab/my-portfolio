import { useRef, useState } from "react";
import emailJs from "emailjs-com";
import classes from "./ContactMe.module.css";
import IconsBox from "../IconsBox/IconsBox";

const ContactMe = () => {
  const form = useRef();
  const [validator, setValidator] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();
    if (validator.name.length > 3 && validator.email.length > 3) {
      emailJs
        .sendForm(
          "service_dsevtmi",
          "template_unjvs9h",
          e.target,
          "user_zOrIKYhjMkLlp1Lez9tGk"
        )
        .then(
          (result) => {
            console.log(result.text);
            setValidator((prevState) => ({
              name: "",
              email: "",
              subject: "",
              message: "",
            }));

            return console.log("E-mail has been send.");
          },
          (error) => {
            console.log(error.text);
            return console.log("Error, e-mail isn't send.");
          }
        );
    } else {
      console.log("failed");
    }
  };

  const userNameChangeHandler = (e) => {
    let userName = e.target.value;
    setValidator((prevState) => ({
      ...prevState,
      name: userName,
    }));
  };
  const emailChangeHandler = (e) => {
    let email = e.target.value;
    setValidator((prevState) => ({
      ...prevState,
      email: email,
    }));
  };
  const subjectChangeHandler = (e) => {
    let subject = e.target.value;
    setValidator((prevState) => ({
      ...prevState,
      subject: subject,
    }));
  };
  const messageChangeHandler = (e) => {
    let message = e.target.value;
    setValidator((prevState) => ({
      ...prevState,
      message: message,
    }));
  };

  return (
    <div className={classes.contactMeSection} id="contactMe">
      <form
        ref={form}
        onSubmit={sendEmail}
        className={classes.contactForm}
        id="contact-form"
      >
        <h3>Contact Me</h3>
        <input type="hidden" name="contact_number" />
        <input
          type="text"
          name="user_name"
          placeholder="Name"
          onChange={userNameChangeHandler}
          value={validator.name}
          className={`${
            validator.name.length > 3 || validator.name.length === 0
              ? classes.personalInfoInput
              : [classes.personalInfoInput, classes.invalid].join(" ")
          } `}
        ></input>
        <input
          type="text"
          placeholder="E-mail"
          name="user_email"
          value={validator.email}
          onChange={emailChangeHandler}
          className={`${
            validator.email.includes("@") || validator.email.length === 0
              ? classes.personalInfoInput
              : [classes.personalInfoInput, classes.invalid].join(" ")
          } `}
        ></input>
        <input
          type="text"
          placeholder="Subject"
          name="subject"
          value={validator.subject}
          onChange={subjectChangeHandler}
          className={classes.personalInfoInput}
        ></input>
        <textarea
          type="email"
          name="message"
          placeholder="Write here..."
          onChange={messageChangeHandler}
          value={validator.message}
          className={classes.mainTextInput}
        ></textarea>

        <button value="send">Submit</button>
      </form>

      <div className={classes.footer}>
        <div className={classes.footerInfoBox}>
          <IconsBox />
          <p>E-mail : bartosz.benedyczak@gmail.com</p>
          <p>Bartek Benedyczak</p>
          <p>Poznań, Poland</p>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
