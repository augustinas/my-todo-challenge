describe('TodoService', function() {

  var service;

  beforeEach(module('MyTodoApp'));

  beforeEach(inject(function(TodoService) {
    service = TodoService;
  }));

  it('initialises with a demo task', function() {
    expect(service.todoList).toEqual(['Demo Task']);
  });

  it('adds a new todo item to the list', function() {
    service.addTask('Clean out my drawers');
    expect(service.todoList).toEqual(['Demo Task', 'Clean out my drawers']);
  });

});