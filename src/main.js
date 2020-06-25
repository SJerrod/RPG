import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { CharacterCreator, InventoryEquip, EnemyNpc } from './RPG';

$(document).ready(function() {
  $('form#character-creation').submit(function(event) {
    event.preventDefault();
    let inputtedName = $("#name").val();
    let inputtedProfile = $("#profile").val();
    let inputtedWeapon = $("#weapon").val();
    let inputtedArmor = $("#armor").val();
    let experience = 0;
    let characterInventory = new InventoryEquip(inputtedWeapon, inputtedArmor);
    let character = new CharacterCreator(inputtedName, inputtedProfile, characterInventory, experience);
    let enemy = new EnemyNpc(100, 100, 100, 100);
    character.addStatList();
    character.addWeapon();
    character.addArmor();
    console.log(character);
    $("#character-creation").hide();
    $("#enemyInfo").show();
    $("#characterDisplay").show();
    $("#actions").show();
    $("#currentName").text(character.name);
    $("#currentProfile").text(character.profile);
    $("#currentInventory").html("<button id='showInventory' class='btn-success'>Inventory</button>");
    $("#currentStats").html("<button id='showStats' class='btn-primary'>Stats</button>");
    $("#currentExperience").text(character.experience);
    $("#showInventory").click(function() {
      $("#characterDisplay").toggle();
      $("#inventoryDisplay").toggle();
      $("#actions").hide();
      $(".returnFromScreen").html("<button class='btn-danger'>Go Back</button>");
      $("#currentWeapon").text(character.inventory.weapon);
      $("#currentArmor").text(character.inventory.armor);
      $("#currentTrinket").text(character.inventory.trinket);
      $("#currentConsumable").text(character.inventory.consumable);
    });
    $("#showStats").click(function() {
      $("#characterDisplay").toggle();
      $("#statDisplay").toggle();
      $("#actions").hide();
      $(".returnFromScreen").html("<button class='btn-danger'>Go Back</button>");
      $("#currentHealth").text(character.stats.health);
      $("#currentDefense").text(character.stats.defense);
      $("#currentStrength").text(character.stats.strength);
      $("#currentSpeed").text(character.stats.speed);
    });
    $(".returnFromScreen").click(function() {
      $("#characterDisplay").show();
      $("#actions").show();
      $("#inventoryDisplay").hide();
      $("#statDisplay").hide();
    });
    $("#attack-button").click(function() {
      $("#enemyHealth").text(enemy.health);
      $("#enemyStrength").text(enemy.strength);
    });
  });
});