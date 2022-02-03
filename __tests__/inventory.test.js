import Inventory from './../src/js/inventory.js'
import Character from './../src/js/character.js'

describe('Inventory', () =>{

  // let battle
  // beforeEach(() => {
  //   battle = new Battle("wizard", 0, 1, 10, "orc", 10);
  // });

  test('Should create a inventory object',() => {  
    let inventory = new Inventory("armor1","armor2","armor3");
    expect(inventory.item1).toEqual("armor1");
    expect(inventory.item2).toEqual("armor2");
    expect(inventory.item3).toEqual("armor3");
  });
});
 
 