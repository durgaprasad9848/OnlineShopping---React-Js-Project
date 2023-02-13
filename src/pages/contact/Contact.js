import React, { useRef } from "react";
import './Contact.css';
export const Contact = () => {
  const name = useRef(null);
  const email = useRef(null);
  const phnum = useRef(null);

  async function postrequsthandler(data) {
    const response = await fetch(
      "https://test-api-c7d27-default-rtdb.firebaseio.com/contact.json",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const result = await response.json();

  }

  const submithandler = (e) => {
    e.preventDefault();
    const data = {
      Name: name.current.value,
      Email_id: email.current.value,
      phone_num: phnum.current.value,
    };

    postrequsthandler(data);
  };

  return (
    <div className="page">
      <form>
        <center><h3>contact us</h3></center>
        <h5>Name</h5>
        <input type="text" ref={name} />
        <h5>Email</h5>
        <input type="email" ref={email} />
        <h5>phone number : </h5>
        <input type="text" ref={phnum} />
        <br/>
        <br/>
        <button
          onClick={ 
            submithandler
          }
        >
          {" "}
          Contact us{" "}
        </button>
      </form>
    </div>
  );
};