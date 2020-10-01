class Assassin extends Character {
    state = "playing"
    mana = 20
    healthpoints = 6
    damage = 7
    isShadowhit = false

    Shadowhit = (victim) => {
        this.isShadowhit = false
        if (this.mana >= 20) {
            this.mana -= 20
            this.damage = 7
            this.dealDamage(victim)
            this.Heal = true
        } else {
            console.log(`Your mana score is ${this.mana}, it is not enough to attempt a Shadowhit attack`)
        }
    }
}