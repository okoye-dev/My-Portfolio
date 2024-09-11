import React, { FC } from "react";

interface ButtonProps {
   text: string
};

const Button:FC<ButtonProps> = ({text}) => {
   return <button type="button" className="bg-white/10 rounded-3xl px-5 py-3">{text}</button>
};

export default Button;