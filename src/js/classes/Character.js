export default class Character {
  constructor(distance) {
    this.distance = distance;
    this.charStoned = false;
  }

  get attack() {
    this.charAttack -= this.charAttack * ((this.distance - 1) / 10);

    if (this.stoned) {
      this.charAttack -= Math.log2(this.distance) * 5;
    }

    if (this.charAttack < 0) {
      this.charAttack = 0;
    }

    return this.charAttack;
  }

  set attack(value) {
    this.charAttack = value;
  }

  get stoned() {
    return this.charStoned;
  }

  set stoned(value) {
    this.charStoned = value;
  }
}
