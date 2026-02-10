// Iron Shovel recipe moved to logic.js

ItemEvents.modification(event => {
    const leatherParts = [
        'minecraft:leather_helmet',
        'minecraft:leather_chestplate',
        'minecraft:leather_leggings',
        'minecraft:leather_boots'
    ]

    leatherParts.forEach(part => {
        event.modify(part, item => {
            // Add +0.02 Speed per piece (~8% total for full set)
            // Using a consistent UUID derivative to prevent stacking issues on reload (though KubeJS handles unique modifiers usually)
            item.addAttribute('minecraft:generic.movement_speed', '12345678-0000-0000-0000-000000000000', 'Leather Speed', 0.02, 'addition')
        })
    })

    // Note on Fortune: KubeJS cannot easily remove valid enchantments from specific items without a complex datapack override 
    // or the 'MoreJS' addon. For now, this script addresses the Shovel and Armor requests.
})
