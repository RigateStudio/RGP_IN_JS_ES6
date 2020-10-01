class Fighter extends Character {
    status = "playing";
    name = "Fighter"
    healthpoints = 12
    damage = 4
    mana = 40

    takeDamage = (damage_taken) => {
        const effectivDamage = this.isDarkVision ? damage_taken - 2 : damage_taken
        //        super.takeDamage(effectivDamage)
    }

    Darkvision = (victim) => {
        this.isDarkVision = false
        if (this.mana >= 20) {
            this.mana -= 20
            this.damage = 5
            this.dealDamage(victim)
            this.isDarkVision = true
        } else {
            console.log(`Your mana score is ${this.mana}, it is not enough to attempt a Darkvision attack`)
        }
        //       this.damage = 4
    }
}