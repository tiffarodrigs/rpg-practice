import Battle from './../src/js/battle.js'

describe('Battle', () =>{

  test('Should create a battle object',() => {
    const battle = new Battle("wizard",10,"orc",10);
    expect(battle.character1).toEqual("wizard");
    expect(battle.ch1health).toEqual(10);
    expect(battle.character2).toEqual("orc");
    expect(battle.ch2health).toEqual(10);
  });

  test('Should create thunderbolt attack',() => {
    const battle = new Battle("wizard",10,"orc",10);
    expect(battle.thunderbolt()).toEqual(8);
    expect(battle.ch2health).toEqual(8);
  });


});