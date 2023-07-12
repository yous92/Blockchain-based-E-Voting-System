import React from "react";
import Header from "./Header";
import HowItWorks from "./HowItWorks";

const Login = (props) => {
  return (
    <div className="">
      <Header connectWallet={props.connectWallet} />
      <HowItWorks />
    </div>
  );
};

export default Login;
