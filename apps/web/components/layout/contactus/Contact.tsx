import React from "react";
import ContactDetails from "./ContactDetails";
import SendMessage from "./SendMessage";
import FollowUs from "./FollowUs";

const Contact = () => {
  return (
    <div className="container mx-auto p-10">
      <div className="grid lg:grid-cols-2">
        <div>
          <ContactDetails />
          <FollowUs />
        </div>
        <div>
          <SendMessage />
        </div>
      </div>
    </div>
  );
};

export default Contact;
