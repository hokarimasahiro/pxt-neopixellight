input.onButtonPressed(Button.A, function () {
    neopixelLight.showColor(neopixelLight.Colors.Red)
})
input.onButtonPressed(Button.AB, function () {
    neopixelLight.showColor(neopixelLight.Colors.Black)
})
input.onButtonPressed(Button.B, function () {
    neopixelLight.showColor(neopixelLight.Colors.Blue)
})
neopixelLight.initNeopixel(DigitalPin.P1, 4)
neopixelLight.showColor(neopixelLight.Colors.Green)
basic.forever(function () {
	
})
