(function() {
    'use strict';

    angular
        .module('todo')
        .controller('tableController', function(api) {
            const vm = this;
            
            vm.list = api.getData();
            vm.pushTodo = function() {
                    var todoList = new todo(vm.item);
                    console.log(todoList);
                    vm.list = api.pushTodo(todoList)
                }
                
            function todo(i) {
                this.name = i;
                this.status = false;
                this.id = Date.now();
            }

            
            vm.delete = function(item) {
                    vm.list = api.deleteItem(item);
                }
                
            vm.check = function(item) {
                vm.list = api.completedItem(item);
            }

            vm.active = function() {
                vm.list = api.displayActive();
            }
            vm.complete = function() {
                vm.list = api.displayComplete();
            }
            vm.all = function() {
                vm.list = api.displayAll();
            }

        });
})();