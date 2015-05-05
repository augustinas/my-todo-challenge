angular
  .module('MyTodoApp')
  .service('TodoService', function() {

    this.todoList = ['Demo Task'];

    this.completedList = [];

    this.addTask = function(newTask) {
      this.todoList.push(newTask);
    };

    this.completeTask = function(item, index) {
      var task = this.todoList.splice(index, 1);
      this.completedList.push(task[0]);
    };

  });