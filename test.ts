input.onButtonPressed(Button.A, function () {
    neopixel.showColor(neopixel.NeoPixelColors.Red)
})
input.onButtonPressed(Button.AB, function () {
    neopixel.showColor(neopixel.NeoPixelColors.Black)
})
input.onButtonPressed(Button.B, function () {
    neopixel.showColor(neopixel.NeoPixelColors.Blue)
})
neopixel.initNeopixel(DigitalPin.P1, 4)
neopixel.showColor(neopixel.NeoPixelColors.Green)
basic.forever(function () {
	
})
