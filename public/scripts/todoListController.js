angular
  .module('MyTodoApp')
  .controller('TodoListController', ['TodoService', function(TodoService) {

    this.todoList = TodoService.todoList;

    this.addTask = function(newTask) {
      TodoService.addTask(newTask);
      this.newTask = '';
    };

  }]);