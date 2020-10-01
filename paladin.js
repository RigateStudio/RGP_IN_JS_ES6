class Paladin extends Character {
    status = "playing"
    healthpoints = 16
    damage = 3
    mana = 160

    HealingLighting = (victim) => {
        this.isHealingLighting = false
        if (this.mana >= 40) {
            this.mana -= 40
            this.damage = 4
            this.healthpoints += 5
            this.dealDamage(victim)
            this.HealingLighting = true
        } else {
            console.log(`Your mana score is ${this.mana}, it is not enough to attempt a HealingLighting attack`)
        }
        //  this.damage = 3
    }
}