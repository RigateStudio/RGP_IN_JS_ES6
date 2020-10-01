class Berzerker extends Character {
    status = "playing"
    healthpoints = 8
    damage = 4
    mana = 0

    Rage = (victim) => {
        this.isRage = false
        if (this.healthpoints > 1) {
            this.damage += 1
            this.healthPoints -= 1
            this.dealDamage(victim)
            this.Heal = true
        } else {
            console.log(`Your mana score is ${this.mana}, it is not enough to attempt a Rage attack`)
        }
    }
}