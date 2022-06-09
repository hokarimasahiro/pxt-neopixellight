/**
 * Well known colors for a NeoPixel strip
 */

/**
 * Functions to operate NeoPixel strips.
 */
//% color=#2699BF icon="\uf110" block="neopixel"
namespace neopixelLight {
export enum Colors {
    //% block=red
    Red = 0xFF0000,
    //% block=orange
    Orange = 0xFFA500,
    //% block=yellow
    Yellow = 0xFFFF00,
    //% block=green
    Green = 0x00FF00,
    //% block=blue
    Blue = 0x0000FF,
    //% block=indigo
    Indigo = 0x4b0082,
    //% block=violet
    Violet = 0x8a2be2,
    //% block=purple
    Purple = 0xFF00FF,
    //% block=white
    White = 0xFFFFFF,
    //% block=black
    Black = 0x000000
}
    /**
     * A NeoPixel strip
     */
    //% shim=sendBufferAsm
    function sendBuffer(buf: Buffer, pin: DigitalPin) {
    }

    let _buf: Buffer;
    let _pin: DigitalPin;
    let _brightness: number = 0xff;;
    let _length: number = 4; // number of LEDs

    /**
     * initiarize the neopixel strips
     * @param pin digital pin of neopixel, eg:DigitalPin.P1
     * @param length number of neopixel, eg:4
     */
    //% block="init neopixel pin %pin length %length"
    export function initNeopixel(pin: DigitalPin,length: number): void {
        _pin = pin;
        _length = length >> 0;
        _buf = pins.createBuffer(_length * 3);
        pins.digitalWritePin(_pin, 0);
    }

    /**
     * Shows all LEDs to a given color (range 0-255 for r, g, b).
     * @param rgb RGB color of the LED, eg:Colors.Red
     */
    //% block="show color %rgb=neopixel_colors"
    export function showColor(rgb: number) {
		for (let i=0;i < _length;i++){
	        setPixelColor(i,rgb);
	    }
        show();
    }

    /**
     * Set LED to a given color (range 0-255 for r, g, b).
     * @param pixeloffset position of the NeoPixel in the strip, eg:0
     * @param rgb RGB color of the LED, eg:Colors.Red
     */
    //% block="set pixel color at %pixeloffset|to %rgb=neopixel_colors"
    export function setPixelColor(pixeloffset: number, rgb: number): void {
        _buf[pixeloffset * 3 + 0] = unpackG(rgb) * (_brightness / 255);
        _buf[pixeloffset * 3 + 1] = unpackR(rgb) * (_brightness / 255);
        _buf[pixeloffset * 3 + 2] = unpackB(rgb) * (_brightness / 255);
        show();
    }

    /**
     * Set the brightness of the strip. This flag only applies to future operation.
     * @param brightness a measure of LED brightness in 0-255. eg: 255
     */
    //% block="set brightness %brightness"
    export function setBrightness(brightness:number): void {
        _brightness = brightness & 0xff;
    }

    /**
     * Converts red, green, blue channels into a RGB color
     * @param red value of the red channel between 0 and 255. eg: 255
     * @param green value of the green channel between 0 and 255. eg: 255
     * @param blue value of the blue channel between 0 and 255. eg: 255
     */
    //% block="red %red|green %green|blue %blue"
    export function rgb(red: number, green: number, blue: number): number {
        return packRGB(red, green, blue);
    }

    /**
     * Gets the RGB value of a known color
     * @param rgb RGB color of the LED, eg:Colors.Red
    */
    //% block="%color"
    export function colors(color: Colors): number {
        return color;
    }

    function show() {
        sendBuffer(_buf, _pin);
    }

    function packRGB(a: number, b: number, c: number): number {
        return ((a & 0xFF) << 16) | ((b & 0xFF) << 8) | (c & 0xFF);
    }
    function unpackR(rgb: number): number {
        let r = (rgb >> 16) & 0xFF;
        return r;
    }
    function unpackG(rgb: number): number {
        let g = (rgb >> 8) & 0xFF;
        return g;
    }
    function unpackB(rgb: number): number {
        let b = (rgb) & 0xFF;
        return b;
    }

}
