input.onButtonPressed(Button.A, function () {
    neopixel.showColor(NeoPixelColors.Red)
})
input.onButtonPressed(Button.AB, function () {
    neopixel.showColor(NeoPixelColors.Black)
})
input.onButtonPressed(Button.B, function () {
    neopixel.showColor(NeoPixelColors.Blue)
})
neopixel.initNeopixel(DigitalPin.P1, 4)
neopixel.showColor(NeoPixelColors.Green)
basic.forever(function () {
	
})
