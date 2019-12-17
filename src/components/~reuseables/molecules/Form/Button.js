import React from "react";
import PropTypes from "prop-types";
import { ButtonPrimaryStyled } from "../../atoms";

export const Button = props => {
  const { buttonText, type, onClick } = props;

  return (
    <ButtonPrimaryStyled onClick={onClick} type={type}>
      {buttonText}
    </ButtonPrimaryStyled>
  );
};

Button.propTypes = {
  buttonText: PropTypes.any,
  type: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

Button.defaultProps = {
  type: "button"
};
