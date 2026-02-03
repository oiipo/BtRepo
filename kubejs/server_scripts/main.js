// pig_speed.js (Corrected for Minecraft 1.21)

ServerEvents.tick(event => {
  // Define the attribute modifier we want to apply
  const RIDING_SPEED_BOOST = {
    // A unique ID for this modifier.
    uuid: '4a2f8a4d-a58f-4f6c-9411-9a72b83c5885', 
    name: 'kubejs_pig_riding_boost',
    value: 0.9, // The amount of speed to add
    operation: 'addition' 
  };

  // Iterate over every loaded dimension on the server using the updated function name
  for (const level of event.server.getAllLevels()) {
    
    // Get ALL entities, then filter them to find only the pigs
    level.getEntities().filter(e => e.type === 'minecraft:pig').forEach(pig => {
      const speedAttribute = pig.getAttribute('minecraft:generic.movement_speed');

      // Check if the pig has any passengers
      if (pig.isVehicle() && pig.getPassengers().length > 0) {
        // If the pig is being ridden and doesn't have our modifier yet, add it.
        if (!speedAttribute.hasModifier(RIDING_SPEED_BOOST.uuid)) {
          speedAttribute.addTransientModifier(RIDING_SPEED_BOOST.uuid, RIDING_SPEED_BOOST.name, RIDING_SPEED_BOOST.value, RIDING_SPEED_BOOST.operation);
        }
      } else {
        // If the pig is NOT being ridden and still has our modifier, remove it.
        if (speedAttribute.hasModifier(RIDING_SPEED_BOOST.uuid)) {
          speedAttribute.removeModifier(RIDING_SPEED_BOOST.uuid);
        }
      }
    });
  }
});