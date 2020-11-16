import React from "react";
import { Icon } from "../icon";

export const ErrorComponent: React.FC = () => {
  return (
    <div className="box-container">
      <div className="box">
        <Icon type='error'/>
        <p> Something went wrong!</p>
        <p> Try again later :(</p>
      </div>
    </div>
  );
};
