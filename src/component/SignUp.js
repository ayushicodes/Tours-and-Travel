import React from "react";

function SignUp() {
  return (
    <div>
      <form className="form">
        <label>
          First Name:
          <input type="text" name="name" />
        </label>
        <label>
          Last Name:
          <input type="text" name="name" />
        </label>
        <label>
          Number:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>{" "}
    </div>
  );
}
export default SignUp;
