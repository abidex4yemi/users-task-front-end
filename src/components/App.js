import React, { Component } from "react";
import axios from "axios";
import { Route, Switch } from "react-router-dom";
import uuid from "uuid";
import Users from "./pages/User/Users";
import UserForm from "./pages/User/UserForm";
import SingleUser from "./pages/User/SingleUser";
import Todos from "./pages/Todos/Todos";

const routeDetails = [
  {
    id: uuid(),
    path: "/",
    ComponentToRender: Users
  },
  {
    id: uuid(),
    path: "/user/add",
    ComponentToRender: UserForm
  },
  {
    id: uuid(),
    path: "/user/:id",
    ComponentToRender: SingleUser
  },
  {
    id: uuid(),
    path: "/user/:id/edit",
    ComponentToRender: UserForm
  },
  {
    id: uuid(),
    path: "/tasks",
    ComponentToRender: Todos
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          name: "John",
          id: "1"
        },
        {
          name: "Doe",
          id: 2
        }
      ]
    };
    this.baseURL = "http://localhost:3001/api/v1/";
  }

  componentDidMount() {
    const url = `${this.baseURL}/users`;
    this.getUsers(url);
  }

  getUsers = url => {
    axios
      .get(url)
      .then(res => {
        this.setState(() => ({ users: res.data }));
      })
      .catch(err => err)
      .finally(err => err);
  };

  updateUsersList = data => {
    this.setState(() => ({
      users: data
    }));
  };

  deleteUser = id => {
    this.setState(prevState => {
      const user = prevState.users.find(user => user.id === id);

      if (user) {
        const url = `${this.baseURL}/users/${user.id}`;
        axios
          .delete(url)
          .then(res => {
            this.setState(() => ({ users: res.data }));
          })
          .catch(err => err)
          .finally(err => err);
      }
    });
  };

  render() {
    const { users } = this.state;

    return (
      <Switch>
        {routeDetails.map(({ path, id, ComponentToRender }) => {
          return (
            <Route
              key={id}
              exact
              path={path}
              render={props => (
                <ComponentToRender
                  {...props}
                  users={users}
                  updateUsersList={this.updateUsersList}
                  deleteUser={this.deleteUser}
                />
              )}
            />
          );
        })}
      </Switch>
    );
  }
}

export default App;
