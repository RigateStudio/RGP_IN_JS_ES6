class Character {
    constructor(name, healthpoints, damage, mana, status = "playing") {
        this.name = name;
        this.healthpoints = healthpoints;
        this.damage = damage;
        this.mana = mana;
        this.status = status;
    }

    showstate = () => {
        console.log(`status of: ${this.name} have ${this.healthPoints} life points, ${this.damage} damage power left and ${this.mana} mana left`)
    }

    takedamage = (damage) => {
        let temp = this.healthpoints
        if ((this.healthpoints -= damagetaken) > 0) {
            console.log(`${this.name} took ${damage_taken} damage points`)
            this.show_state()
        } else {
            console.log(`${this.name} just took ${temp} damage points BOOOM`)
            this.healthpoints = 0
            this.state = "loser"
            console.log(`${this.name} got Killed`)
        }
    }

    dealdamage = (victim) => {
        console.log(`${this.name} attacks you`)
        victim.takeDamage(this.damage)
        if (victim.healthpoints < 1) {
            this.mana += 20
        }
    }
}