function createHeroes () {
    return {fighter: createFighter, mage: createMage};

    function createFighter (name) {
        return {
            name,
            health: 100,
            stamina: 100,
            fight () {
                this.stamina--;
                console.log(`${this.name} slashes at the foe!`);
            }
        };
    }

    function createMage (name) {
        return {
            name,
            health: 100,
            mana: 100,
            cast: function castSpell (spellName) {
                this.mana--;
                console.log(`${this.name} cast ${spellName}`);
            }
        };
    }
}

let create = createHeroes();

const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);