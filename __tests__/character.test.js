import Character from './../src/js/character.js'

describe('Character', () => {

  test('Should create a character object',() =>{
    const character = new Character("wizard",0 ,2 ,"magic", 10, []);
    expect(character.name).toEqual("wizard");
    expect(character.xp).toEqual(0);
    expect(character.level).toEqual(2);
    expect(character.strength).toEqual("magic");
    expect(character.health).toEqual(10);
  });

  test('Should add items to inventory array',() =>{
    const character = new Character("wizard",0 ,2 ,"magic", 10, []);
    character.addItemToInventory(["health potion", 3])
    expect(character.inventory).toEqual([["health potion", 3]]);
  });

  test('Should call Health Potion and up character health by 3', () => {
    const character = new Character("wizard",0 ,2 ,"magic", 10, []);
    //character.healthPotion();
    expect(character.healthPotion()).toEqual(13);
    expect(character.health).toEqual(13);
  });

});