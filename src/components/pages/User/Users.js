import React from "react";
import styled from "styled-components";
import uuid from "uuid";
import { Link } from "react-router-dom";
import User from "./User";
import { NavBar } from "../../~reuseables/organisms/NavBar";
import PropTypes from "prop-types";

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

const Users = props => {
  const { users, deleteUser } = props;

  return (
    <React.Fragment>
      <NavBar navLinkArray={navLinkArray} />
      <main>
        <ContainerStyles>
          <h1>All user</h1>
          <StyledUser>
            {users.map(user => (
              <Link
                key={user.id}
                to={{
                  pathname: `/user/${user.id}`,
                  state: {
                    users
                  }
                }}
              >
                <User {...user} deleteUser={deleteUser} {...props} />
              </Link>
            ))}
          </StyledUser>
        </ContainerStyles>
      </main>
    </React.Fragment>
  );
};

User.propTypes = {
  users: PropTypes.array.isRequired
};

const StyledUser = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  a {
    text-decoration: none;

    &:hover {
      color: #656e78;
    }
  }
`;

const ContainerStyles = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  font-size: 1.5rem;

  h1 {
    margin: 4rem;
    text-align: center;
  }
`;

export default Users;
