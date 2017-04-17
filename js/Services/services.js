(function() {
    'use strict';

    angular
        .module('todo')
        .factory('api', function($http) {

            var list = [];


            return {
                
                getData: function() {
                    if (localStorage.getItem('todos')) {
                        list = JSON.parse(localStorage.getItem('todos'));
                        return JSON.parse(localStorage.getItem('todos'));
                    }
                    return list;
                },
                pushTodo: function(items) {
                    list.push(items);
                    localStorage.setItem('todos', JSON.stringify(list)); 
                    return list;
                },
                
                deleteItem: function(item) {
                    list.forEach(function(i, idx) {
                        if (i.id === item.id) {
                            list.splice(idx, 1);
                        }
                    })
                    localStorage.setItem('todos', JSON.stringify(list));
                    return list
                },
                completedItem: function(item) {
                    list.forEach(function(i) {
                        if (i.id === item.id) {
                            if (i.status === false) {
                                i.status = true;
                            } else {
                                i.status = false;
                            }
                        }
                    })
                    localStorage.setItem('todos', JSON.stringify(list));
                    return list;
                },
                displayActive: function(item) {
                    var activeList = list.filter(function(i) {
                        if (i.status === false) {
                            return i;
                        }
                    })
                    return activeList;
                },
                displayComplete: function(item) {
                    var completeList = list.filter(function(i) {
                        if (i.status === true) {
                            return i;
                        }
                    })
                    return completeList
                },
                displayAll: function(item) {
                    return list;
                },

            };
        });

})();