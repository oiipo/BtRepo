ServerEvents.recipes(event => {
    // 1. We use the 'item_id[component=value]' syntax as shown in the Wiki
    // This defines the Silk Touch component directly in the ID string.
    let silkGoldPick = 'minecraft:golden_pickaxe[minecraft:enchantments={levels:{"minecraft:silk_touch":1}}]'

    // 2. Fix for Error #2: Mapping the empty space
    // Shaped recipes in 1.21.1 cannot have unmapped spaces in the pattern.
    event.shaped(
        silkGoldPick,
        [
            'GGG',
            ' S ',
            ' S '
        ],
        {
            G: 'minecraft:gold_ingot',
            S: 'minecraft:stick'
        }
    ).id('kubejs:silk_gold_pickaxe')

    event.remove({ output: 'minecraft:golden_pickaxe' })

    // --- Other Gold Tools: Silk Touch 1 ---
    const silkTouchStr = '[minecraft:enchantments={levels:{"minecraft:silk_touch":1}}]'

    // Axe
    event.shaped(`minecraft:golden_axe${silkTouchStr}`, ['GG ', 'GS ', ' S '], { G: 'minecraft:gold_ingot', S: 'minecraft:stick' }).id('kubejs:silk_gold_axe')
    event.remove({ output: 'minecraft:golden_axe' })

    // Shovel
    event.shaped(`minecraft:golden_shovel${silkTouchStr}`, ['G', 'S', 'S'], { G: 'minecraft:gold_ingot', S: 'minecraft:stick' }).id('kubejs:silk_gold_shovel')
    event.remove({ output: 'minecraft:golden_shovel' })

    // Hoe
    event.shaped(`minecraft:golden_hoe${silkTouchStr}`, ['GG', ' S', ' S'], { G: 'minecraft:gold_ingot', S: 'minecraft:stick' }).id('kubejs:silk_gold_hoe')
    event.remove({ output: 'minecraft:golden_hoe' })

    // --- Diamond Tools: Efficiency 3, Unbreaking 1 ---
    const diamondEnchants = '[minecraft:enchantments={levels:{"minecraft:efficiency":3,"minecraft:unbreaking":1}}]'

    // Pickaxe
    event.shaped(`minecraft:diamond_pickaxe${diamondEnchants}`, ['DDD', ' S ', ' S '], { D: 'minecraft:diamond', S: 'minecraft:stick' }).id('kubejs:diamond_pickaxe_eff3_unb1')
    event.remove({ output: 'minecraft:diamond_pickaxe' })

    // Axe
    event.shaped(`minecraft:diamond_axe${diamondEnchants}`, ['DD ', 'DS ', ' S '], { D: 'minecraft:diamond', S: 'minecraft:stick' }).id('kubejs:diamond_axe_eff3_unb1')
    event.remove({ output: 'minecraft:diamond_axe' })


    // Hoe
    event.shaped(`minecraft:diamond_hoe${diamondEnchants}`, ['DD', ' S', ' S'], { D: 'minecraft:diamond', S: 'minecraft:stick' }).id('kubejs:diamond_hoe_eff3_unb1')
    event.remove({ output: 'minecraft:diamond_hoe' })

    // --- Diamond Shovel Special: Efficiency 2 only ---
    const diamondShovelEnchants = '[minecraft:enchantments={levels:{"minecraft:efficiency":2}}]'
    event.shaped(`minecraft:diamond_shovel${diamondShovelEnchants}`, ['D', 'S', 'S'], { D: 'minecraft:diamond', S: 'minecraft:stick' }).id('kubejs:diamond_shovel_eff2')
    // Note: The previous loop handled all diamond tools, but we need to override the shovel specifically? 
    // Wait, the previous lines 49-51 defined the shovel with 'diamondEnchants'. I must REMOVE or REPLACE that block.
    // I will replace the original Shovel block.


    // --- Iron Tools: Fortune Removed (Vanilla default) ---
    // Previous KubeJS recipes for Iron Fortune removed to restore vanilla behavior.
})

// The simulation logic to handle the "Stone to Cobblestone" fix
BlockEvents.drops(event => {
    const tool = event.player?.mainHandItem
    if (!tool || tool.empty) return

    // We check for the tool ID directly
    const silkTools = ['minecraft:golden_pickaxe']

    if (silkTools.includes(tool.id)) {
        event.drops.clear()
        event.addDrop(event.block.id)
    }
})