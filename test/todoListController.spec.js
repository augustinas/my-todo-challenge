describe('TodoListController', function() {

  beforeEach(module('MyTodoApp'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('TodoListController');
  }));

  it('initialises with an empty list', function() {
    expect(ctrl.list).toBeUndefined();
  });

});
