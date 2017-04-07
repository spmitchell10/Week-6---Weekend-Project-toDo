(function() {
    'use strict';

    angular
        .module('todo')
        .controller('HeaderController', function(API) {

            const vm = this;
            vm.items = API.getData();
            // vm.save = API.setItem(item)
            

            // vm.increaseItemCount = function(data) {
            //     console.log(data);
            //     data.quantity++;
            // }
            // vm.decreaseItemCount = function(data) {
            //     console.log(data);
            //     data.quantity--;
            // }
            vm.submitForm = function() {
                    let todo = {name:vm.item,id:Date.now(),isChecked:false};
                    vm.items = API.saveData(todo);
                    vm.item = "";
            }

        });
})();