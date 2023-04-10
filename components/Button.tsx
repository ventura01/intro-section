import React from "react";

type ButtonProps = {
  name: string;
  className: string;
};

const Button = (props: ButtonProps) => {
  return <button className={`${props.className}`}>{props.name}</button>;
};

export default Button;
