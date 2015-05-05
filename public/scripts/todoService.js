angular
  .module('MyTodoApp')
  .service('TodoService', function() {

    this.todoList = ['Demo Task'];

    this.addTask = function(newTask) {
      this.todoList.push(newTask);
    };

  });