angular
  .module('MyTodoApp')
  .controller('TodoListController', function() {

    this.todoList = [];

    this.addTask = function(neTask) {
      this.todoList.push(neTask);
    };
  });