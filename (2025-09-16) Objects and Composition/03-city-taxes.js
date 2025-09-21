function cityTaxes (name, population, treasury) {
    const city = createCity(name, population, treasury);
    addTaxation(city);

    return city;

    function createCity (name, population, treasury) {
        return {name, population, treasury};
    }

    function addTaxation (city) {
        city.taxRate = 10;

        city.collectTaxes = function () {
            this.treasury += this.population * this.taxRate;
            this.treasury = Math.floor(this.treasury);
        }

        city.applyGrowth = function (percentage) {
            this.population += this.population * percentage / 100;
            this.population = Math.floor(this.population);
        }

        city.applyRecession = function (percentage) {
            this.treasury -= this.treasury * percentage / 100;
            this.treasury = Math.floor(this.treasury);
        }
    }
}

{
    const city = cityTaxes('Tortuga', 7000, 15000);
    console.log(city);
}

{
    const city = cityTaxes('Tortuga', 7000, 15000);
    
    city.collectTaxes();
    console.log(city.treasury);
    
    city.applyGrowth(5);
    console.log(city.population);
}