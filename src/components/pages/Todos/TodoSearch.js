import React from "react";
import Input from "./Input";

const TodoSearch = props => {
  const { value, inputChange } = props;
  return (
    <div>
      <Input
        type="text"
        name="search"
        placeholder="Enter search keyword"
        value={value}
        inputChange={inputChange}
      />
    </div>
  );
};

export default TodoSearch;
