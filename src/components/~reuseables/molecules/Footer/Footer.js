import React from "react";
import styled from "styled-components";
import { ContainerStyled, dark, small_font_size } from "../../atoms";

export const Footer = props => {
  const { children } = props;

  return (
    <FooterStyled>
      <ContainerStyled>
        <section>{children}</section>
      </ContainerStyled>
    </FooterStyled>
  );
};

const FooterStyled = styled.footer`
  height: 50px;
  font-size: ${small_font_size};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${dark};
  border-top: 1px solid ${dark};

  section {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-content: center;
  }
`;
