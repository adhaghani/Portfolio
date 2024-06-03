import React from "react";

import Title from "../../../Component/Title/Title";
import Input from "../../../Component/Input/Input";

import Button from "../../../Component/Button/Button";

import "./Contact.css";
const Contact = () => {
  return (
    <div className="Contact" id="Contact">
      <div className="Contact-Container">
        <Title title="Contact" subtitle="Get in touch with me" />
        <div className="form-container">
          <form action="">
            <Input
              isInput={true}
              id={"email address"}
              name={"email address"}
              type={"email"}
              placeholder={"JohnCole@gmail.com"}
              label={"Email Address"}
            />
            <Input
              isInput={true}
              id={"Subject"}
              name={"Subject"}
              type={"text"}
              placeholder={"Internship Offer"}
              label={"Subject"}
            />
            <Input
              isInput={false}
              label={"Message"}
              name={"Message"}
              id={"Message"}
              placeholder={"lorem ipsum dolom colom"}
            />
            <div className="button-end">
              <Button
                type={"submit"}
                value={"Send Message"}
                classname="button Contact"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
