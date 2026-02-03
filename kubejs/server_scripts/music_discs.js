ServerEvents.registry('jukebox_song', event => {
    // Disc 1: It's Raining Somewhere Else (174s)
    event.create('kubejs:music.disc_1')
        .song('kubejs:music.disc_1', 174)
        .description(Text.of("It's Raining Somewhere Else"))

    // Disc 2: Undertale (386s)
    event.create('kubejs:music.disc_2')
        .song('kubejs:music.disc_2', 386)
        .description(Text.of("Undertale"))

    // Disc 3: Ballads (1056s)
    event.create('kubejs:music.disc_3')
        .song('kubejs:music.disc_3', 1056)
        .description(Text.of("Ballads"))

    // Disc 4: Peace Piece (405s)
    event.create('kubejs:music.disc_4')
        .song('kubejs:music.disc_4', 405)
        .description(Text.of("Peace Piece"))

    // Disc 5: Dog (146s)
    event.create('kubejs:music.disc_5')
        .song('kubejs:music.disc_5', 146)
        .description(Text.of("Dog"))

    // Disc 6: Erik Satie - Gymnopédie No.1 (217s)
    event.create('kubejs:music.disc_6')
        .song('kubejs:music.disc_6', 217)
        .description(Text.of("Erik Satie - Gymnopédie No.1"))

    // Disc 7: L Boulanger - d'un jardin clair (121s)
    event.create('kubejs:music.disc_7')
        .song('kubejs:music.disc_7', 121)
        .description(Text.of("L Boulanger - d'un jardin clair"))

    // Disc 8: Night Lights A (979s)
    event.create('kubejs:music.disc_8')
        .song('kubejs:music.disc_8', 979)
        .description(Text.of("Night Lights A"))

    // Disc 9: Night Lights B (928s)
    event.create('kubejs:music.disc_9')
        .song('kubejs:music.disc_9', 928)
        .description(Text.of("Night Lights B"))

    // Disc 10: Summerland (256s)
    event.create('kubejs:music.disc_10')
        .song('kubejs:music.disc_10', 256)
        .description(Text.of("Summerland"))

    // Disc 11: In the Hall of the Mountain King (153s)
    event.create('kubejs:music.disc_11')
        .song('kubejs:music.disc_11', 153)
        .description(Text.of("In the Hall of the Mountain King"))

    // Disc 12: Vince Guaraldi Trio (363s)
    event.create('kubejs:music.disc_12')
        .song('kubejs:music.disc_12', 363)
        .description(Text.of("Vince Guaraldi Trio"))
})
