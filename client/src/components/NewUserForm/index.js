import React from "react";
import "./style.css";

function NewUserForm(props) {
  return (
    <div className="container">
      <div className="container background-color">
        <div className="backgroundColor">
          <h2 className="text-center">
            Welcome to Traffic<span class="text-danger">Mon</span>!
          </h2>
          <form
            className="d-flex justify-content-center"
            onSubmit={props.handleSubmit}
          >
            <label>
              User Name:
              <input
                type="text"
                name="userName"
                value={props.value}
                onChange={props.onChange}
              />
            </label>

            <label>
              Password:
              <input
                type="password"
                name="password"
                value={props.value}
                onChange={props.onChange}
              />
            </label>

            <button
              className="btn btn-primary"
              onClick={props.onClick}
              variant="primary"
              size="sm"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewUserForm;
