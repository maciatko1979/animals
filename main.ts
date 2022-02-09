input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        # # . . #
        # # # # .
        . # . # .
        `)
    basic.showIcon(IconNames.Asleep)
    music.playMelody("C D E F G A B C5 ", 120)
    basic.showString("miaw")
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Angry)
    music.playMelody("E G C5 F A E G C ", 120)
    basic.showIcon(IconNames.Happy)
    music.playMelody("C5 A F E G A F C ", 120)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("haw")
    music.playMelody("C D E F E G A B ", 120)
    basic.showIcon(IconNames.Heart)
    basic.showLeds(`
        . # # . .
        . # # . .
        . # # # #
        . # # # .
        . # . # .
        `)
})
