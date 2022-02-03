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
  
}