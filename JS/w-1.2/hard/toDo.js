/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todo = [];
  }

  add(task) {
    this.todo.push(String(task));
  }

  remove(indexOfTodo) {
    this.todo.splice(indexOfTodo, 1);
  }

  update(index, updatedTodo) {
    this.todo.splice(index, 1, String(updatedTodo));
  }

  getAll() {
    return this.todo;
  }

  get(indexOfTodo) {
    return this.todo[indexOfTodo];
  }

  clear() {
    this.todo = [];
    return null;
  }
}

const ayush = new Todo();
module.exports = Todo;
