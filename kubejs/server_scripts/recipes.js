ServerEvents.recipes(event => {
    // --- 1. LOGS TO OAK PLANKS (Shapeless) ---
    // Remove all vanilla log-to-plank recipes and force them to output 4x Oak Planks
    const logs = ['minecraft:oak_log', 'minecraft:spruce_log', 'minecraft:birch_log', 'minecraft:stripped_oak_log', 'minecraft:stripped_spruce_log', 'minecraft:stripped_birch_log']
    event.remove({ output: '#minecraft:planks' })
    logs.forEach(log => {
        event.shapeless('4x minecraft:oak_planks', log).id(`kubejs:${log.replace(':', '_')}_to_oak_planks`)
    })

    // --- 2. ANDESITE ALLOY ---
    // S=Stone, I=Iron Nugget. Pattern: SI / IS
    event.remove({ output: 'create:andesite_alloy' })
    event.shaped('create:andesite_alloy', [
        'SI',
        'IS'
    ], {
        S: 'minecraft:stone',
        I: 'minecraft:iron_nugget'
    }).id('kubejs:andesite_alloy_beta')

    // --- 3. RAIL RECIPE (Cheaper + More) ---
    event.remove({ output: 'minecraft:rail' })
    event.shaped('32x minecraft:rail', [
        'I I',
        'ISI',
        'I I'
    ], {
        I: 'minecraft:iron_ingot',
        S: 'minecraft:stick'
    }).id('kubejs:rail_beta')

    // --- 4. SCAFFOLDING (Sticks + Planks) ---
    event.remove({ output: 'minecraft:scaffolding' })
    event.shaped('6x minecraft:scaffolding', [
        'SXS',
        'X X',
        'X X'
    ], {
        S: 'minecraft:string',
        X: 'minecraft:stick'
    }).id('kubejs:scaffolding_beta')

    // --- 11. CREATE MOD & SPYGLASS CHANGES ---
    // Steam Whistle: Copper -> Gold
    event.remove({ output: 'create:steam_whistle' })
    event.shaped('create:steam_whistle', ['G', 'I'], { G: 'create:golden_sheet', I: 'create:iron_sheet' })

    // Belt Connector: Kelp -> Sugarcane
    // ServerEvents.recipes(event => {
    // Remove the old recipe first
    event.remove({ output: 'create:belt_connector' })

    // New Shaped Recipe: 3 Sugar Cane Middle, 3 Sugar Cane Bottom
    event.shaped('create:belt_connector', [
        'SSS',
        'SSS'
    ], {
        S: 'minecraft:sugar_cane'
    }).id('kubejs:belt_connector_beta')
    // })    // Spyglass: No Amethyst (Using Copper and Glass)
    event.remove({ output: 'minecraft:spyglass' })
    event.shaped('minecraft:spyglass', [
        ' C ',
        ' C ',
        ' G '
    ], {
        C: 'minecraft:iron_ingot',
        G: 'minecraft:glass'
    })



    // 13.2 Polished Rose Quartz: Rose Quartz + Sand Paper
    event.shapeless('create:polished_rose_quartz', ['create:rose_quartz', 'create:sand_paper'])

    // 13.3 Andesite Funnel: Andesite Alloy (Top) + Sugarcane (Bottom)
    event.remove({ output: 'create:andesite_funnel' })
    event.shaped('2x create:andesite_funnel', [
        'A',
        'S'
    ], {
        A: 'create:andesite_alloy',
        S: 'minecraft:sugar_cane'
    }).id('kubejs:andesite_funnel_custom')

    // 13.4 Brass Funnel: Electron Tube, Gold, Sugarcane
    event.remove({ output: 'create:brass_funnel' })
    event.shaped('2x create:brass_funnel', [
        'E  ',
        'GG ',
        'SS '
    ], {
        E: 'create:electron_tube',
        G: 'minecraft:gold_ingot',
        S: 'minecraft:sugar_cane'
    }).id('kubejs:brass_funnel_custom')

    // 13.5 Crushing Wheel: Electron Tube surrounded by 8 Iron
    event.remove({ output: 'create:crushing_wheel' })
    event.shaped('create:crushing_wheel', [
        'III',
        'IEI',
        'III'
    ], {
        I: 'minecraft:iron_ingot',
        E: 'create:electron_tube'
    }).id('kubejs:crushing_wheel_custom')

    // 13.6 Cardboard: Sandpaper surrounded by Paper
    // Assumption: 'create:cardboard' exists. Using 4 paper (Plus shape)
    event.shaped('create:cardboard', [
        ' P ',
        'PSP',
        ' P '
    ], {
        P: 'minecraft:paper',
        S: 'create:sand_paper'
    }).id('kubejs:cardboard_custom')

    // 13.7 Attribute Filter: Gold Nugget - Wool - Gold Nugget
    event.remove({ output: 'create:attribute_filter' })
    event.shaped('create:attribute_filter', [
        'GWG'
    ], {
        G: 'minecraft:gold_nugget',
        W: '#minecraft:wool'
    }).id('kubejs:attribute_filter_custom')

    // 13.8 Stock Link: Redstone Top, Item Vault Bottom
    // Assumption: 'create:stock_link' exists
    event.shaped('create:stock_link', [
        'R',
        'V'
    ], {
        R: 'minecraft:redstone',
        V: 'create:item_vault'
    }).id('kubejs:stock_link_custom')

    // 13.9 Redstone Link: 2 Redstone, 1 Brass Casing
    event.remove({ output: 'create:redstone_link' })
    event.shapeless('2x create:redstone_link', ['create:brass_casing', 'minecraft:redstone', 'minecraft:redstone']).id('kubejs:redstone_link_custom')

    // 13.10 Brass Casing: Andesite Casing surrounded by Gold
    event.remove({ output: 'create:brass_casing' })
    event.shaped('create:brass_casing', [
        'GGG',
        'GCG',
        'GGG'
    ], {
        C: 'create:andesite_casing',
        G: 'minecraft:gold_ingot'
    }).id('kubejs:brass_casing_custom')

    // 13.11 Andesite Casing: Andesite Alloy surrounded by Stone
    event.remove({ output: 'create:andesite_casing' })
    event.shaped('create:andesite_casing', [
        'SSS',
        'SAS',
        'SSS'
    ], {
        A: 'create:andesite_alloy',
        S: 'minecraft:stone'
    }).id('kubejs:andesite_casing_custom')

    // 13.12 Display Link: Redstone Top, Brass Casing Bottom
    event.remove({ output: 'create:display_link' })
    event.shaped('create:display_link', [
        'R',
        'C'
    ], {
        R: 'minecraft:redstone',
        C: 'create:brass_casing'
    }).id('kubejs:display_link_custom')

    // 13.13 Copycat Steps / Panels (Stonecutting)
    event.remove({ output: 'create:copycat_step' })
    event.remove({ output: 'create:copycat_panel' })
    event.stonecutting('4x create:copycat_step', 'minecraft:iron_ingot').id('kubejs:copycat_step_stonecutting')
    event.stonecutting('4x create:copycat_panel', 'minecraft:iron_ingot').id('kubejs:copycat_panel_stonecutting')

    // --- 14. NOSTALGIA ITEMS / BETA RECIPES ---

    // 14.1 Stone Button: Made from any stone
    event.remove({ output: 'minecraft:stone_button' })
    event.shaped('minecraft:stone_button', ['S', 'S'], { S: '#minecraft:stone_tool_materials' }).id('kubejs:beta_stone_button')

    // 14.2 Red Bed is the only bed
    // (Already handled in Section 5: "BEDS (Always Red)", but confirming removal of all others)
    event.remove({ output: '#minecraft:beds', not: { output: 'minecraft:red_bed' } })

    event.remove({ output: 'minecraft:oak_door' })
    event.shaped('1x minecraft:oak_door', [
        'PP',
        'PP',
        'PP'
    ], {
        P: '#minecraft:planks'
    }).id('kubejs:beta_generic_door')

    // 14.4 "Oak Stairs" -> From any planks
    event.remove({ output: 'minecraft:oak_stairs' })
    event.shaped('4x minecraft:oak_stairs', [
        'P  ',
        'PP ',
        'PPP'
    ], {
        P: '#minecraft:planks'
    }).id('kubejs:beta_generic_stairs')

    // 14.5 "Oak Slab" -> From any planks
    event.remove({ output: 'minecraft:oak_slab' })
    event.shaped('3x minecraft:oak_slab', [
        'PPP'
    ], {
        P: '#minecraft:planks'
    }).id('kubejs:beta_generic_slab')

    // 14.6 Enchanted Golden Apple (Notch Apple) Recipe
    // Classic recipe: 8 Gold Blocks surrounding an Apple
    event.shaped('minecraft:enchanted_golden_apple', [
        'GGG',
        'GAG',
        'GGG'
    ], {
        G: 'minecraft:gold_block',
        A: 'minecraft:apple'
    }).id('kubejs:classic_notch_apple')


    // 14.7 Mushroom Blocks (Craftable)
    // 4x Red Mushroom -> Red Mushroom Block
    event.shaped('minecraft:red_mushroom_block', [
        'MM',
        'MM'
    ], {
        M: 'minecraft:red_mushroom'
    }).id('kubejs:red_mushroom_block')

    // 4x Brown Mushroom -> Brown Mushroom Block
    event.shaped('minecraft:brown_mushroom_block', [
        'MM',
        'MM'
    ], {
        M: 'minecraft:brown_mushroom'
    }).id('kubejs:brown_mushroom_block')

    // 4x Any Mushroom -> Mushroom Stem
    event.shaped('minecraft:mushroom_stem', [
        'RB',
        'BR'
    ], {
        R: 'minecraft:red_mushroom',
        B: 'minecraft:brown_mushroom'
    }).id('kubejs:mushroom_stem_mixed')



})

// --- 12. FISHING & DUNGEON LOOT ---
// Moved to kubejs/data/minecraft/loot_table for stability via Datapack method.