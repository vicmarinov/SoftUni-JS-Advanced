function createAssemblyLine () {
    const methodsLibrary = {hasClima, hasAudio, hasParktronic};
    return methodsLibrary;

    function hasClima (carObj) {
        carObj.temp = 21;
        carObj.tempSettings = 21;
        carObj.adjustTemp = function () {
            if (this.temp < this.tempSettings) this.temp++;
            if (this.temp > this.tempSettings) this.temp--;
        }
    }

    function hasAudio (carObj) {
        carObj.currentTrack = {
            name: null,
            artist: null
        };

        carObj.nowPlaying = function () {
            if (this.currentTrack.name === null) return;
            console.log(`Now playing '${this.currentTrack.name}' by ${this.currentTrack.artist}`);
        }
    }

    function hasParktronic (carObj) {
        carObj.checkDistance = function (distance) {
            let message = '';

            if (distance < 0.1) message = 'Beep! Beep! Beep!';
            else if (distance < 0.25) message = 'Beep! Beep!';
            else if (distance < 0.5) message = 'Beep!';

            console.log(message);
        }
    }
}

{
    const assemblyLine = createAssemblyLine();
    const myCar = {make: 'Toyota', model: 'Avensis'};
    
    assemblyLine.hasClima(myCar);
    console.log(myCar.temp);
    
    myCar.tempSettings = 18;
    myCar.adjustTemp();
    console.log(myCar.temp);
    
    assemblyLine.hasAudio(myCar);
    myCar.currentTrack = {
        name: 'Never Gonna Give You Up',
        artist: 'Rick Astley'
    };
    myCar.nowPlaying();
    
    assemblyLine.hasParktronic(myCar);
    myCar.checkDistance(0.4);
    myCar.checkDistance(0.2);
    
    console.log(myCar);
}