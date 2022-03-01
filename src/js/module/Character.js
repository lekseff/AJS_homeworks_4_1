export default class Character {
  // static types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Неверное имя героя');
    } else {
      this.name = name;
    }

    if (!(['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].includes(type))) {
      throw new Error('Неверный тип героя');
    } else {
      this.type = type;
    }

    this.health = 100;
    this.level = 1;

    this.attack = undefined;
    this.defence = undefined;
  }
}
