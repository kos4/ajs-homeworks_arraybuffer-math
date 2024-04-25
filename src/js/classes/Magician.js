import Character from './Character';

export default class Magician extends Character {
  constructor(distance) {
    super(distance);
    this.charType = 'magician';
  }
}
