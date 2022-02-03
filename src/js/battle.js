export default class Battle{
  constructor(character1, ch1xp, ch1level, ch1health, character2, ch2health, currentTurn) {
    this.character1 = character1;
    this.ch1xp = ch1xp;
    this.ch1level = ch1level;
    this.ch1health = ch1health;
    this.character2 = character2;
    this.ch2health = ch2health;
    this.currentTurn = currentTurn;
  }

  turnCalculator() {
    // if (this.currentTurn <= 2) {
    //   currentTurn = 0;
    // } else {
    //   if (this.currentTurn === 0) {
    //     character1.turn();
    //     this.currentTurn++;
    //   } else if (this.currentTurn === 1) {
    //     character2.turn();
    //     this.currentTurn--;
    //   }
    // }
  }

  winner() {
    if(this.ch1health === 0)
    {
     return "character 2 wins!";
    }
    else if(this.ch2health === 0){
      addXP();
      return "character 1 wins!";
    }
  }

  thunderbolt() {
    this.ch2health -= 1;
    return this.ch2health;
  } // sword, mace, shoot

  
  sword() {
    this.ch2health -= 2;
    return this.ch2health;
  }

  mace() {
    this.ch1health -= 1;
    return this.ch1health;
  }

  shoot(){
    this.ch1health -= 2;
    return this.ch1health;
    
  }

  addXP() {
    this.ch1xp += 3;
    return this.ch1xp;
  }
  
  levelUp(){
    if(this.ch1xp >= 6)
    {
      this.ch1level++;
      this.ch1xp - 6;
    }
    return this.ch1level;
  }

}