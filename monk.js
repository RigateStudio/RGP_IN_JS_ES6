class Monk extends Character {
    status = "playing"
    healthpoints = 8
    damage = 2
    mana = 200

    Heal = (victim) => {
        this.isHeal = false
        if (this.mana >= 25) {
            this.mana -= 25
            this.healthpoints += 8
            this.dealDamage(victim)
            this.Heal = true
        } else {
            console.log(`Your mana score is ${this.mana}, it is not enough to attempt a Heal attack`)
        }
    }
}