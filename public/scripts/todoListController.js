angular
  .module('MyTodoApp')
  .controller('TodoListController', function() {

    this.todoList = [];

    this.addTask = function() {
      this.todoList.push(this.newTask);
    };
  });