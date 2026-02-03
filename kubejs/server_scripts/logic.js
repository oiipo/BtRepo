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

    // Shovel
    event.shaped(`minecraft:diamond_shovel${diamondEnchants}`, ['D', 'S', 'S'], { D: 'minecraft:diamond', S: 'minecraft:stick' }).id('kubejs:diamond_shovel_eff3_unb1')
    event.remove({ output: 'minecraft:diamond_shovel' })

    // Hoe
    event.shaped(`minecraft:diamond_hoe${diamondEnchants}`, ['DD', ' S', ' S'], { D: 'minecraft:diamond', S: 'minecraft:stick' }).id('kubejs:diamond_hoe_eff3_unb1')
    event.remove({ output: 'minecraft:diamond_hoe' })

    // --- Iron Tools: Fortune 1 ---
    const ironEnchants = '[minecraft:enchantments={levels:{"minecraft:fortune":1}}]'

    // Pickaxe
    event.shaped(`minecraft:iron_pickaxe${ironEnchants}`, ['III', ' S ', ' S '], { I: 'minecraft:iron_ingot', S: 'minecraft:stick' }).id('kubejs:iron_pickaxe_fort1')
    event.remove({ output: 'minecraft:iron_pickaxe' })

    // Axe
    event.shaped(`minecraft:iron_axe${ironEnchants}`, ['II ', 'IS ', ' S '], { I: 'minecraft:iron_ingot', S: 'minecraft:stick' }).id('kubejs:iron_axe_fort1')
    event.remove({ output: 'minecraft:iron_axe' })

    // Shovel
    event.shaped(`minecraft:iron_shovel${ironEnchants}`, ['I', 'S', 'S'], { I: 'minecraft:iron_ingot', S: 'minecraft:stick' }).id('kubejs:iron_shovel_fort1')
    event.remove({ output: 'minecraft:iron_shovel' })

    // Hoe
    event.shaped(`minecraft:iron_hoe${ironEnchants}`, ['II', ' S', ' S'], { I: 'minecraft:iron_ingot', S: 'minecraft:stick' }).id('kubejs:iron_hoe_fort1')
    event.remove({ output: 'minecraft:iron_hoe' })
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