input.onButtonPressed(Button.A, function () {
    neopixel.showColor(neopixel.Colors.Red)
})
input.onButtonPressed(Button.AB, function () {
    neopixel.showColor(neopixel.Colors.Black)
})
input.onButtonPressed(Button.B, function () {
    neopixel.showColor(neopixel.Colors.Blue)
})
neopixel.initNeopixel(DigitalPin.P1, 4)
neopixel.showColor(neopixel.Colors.Green)
basic.forever(function () {
	
})
