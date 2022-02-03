import Battle from "./battle";

export default class Character{
  constructor(name, xp, level, strength, health, inventory){
    this.name = name;
    this.xp = xp;
    this.level = level;
    this.strength = strength;
    this.health = health;
    this.inventory = inventory
    //mana;
  }

  //add inventory method
  addItemToInventory(item){
    //let inventory=[];
    this.inventory.push(item);
    return this.inventory
  }

  healthPotion() {
    this.health += 3;
    return this.health;
  }

  turnCalculator() {
    let currentTurn = 0;
    if (currentTurn <= 2) {
    currentTurn = 0;
    } else {
      if (currentTurn === 0) {
        character1.turn();
        currentTurn++;
      } else if (currentTurn === 1) {
        character2.turn
        currentTurn--;
      }
    }
  }

  // character1.turnCalculator()
  // character2.turnCalculator 
  
}