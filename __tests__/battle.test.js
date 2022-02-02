import Battle from './../src/js/battle.js'

describe('Battle', () =>{

  test('Should create a battle object',() =>{
    const battle = new Battle("wizard","10","orc","10");
    expect(battle.character1).toEqual("wizard");
    expect(battle.ch1health).toEqual("10");
    expect(battle.character2).toEqual("orc");
    expect(battle.ch2health).toEqual("10");


    // each character will hve different attacks
    // wizard attacks:                 orc attacks:
    // - thunderbolt (-2 health)       - mace (-2 health)
    // - sword (-3 health)             - shoot arrow (-3 health)
    //player
    //playerHealth
    //monster
    //monsterHealth
    //battle type
  });



});