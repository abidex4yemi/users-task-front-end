import React from "react";
import styled from "styled-components";
import uuid from "uuid";
import PropTypes from "prop-types";
import User from "./User";
import { NavBar } from "../../~reuseables/organisms/NavBar";

const navLinkArray = [
  {
    id: uuid(),
    to: "/",
    linkText: "users"
  },
  {
    id: uuid(),
    to: "/user/add",
    linkText: "Add user"
  }
];

const SingleUser = props => {
  const { users } = props.location.state;

  const { id } = props.match.params;

  const user = users.find(user => `${user.id}` === id);

  return (
    <React.Fragment>
      {user ? (
        <React.Fragment>
          <NavBar navLinkArray={navLinkArray} />
          <main>
            <ContainerStyles>
              <h1>User info</h1>
              <SingleUserStyled>
                <User {...user} />
              </SingleUserStyled>
            </ContainerStyles>
          </main>
        </React.Fragment>
      ) : (
        "user does not exist"
      )}
    </React.Fragment>
  );
};

SingleUser.propTypes = {
  props: PropTypes.shape({
    name: PropTypes.string.isRequired
  })
};

const ContainerStyles = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  font-size: 1.5rem;

  h1 {
    margin: 4rem;
    text-align: center;
  }
`;

const SingleUserStyled = styled.section`
  display: flex;
  justify-content: center;
`;

export default SingleUser;
