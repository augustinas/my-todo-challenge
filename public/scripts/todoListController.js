angular
  .module('MyTodoApp')
  .controller('TodoListController', ['TodoService', function(TodoService) {

    this.todoList = TodoService.todoList;

    this.completedList = TodoService.completedList;

    this.addTask = function(newTask) {
      TodoService.addTask(newTask);
      this.newTask = '';
    };

    this.completeTask = function(item, index) {
      TodoService.completeTask(item, index);
    };

  }]);