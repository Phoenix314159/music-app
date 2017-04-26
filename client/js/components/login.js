angular.module('music-app').component('login', {
    templateUrl: './views/login.html',
    controller: mainService => {
        let vm = this;
        mainService.login(vm.username, vm.password).then(response => {

        })
    }
})
