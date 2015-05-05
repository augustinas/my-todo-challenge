describe('Service: Todo', function() {

  var service;

  beforeEach(module('MyTodoApp'));

  beforeEach(inject(function(TodoService) {
    service = TodoService;
  }));

  it('initialises with a demo task', function() {
    expect(service.todoList).toEqual(['Demo Task']);
  });

  it('initialises with no completed tasks', function() {
    expect(service.completedList).toEqual([]);
  });

  it('adds a new todo item to the list', function() {
    service.addTask('Clean out my drawers');
    expect(service.todoList).toEqual(['Demo Task', 'Clean out my drawers']);
  });

  it('moves completed tasks into a separate list', function() {
    service.addTask('Clean out my drawers');
    service.completeTask('Clean out my drawers', 1);
    expect(service.todoList).toEqual(['Demo Task']);
    expect(service.completedList).toEqual(['Clean out my drawers']);
  });


});