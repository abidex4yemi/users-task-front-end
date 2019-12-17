import React from "react";
import styled from "styled-components";
import {
  ContainerStyled,
  primary_color,
  secondary_color,
  white,
  boxShadow
} from "../../atoms";

export const Header = props => {
  const { children } = props;

  return (
    <HeaderStyled>
      <ContainerStyled>
        <nav role="navigation">{children}</nav>
      </ContainerStyled>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${white};
  background: ${primary_color}
    linear-gradient(120deg, ${secondary_color} 0, ${primary_color} 100%)
    no-repeat;
  box-shadow: ${boxShadow};

  nav {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-content: center;

    ul {
      margin: 0;
      padding: 0;
      list-style: none;

      li {
        display: inline-block;

        a {
          font-family: Verdana, Geneva, Tahoma, sans-serif;
        }
      }
    }

    img {
      width: 30px;
      height: 30px;
    }
  }
`;
