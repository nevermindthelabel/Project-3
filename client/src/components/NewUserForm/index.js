import React from 'react';
import "./style.css";

function NewUserForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <label>
        User Name:
            <input type="text" name="userName" value={props.value} onChange={props.onChange} />
      </label>

      <label>
        Password:
            <input type="password" name="password" value={props.value} onChange={props.onChange} />
      </label>

      <button onClick={props.onClick} variant="primary" size="sm">
        Submit
          </button>
    </form>
  );
}

export default NewUserForm;