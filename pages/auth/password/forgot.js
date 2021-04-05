import { useState } from "react";
import Layout from "../../../components/Layout";
import { forgotPassword } from "../../../actions/auth";

const ForgotPassword = () => {
  const [values, setValues] = useState({
    newpassword: "",
    message: "",
    error: "",
    showForm: true,
  });

  const { newpassword, message, error, showForm } = values;

  const handleChange = (name) => (e) => {
    setValues({
      ...values,
      message: "",
      error: "",
      [newpassword]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values, message: "", error: "" });

    forgotPassword({ newpassword }).then((data) => {
      if (data) {
        if (data.error) {
          setValues({ ...values, error: data.error });
        } else {
          setValues({
            ...values,
            message: data.message,
            newpassword: "",
            showForm: false,
          });
        }
      } else {
        console.log("no data recieved");
      }
    });
  };

  const showError = () =>
    error ? <div className="alert alert-danger">{error}</div> : "";
  const showMessage = () =>
    message ? <div className="alert alert-success">{message}</div> : "";

  const passwordForgotForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group pt-5">
        <input
          type="password"
          onChange={handleChange("newpassword")}
          className="form-control"
          value={newpassword}
          placeholder="Type your new password"
          required
        />
      </div>
      <div>
        <button className="btn btn-primary">Change password</button>
      </div>
    </form>
  );

  return (
    <Layout>
      <div className="container">
        <h2>Forgot password</h2>
        <hr />
        {showError()}
        {showMessage()}
        {showForm && passwordForgotForm()}
      </div>
    </Layout>
  );
};

export default ForgotPassword;
