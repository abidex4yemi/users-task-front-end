import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import uuid from "uuid";
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

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      errors: {},
      editMode: false,
      userId: null
    };
    this.baseURL = "http://localhost:3333";
  }

  componentDidMount() {
    // populate form input if edit mode is true
    // Note: editMode is turned on if
    // url path: /user/<id>/edit
    // and form input will be populated with friend data
    this.populateFormInput();
  }

  addUser = event => {
    event.preventDefault();
    const url = `${this.baseURL}/users`;

    const { name } = this.state;
    const errors = this.validateInput({ name });

    if (!Object.keys(errors).length) {
      const newUser = {
        name: name
      };

      axios
        .post(url, newUser)
        .then(res => {
          this.setState(() => ({
            name: "",
            errors: {}
          }));

          this.props.updateUserList(res.data);
          this.props.history.push("/");
        })
        .catch(err => err)
        .finally(err => err);
    }
  };

  validateInput = ({ name }) => {
    let errors = {};

    if (name.trim() === "") {
      errors.name = "Name is required";
    }

    this.setState(prevState => ({
      ...prevState,
      errors
    }));

    return errors;
  };

  handleInputChange = evt => {
    const field = evt.target.name;
    const value = evt.target.value;
    this.setState(() => ({ [field]: value }));
  };

  updateUser = evt => {
    evt.preventDefault();
    const { name, userId } = this.state;

    const url = `${this.baseURL}/users/${userId}`;

    // update user details
    const updatedUser = {
      name
    };

    axios
      .patch(url, updatedUser)
      .then(res => {
        this.setState(() => ({
          name: "",
          editMode: false,
          userId: null,
          errors: {}
        }));

        this.props.updateUserList(res.data);
        this.props.history.push("/");
      })
      .catch(err => err)
      .finally(err => err);
  };

  populateFormInput = () => {
    const { id } = this.props.match.params;
    const findUserById = this.props.users.find(user => `${user.id}` === id);

    if (typeof findUserById !== "undefined") {
      const { name } = findUserById;

      this.setState(prevState => ({
        editMode: !prevState.editMode,
        userId: id,
        name,
        errors: {}
      }));
    }
  };

  render() {
    const { name, errors, editMode } = this.state;

    return (
      <React.Fragment>
        <NavBar navLinkArray={navLinkArray} />
        <main>
          <ContainerStyles>
            <Content>
              {editMode ? <h2>Edit user info</h2> : <h2>Add New user</h2>}

              <div>
                <form onSubmit={this.addUser}>
                  <InputContainer>
                    <InputStyled
                      onChange={this.handleInputChange}
                      placeholder="Name"
                      value={name}
                      name="name"
                    />
                    <ErrorStyle>{errors.name || ""}</ErrorStyle>
                  </InputContainer>

                  {editMode ? (
                    <ButtonStyled type="submit" onClick={this.updateUser}>
                      Update user
                    </ButtonStyled>
                  ) : (
                    <ButtonStyled type="submit" onClick={this.addUser}>
                      Add user
                    </ButtonStyled>
                  )}
                </form>
              </div>
            </Content>
          </ContainerStyles>
        </main>
      </React.Fragment>
    );
  }
}

const ContainerStyles = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  font-size: 1.5rem;
`;

const Content = styled.div`
  width: 300px;
  margin: 100px auto;

  h2 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 3rem;
  }
`;

const InputStyled = styled.input`
  width: 100%;
  font-size: 1.5rem;
  padding: 0.5rem;
  border: 0;
  border: 1px solid #656e78;
  outline: 0;
  box-sizing: border-box;
  border-radius: 5px;
  transition: 0.2s;

  &.is-invalid {
    border-color: #dc3545;
  }

  &:focus {
    border: 1px solid #01deff;
  }
`;

const ButtonStyled = styled.button`
  color: #fff;
  background: #002a32;
  font-size: 1.2em;
  border: 0;
  border-radius: 5px;
  border: 1px solid #002a32;
  height: 40px;
  width: 100%;
  cursor: pointer;
  transition: 0.2s;
  text-shadow: 1px 6px 33px #000000;
  outline: 0;

  &:hover {
    background: #00d6d6;
    color: #002a32;
  }
`;

const InputContainer = styled.div`
  margin-bottom: 1rem;
`;

const ErrorStyle = styled.small`
  color: #dc3545;
  font-size: 1.5rem;
`;

export default UserForm;
