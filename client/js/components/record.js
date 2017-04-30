angular.module('music-app').component('record', {
    templateUrl: './views/record.html',
    controller: function () {
        let wavesurfer = WaveSurfer.create({
            container: '#waveform',
            waveColor: 'red',
            progressColor: 'purple'
        });
        this.time = wavesurfer.getCurrentTime();
        wavesurfer.load('./audio/01-01- Chasing Heaven.mp3');
        this.playPause = function () {
            wavesurfer.playPause();
        }
        this.rewind = function () {
            wavesurfer.stop();
        }
    }



})
