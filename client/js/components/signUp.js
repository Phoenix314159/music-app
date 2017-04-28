angular.module('music-app').component('signUp', {
    templateUrl: './views/sign-up.html',
    controller: function (mainService) {
        let vm = this;
        vm.addNewUser = () => {
            mainService.addUser(vm.firstname, vm.lastname, vm.avatar, vm.username, vm.password).then(response => {
                console.log(response.data);
            })
            vm.congrats = () => {
                alert(`Thank You for signing up ${vm.firstname}!`)
            }
        }
    }
})
