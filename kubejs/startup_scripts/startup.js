ItemEvents.modification(event => {
    // 1. GOLD: Precision Tier (Durability 190)
    const goldTools = [
        'minecraft:golden_pickaxe',
        'minecraft:golden_axe',
        'minecraft:golden_shovel',
        'minecraft:golden_hoe',
        'minecraft:golden_sword'
    ]

    goldTools.forEach(id => {
        event.modify(id, item => {
            item.maxDamage = 190
        })
    })
})

// --- CUSTOM MUSIC DISCS REGISTRATION ---
const musicDiscs = [
    'disc_1', 'disc_2', 'disc_3', 'disc_4', 'disc_5',
    'disc_6', 'disc_7', 'disc_8', 'disc_9', 'disc_10',
    'disc_11', 'disc_12'
]

StartupEvents.registry('item', event => {
    // List of 12 vanilla disc textures to cycle through
    const vanillaTextures = [
        'minecraft:item/music_disc_13',
        'minecraft:item/music_disc_cat',
        'minecraft:item/music_disc_blocks',
        'minecraft:item/music_disc_chir',
        'minecraft:item/music_disc_far',
        'minecraft:item/music_disc_mall',
        'minecraft:item/music_disc_mellohi',
        'minecraft:item/music_disc_stal',
        'minecraft:item/music_disc_strad',
        'minecraft:item/music_disc_ward',
        'minecraft:item/music_disc_11',
        'minecraft:item/music_disc_wait'
    ]

    musicDiscs.forEach((name, index) => {
        // e.g. kubejs:music_disc_1
        event.create(`music_${name}`) // Removed 'music_disc' type arg
            .displayName(`Music Disc ${name.replace('disc_', '')}`)
            .jukeboxPlayable(`kubejs:music.${name}`, true) // Link to sound event, show in tooltip
            .texture(vanillaTextures[index % vanillaTextures.length]) // Cycle through vanilla textures
            .tag('music_discs')
            .tag('minecraft:creeper_drop_music_discs') // Droppable by creeper kill
            .tag('minecraft:music_discs')
            .unstackable()
    })
})

StartupEvents.registry('sound_event', event => {
    musicDiscs.forEach(name => {
        event.create(`music.${name}`) // e.g. kubejs:music.disc_1
    })
})