import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { CharacterCreator, InventoryEquip } from './RPG';

$(document).ready(function () {
  $('form#character-creation').submit(function(event) {
    event.preventDefault();
    let inputtedName = $("#name").val();
    let inputtedProfile = $("#profile").val();
    let inputtedWeapon = $("#weapon").val();
    let inputtedArmor = $("#armor").val();
    let experience = 0;
    const characterInventory = new InventoryEquip(inputtedWeapon, inputtedArmor);
    const character = new CharacterCreator(inputtedName, inputtedProfile, characterInventory, experience);
    character.addStatList();
    character.addWeapon();
    character.addArmor();
    console.log(character);
    $("ul#output").append("<li>Name: " + inputtedName + "</li><li>Profile: " + inputtedProfile + "</li><li><button id='showInventory' class='btn-success'>Inventory</button></li><li><button id='showStats' class='btn-primary'>Stats</li><li>Experience: " + experience + "</li>");
    $("#showInventory").click(function() {
      $("#inventoryDisplay").toggle();
      $("#currentWeapon").text(character.inventory.weapon);
      $("#currentArmor").text(character.inventory.armor);

    });
  });
});