angular.module('music-app').component('daw', {
    templateUrl: './views/daw.html',
    controller: function () {
        let that = this;
         that.boxShow = true;
         that.show = function () {
             console.log('yo');
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
        }

        that.stop = function () {
            that.tripleOscillator.stop();
        }


        //  // play(), stop(), and various setter methods can be called on a PolyWad just as they would be called on a regular Wad.

        // that.tripleOscillator.remove(triangle) // It's really j
    }
})
