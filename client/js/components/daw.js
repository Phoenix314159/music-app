angular.module('music-app').component('daw', {
    templateUrl: './views/daw.html',
    controller: function () {
        let that = this;
         that.boxShow = true;
         that.show = function () {
             that.boxShow = !that.boxShow;
         }
        that.sine = new Wad({source: 'sine'})
        that.square = new Wad({source: 'square'})
        that.triangle = new Wad({source: 'triangle'})
        that.tripleOscillator = new Wad.Poly()
        that.tripleOscillator.add(that.sine).add(that.square).add(that.triangle) // Many methods are chainable for convenience.

        that.play = function () {
            that.tripleOscillator.play({pitch: 'G2'});
            that.tripleOscillator.setVolume(.3);
        };
        that.play1 = function () {
            that.tripleOscillator.play({pitch: 'A2'});
            that.tripleOscillator.setVolume(.3);
        }
        that.play2 = function () {
            that.tripleOscillator.play({pitch: 'B2'});
            that.tripleOscillator.stop({pitch: 'A2'});
            that.tripleOscillator.setVolume(.3);

        }
        that.play3 = function () {
            that.tripleOscillator.play({pitch: 'C3'});
            that.tripleOscillator.setVolume(.3);
        }
        that.play4 = function () {
            that.tripleOscillator.play({pitch: 'D3'});
            that.tripleOscillator.setVolume(.3);
        }
        that.play5 = function () {
            that.tripleOscillator.play({pitch: 'E3'});
            that.tripleOscillator.setVolume(.3);
        }
        that.play6 = function () {
            that.tripleOscillator.play({pitch: 'F3'});
            that.tripleOscillator.setVolume(.3);
        }

        that.stop = function () {
            that.tripleOscillator.stop();
        }
        // that.mixerTrack = new Wad.Poly({
        //     recConfig : { // The Recorder configuration object. The only required property is 'workerPath'.
        //         workerPath : '../bower_components/Wad/src/Recorderjs/recorderWorker.js' // The path to the Recorder.js web worker script.
        //     }
        // })
        // that.mixerTrack.add(sine)
        //
        // that.mixerTrack.rec.record()

        //  // play(), stop(), and various setter methods can be called on a PolyWad just as they would be called on a regular Wad.

        // that.tripleOscillator.remove(triangle) // It's really j
    }
})
