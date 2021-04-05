import React from "react";
import Layout from "../components/Layout";
import SignupComponent from "../components/auth/SignupComponent";

function signup() {
  return (
    <Layout>
      <div
        style={{
          textAlign: "center",
          maxWidth: "600px",
          marginLeft: "auto",
          marginRight: "auto",
          padding: "20px"
        }}
      >
        <h2>Signup</h2>
        <div>
          <div style={{padding: "20px"}}>
            <SignupComponent />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default signup;
