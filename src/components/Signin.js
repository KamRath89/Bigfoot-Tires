import React, { useRef } from "react";
import { firestore } from "../firebase";
import { addDoc, collection } from "@firebase/firestore";

export default function Signin() {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const ref = collection(firestore, "users");

  const handleSave = async (e) => {
    e.preventDefault();
    console.log(firstNameRef.current.value);
    console.log(lastNameRef.current.value);
    console.log(usernameRef.current.value);
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);

    let data = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value
    };

    try {
      addDoc(ref, data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="account-page">
      <div className="container">
        <div className="row">
          <div className="col-2">
            <img src="./assets/images/bigtires.png" width="100%" alt=""/>
            </div>
            <div className="col-2">
              <div className="form-container">
              <h4>Register</h4>
                <hr id="Indicator" />
              <form id="RegForm" onSubmit={handleSave}>
                <label for="firstName">First Name:</label>
                <input type="text" ref={firstNameRef} />
                <label for="lastName">Last Name:</label>
                <input type="text" ref={lastNameRef} />
                <label for="username">Username:</label>
                <input type="text" ref={usernameRef} />
                <label for="email">Email:</label>
                <input type="text" ref={emailRef} />
                <label for="password">Password:</label>
                <input type="text" ref={passwordRef} />
                <button type="submit" className="btn" value="Submit">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
