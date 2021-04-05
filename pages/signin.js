import React from "react";
import Layout from "../components/Layout";
import { withRouter } from "next/router";
import SigninComponent from "../components/auth/SigninComponent";

function signin({ router }) {
  const showRedirectMessage = () => {
    if (router.query.message) {
      return <div className="alert alert-danger">{router.query.message}</div>;
    } else {
      return;
    }
  };

  return (
    <Layout>
      <div
        style={{
          textAlign: "center",
          maxWidth: "600px",
          marginLeft: "auto",
          marginRight: "auto",
          padding: "20px",
        }}
      >
        <h2>Signin</h2>
        <div>
          <div style={{ padding: "20px" }}>
            <SigninComponent />
          </div>
          <br />

          <div className="row">
            <div className="col-md-6 offset-md-3">{showRedirectMessage()}</div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default withRouter(signin);
