export default class Battle{
  constructor(character1, ch1health, character2, ch2health) {
    this.character1 = character1;
    this.ch1health = ch1health;
    this.character2 = character2;
    this.ch2health = ch2health;
  }
  thunderbolt(){
    this.ch2health -= 1;
    return this.ch2health;
  } // sword, mace, shoot

  
  sword(){
    this.ch2health -= 2;
    return this.ch2health;

  }

}