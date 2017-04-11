(function() {
    'use strict';

    angular
        .module('todo')
        .controller('HeaderController', function(API) {

            const vm = this;
            vm.items = API.getData();
            

            vm.checkItem = function(data) {
                console.log(data);
                vm.items = API.checkData(data);
            }
            vm.deleteItem = function(data) {
                console.log(data);
                vm.items = API.deleteData(data);
            }
            vm.submitForm = function() {
                    let todo = {name:vm.item,id:Date.now(),isChecked:false};
                    vm.items = API.saveData(todo);
                    vm.item = "";
            }

        });
})();