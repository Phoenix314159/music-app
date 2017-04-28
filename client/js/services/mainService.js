angular.module('music-app').service('mainService', function ($http) {
    let serverUrl = 'http://localhost:3045';
    this.login = () => {
        return $http({
            method: 'POST',
            url: serverUrl + '/api/login'
        })
    };
    this.addUser = (firstname,lastname,avatar,username,password) => {
        return $http({
            method: 'POST',
            data: {firstname:firstname,lastname:lastname,avatar:avatar,username:username,password:password},
            url: serverUrl + '/api/addnewuser'
        })
    }
    this.getSynth = () => {
        return $http({
            method: 'GET',
            url: serverUrl + 'api/viktor'
        })
    }

})
