import React from "react";
import Popup from "./Popup";
import { useState } from "react";
import Form from "./Form";
import "./Main.css";

function Main() {
  const [buttonPopup, setbuttonPopup] = useState(false);
  return (
    <div className="Main">
      <div onClick={() => setbuttonPopup(true)}>
        <h1 className="pointer">Contact Form</h1>
        <p>Fill the form to resolve your query.</p>
      </div>
      <Popup trigger={buttonPopup} setTrigger={setbuttonPopup}>
        <div className="PopupContent">
          <Form />
        </div>
      </Popup>
    </div>
  );
}

export default Main;
