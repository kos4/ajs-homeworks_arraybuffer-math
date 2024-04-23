export default class Character {
  constructor(attack) {
    this.charAttack = attack;
  }

  get attack() {
    return this.charAttack;
  }

  set attack(distance) {
    this.charAttack -= this.charAttack * ((distance - 1) / 10);

    if (this.charAttack < 0) {
      this.charAttack = 0;
    }
  }

  get stoned() {
    return this.charAttack;
  }

  set stoned(distance) {
    this.attack = distance;
    this.charAttack -= Math.log2(distance) * 5;

    if (this.charAttack < 0) {
      this.charAttack = 0;
    }
  }
}
