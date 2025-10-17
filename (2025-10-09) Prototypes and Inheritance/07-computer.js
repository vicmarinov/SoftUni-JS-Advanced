function createComputerHierarchy () {
    class ShopItem {
        manufacturer;

        constructor (manufacturer) {
            if (this.constructor === ShopItem) {
                throw new Error('The ShopItem class cannot be instantiated!');
            }

            this.manufacturer = manufacturer;
        }
    }

    class Keyboard extends ShopItem {
        responseTime;

        constructor (manufacturer, responseTime) {
            super(manufacturer);
            this.responseTime = responseTime;
        }
    }

    class Monitor extends ShopItem {
        width;
        height;

        constructor (manufacturer, width, height) {
            super(manufacturer);
            this.width = width;
            this.height = height;
        }
    }

    class Battery extends ShopItem {
        expectedLife;

        constructor (manufacturer, expectedLife) {
            super(manufacturer);
            this.expectedLife = expectedLife;
        }
    }

    class Computer extends ShopItem {
        processorSpeed;
        ram;
        hardDiskSpace;

        constructor (manufacturer, processorSpeed, ram, hardDiskSpace) {
            super(manufacturer);
            
            if (this.constructor === Computer) {
                throw new Error('The Computer class cannot be instantiated!');
            }

            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace;
        }
    }

    class Laptop extends Computer {
        weight;
        color;
        _battery;

        constructor (
            manufacturer, processorSpeed, ram, hardDiskSpace,
            weight, color, battery
        ) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.weight = weight;
            this.color = color;
            this.battery = battery;
        }

        get battery () {
            return this._battery;
        }

        set battery (value) {
            if (!(value instanceof Battery)) {
                throw new TypeError('The battery must be an instance of the Battery class!');
            }

            this._battery = value;
        }
    }

    class Desktop extends Computer {
        _keyboard;
        _monitor;

        constructor (
            manufacturer, processorSpeed, ram, hardDiskSpace,
            keyboard, monitor
        ) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.keyboard = keyboard;
            this.monitor = monitor;
        }

        get keyboard () {
            return this._keyboard;
        }

        set keyboard (value) {
            if (!(value instanceof Keyboard)) {
                throw new TypeError('The keyboard must be an instance of the Keyboard class!');
            }

            this._keyboard = value;
        }

        get monitor () {
            return this._monitor;
        }

        set monitor (value) {
            if (!(value instanceof Monitor)) {
                throw new TypeError('The monitor must be an instance of the Monitor class!');
            }

            this._monitor = value;
        }
    }

    return {
        ShopItem,
        Keyboard,
        Monitor,
        Battery,
        Computer,
        Laptop,
        Desktop
    };
}

const classes  = createComputerHierarchy();
const Computer = classes.Computer;
const Laptop   = classes.Laptop;
const Desktop  = classes.Desktop;
const Monitor  = classes.Monitor;
const Battery  = classes.Battery;
const Keyboard = classes.Keyboard;

const battery = new Battery('Energy', 3);
console.log(battery);

const laptop = new Laptop('Hewlett Packard', 2.4, 4, 0.5, 3.12, 'Silver', battery);
console.log(laptop);