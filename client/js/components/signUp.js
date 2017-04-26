angular.module('music-app').component('signUp', {
    templateUrl: './views/sign-up.html',
    controller: function (mainService) {
        let vm = this;
        mainService.addUser(vm.firstname, vm.lastname, vm.avatar, vm.username, vm.password).then(response => {
             console.log(response.data);
        })
    }
})
