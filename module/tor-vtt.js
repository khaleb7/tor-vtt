// Import Modules
import { oneRingActor } from "./actor/actor.js";
import { oneRingActorSheet } from "./actor/actor-sheet.js";
import { oneRingItem } from "./item/item.js";
import { oneRingItemSheet } from "./item/item-sheet.js";

Hooks.once('init', async function() {

  game.tor-vtt = {
    oneRingActor,
    oneRingItem
  };

  /**
   * Set an initiative formula for the system
   * @type {String}
   */
  CONFIG.Combat.initiative = {
    formula: "1d20",
    decimals: 2
  };

  // Define custom Entity classes
  CONFIG.Actor.entityClass = oneRingActor;
  CONFIG.Item.entityClass = oneRingItem;

  // Register sheet application classes
  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("tor-vtt", oneRingActorSheet, { makeDefault: true });
  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet("tor-vtt", oneRingItemSheet, { makeDefault: true });

  // If you need to add Handlebars helpers, here are a few useful examples:
  Handlebars.registerHelper('concat', function() {
    var outStr = '';
    for (var arg in arguments) {
      if (typeof arguments[arg] != 'object') {
        outStr += arguments[arg];
      }
    }
    return outStr;
  });

  Handlebars.registerHelper('toLowerCase', function(str) {
    return str.toLowerCase();
  });
});