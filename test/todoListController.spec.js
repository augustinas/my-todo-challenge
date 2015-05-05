describe('TodoListController', function() {

  beforeEach(module('MyTodoApp'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('TodoListController');
  }));

  it('initialises with an empty list', function() {
    expect(ctrl.todoList).toEqual(['Demo Task']);
  });

  it('adds a new todo item to the list', function() {
    ctrl.addTask('Clean out my drawers');
    expect(ctrl.todoList).toEqual(['Demo Task', 'Clean out my drawers']);
  });

});
