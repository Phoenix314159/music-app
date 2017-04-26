angular.module('music-app').component('synth', {
    templateUrl: './views/synth.html',
    controller: function(mainService) {
        let vm = this;
        mainService.getSynth().then(response => {
            vm.synth = response.data;
        })

    }
})
