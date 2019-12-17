import React, { Component } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import TodoSearch from "./TodoSearch";

const initialTodoState = [
  {
    task: "Organize Garage",
    id: Date.now() + Math.random(),
    completed: false
  },
  {
    task: "Bake Cookies",
    id: Date.now() + Math.random(),
    completed: false
  }
];

const initialFormState = {
  descriptionValue: "",
  search: ""
};

const initialAppState = {
  todo: initialTodoState,
  form: initialFormState
};

class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = initialAppState;
  }

  componentDidMount() {
    this.setStateWithLocalStorage();

    /**
     *  Add event listener to save state to localStorage when user leaves/refreshes the page
     *
     */
    window.addEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );

    // saves if component has a chance to un mount
    this.saveStateToLocalStorage();
  }

  setStateWithLocalStorage() {
    const state = this.state;
    for (let key in state) {
      if (key !== "form") {
        if (localStorage.hasOwnProperty(key)) {
          let value = localStorage.getItem(key);

          // parse the localStorage string and setState
          try {
            value = JSON.parse(value);
            this.setState({ [key]: value });
          } catch (e) {
            this.setState({ [key]: value });
          }
        }
      }
    }
  }

  saveStateToLocalStorage() {
    const state = this.state;
    for (let key in state) {
      if (key !== "form") {
        localStorage.setItem(key, JSON.stringify(this.state[key]));
      }
    }
  }

  inputChange = (field, value) => {
    this.setState(prevState => ({
      form: {
        ...prevState.form,
        [field]: value
      }
    }));
  };

  addNewTodo = () => {
    this.setState(prevState => {
      // Get previous state
      const { todo, form } = prevState;

      const sanitizeValue = form.descriptionValue.toString().trim().length;

      // check if user input value
      if (sanitizeValue >= 3) {
        // newly created todo (object)
        const newTodo = {
          task: form.descriptionValue,
          id: Date.now() + Math.random(),
          completed: false
        };

        return {
          todo: todo.concat(newTodo),
          form: initialFormState
        };
      }
    });
  };

  toggleTodoCompleted = todoId => {
    this.setState(prevState => {
      // Convert date string to integer
      const todoID = parseFloat(todoId);

      // get all todo
      const { todo } = prevState;

      const newTodo = todo.map(todo => {
        if (todo.id === todoID) {
          todo.completed = !todo.completed;
          return todo;
        } else {
          return todo;
        }
      });

      return {
        todo: newTodo
      };
    });
  };

  removeCompletedTodo = () => {
    this.setState(prevState => {
      const { todo } = prevState;

      const newTodo = todo.filter(todo => todo.completed !== true);

      return {
        todo: newTodo
      };
    });
  };

  render() {
    const { todo, form } = this.state;

    return (
      <div className="todo">
        <h2 className="h2">Welcome to your Todo App!</h2>
        <div className="content">
          <section className="todo-list-container">
            <TodoSearch inputChange={this.inputChange} value={form.search} />

            <TodoList
              todoList={todo}
              value={form.search}
              toggleTodoCompleted={this.toggleTodoCompleted}
            />
          </section>

          <section className="form-container">
            <TodoForm
              todoList={todo}
              value={form.descriptionValue}
              handleOnchange={this.handleOnchange}
              addNewTodo={this.addNewTodo}
              removeCompletedTodo={this.removeCompletedTodo}
              inputChange={this.inputChange}
            />
          </section>
        </div>
      </div>
    );
  }
}

export default Todos;
