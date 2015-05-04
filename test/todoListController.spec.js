describe('TodoListController', function() {

  beforeEach(module('MyTodoApp'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('TodoListController');
  }));

  it('initialises with an empty list', function() {
    expect(ctrl.todoList).toEqual([]);
  });

  it('adds a new todo item to the list', function() {
    ctrl.newTask = 'Clean out my drawers';
    ctrl.addTask();
    expect(ctrl.todoList).toEqual(['Clean out my drawers']);
  });

});
