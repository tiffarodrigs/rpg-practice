import Battle from './../src/js/battle.js'

describe('Battle', () =>{

  let battle
  beforeEach(() => {
    battle = new Battle("wizard",10,"orc",10);
  });

  test('Should create a battle object',() => {
    expect(battle.character1).toEqual("wizard");
    expect(battle.ch1health).toEqual(10);
    expect(battle.character2).toEqual("orc");
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

});