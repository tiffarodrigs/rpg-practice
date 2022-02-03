import Battle from './../src/js/battle.js'
import Character from './../src/js/character.js'

describe('Battle', () =>{

  let battle
  beforeEach(() => {
    battle = new Battle("wizard", 0, 1, 10, "orc", 10);
  });

  test('Should create a battle object',() => {
    expect(battle.ch1health).toEqual(10);
    expect(battle.ch2health).toEqual(10);
  });

  test('Should create thunderbolt attack',() => {
    expect(battle.thunderbolt()).toEqual(9);
    expect(battle.ch2health).toEqual(9);
  });

  test('Should create sword attack',() => {
    expect(battle.sword()).toEqual(8);
    expect(battle.ch2health).toEqual(8);
  });
  
  test('Should create mace attack', () => {
    expect(battle.mace()).toEqual(9);
    expect(battle.ch1health).toEqual(9);
  });

  test('Should create shoot attack', () => {
    expect(battle.shoot()).toEqual(8);
    expect(battle.ch1health).toEqual(8);
  });

  test('Should return player2 as winner', () => {
    let winnerBattle = new Battle("wizard", 0, 1, 0, "orc", 10);
    expect(winnerBattle.winner()).toEqual("character 2 wins!")
  });

  test('Should add 3 xp to character1', () => {
    expect(battle.addXP()).toEqual(3);
    expect(battle.ch1xp).toEqual(3);
  });

  test('Should return the level of the player', () => {
    expect(battle.levelUp()).toEqual(1);
  });

  test('Should return level-2 when player 1 xp is 6 or more', () => {
    let playerLevel = new Battle("wizard", 6, 1, 0, "orc", 10);
    //constructor(character1, ch1xp, ch1level, ch1health, character2, ch2health) {
    expect(playerLevel.levelUp()).toEqual(2);
  });
  

});