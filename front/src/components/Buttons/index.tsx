import React from "react";
import { StyledButton } from "./style";

interface IButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit";
  buttonStyle: string;
  onClick?: () => void;
  disable?: boolean;
}

const Button = ({
  buttonStyle,
  disable,
  children,
  type,
  onClick,
}: IButtonProps) => {
  return (
    <StyledButton
      buttonStyle={buttonStyle}
      type={type}
      onClick={onClick}
      disabled={disable}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
