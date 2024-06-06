import React from "react";
import scss from "./Error.module.scss";
import Svg from "../../../../svg/icon-1.svg";

const Error = () => {
  return (
    <div className={scss.div}>
      <h1>
        Error<span>404</span>
      </h1>
    </div>
  );
};

export default Error;
