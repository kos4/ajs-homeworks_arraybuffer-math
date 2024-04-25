import Character from './Character';

export default class Daemon extends Character {
  constructor(distance) {
    super(distance);
    this.charType = 'daemon';
  }
}
