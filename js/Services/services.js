(function() {
    'use strict';

    angular
        .module('todo')
        .factory('API', function($http) {

            let data = [];

            return {
                getData: () => {
                    if(localStorage.getItem('item')) {
                        // Parse takes the string (stringify) and converts it back into an object
                        data = JSON.parse(localStorage.getItem('item'));
                        // This returns the object 
                        return JSON.parse(localStorage.getItem('item'));
                    }
                    return data;
                },

                saveData: (item) => {
                    data.push(item);
                    // This pushes the data that you entered into local storage and makes it a string
                    localStorage.setItem('item', JSON.stringify(data));
                    console.log(data);
                    return data;
                },
            }
        })
})();
