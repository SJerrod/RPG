import { CharacterCreator, EnemyNpc } from './../src/RPG.js';

describe('CharacterCreator', () => {
  const character = new CharacterCreator("Jason", "Gun Slinger", {weapon: "Power Fist", armor: "Old Tire Armor"});
  let enemy = new EnemyNpc(100, 100, 80, 80);


  test('should create a character with user selected input', () => {
    expect(character.name).toEqual("Jason");
    expect(character.profile).toEqual("Gun Slinger");
    expect(character.inventory).toEqual({weapon: "Power Fist", armor: "Old Tire Armor"});
    expect(character.stats).toEqual(undefined);
    expect(character.experience).toEqual(0);
  });

  test('should assign an object to character stats', () => {
    character.addStatList();
    expect(character.stats.health).toEqual(100);
    expect(character.stats.defense).toEqual(50);
    expect(character.stats.strength).toEqual(100);
  });

  test('should push items to inventory array and update stats', () => {
    character.addWeapon();
    character.addArmor();
    expect(character.inventory.weapon).toEqual("Power Fist");
    expect(character.stats.strength).toEqual(150);
    expect(character.stats.defense).toEqual(-50);
    expect(character.stats.health).toEqual(100);
    expect(character.stats.speed).toEqual(200);
  });

  test('should attack enemy and adjust stats accordingly', () => {
    let enemy = new EnemyNpc(100, 100, 80, 80);
    let playerAttack = Math.floor(Math.random() * 100);
    enemy.health -= playerAttack;
    expect(enemy.health).toBeLessThanOrEqual(100);
  });
});
