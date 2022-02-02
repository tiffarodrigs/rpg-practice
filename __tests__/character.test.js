import Character from './../src/js/character.js'

describe('Character', () =>{

  test('Should create a character object',() =>{
    const character = new Character("wizard",0 ,2 ,"magic", 10);
    expect(character.name).toEqual("wizard");
    expect(character.xp).toEqual(0);
    expect(character.level).toEqual(2);
    expect(character.strength).toEqual("magic");
    expect(character.health).toEqual(10);
  });



});