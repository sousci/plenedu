/**
 * P13, P14, P15 | **
 * 
 * 0, 1, 1 | 0
 * 
 * 0, 0, 0 | 1
 * 
 * 0, 0, 1 | 2
 * 
 * 0, 1, 0 | 3
 * 
 * 1, 0, 0 | 4
 * 
 * 1, 1, 0 | 5
 * 
 * 1, 1, 1 | 6
 * 
 * 1, 0, 1 | 7
 */
function InitServo () {
    for (let index = 0; index < 100; index++) {
        for (let i = 0; i <= 7; i++) {
            setServo(i)
            pins.digitalWritePin(DigitalPin.P1, 1)
            control.waitMicros(1500)
            pins.digitalWritePin(DigitalPin.P1, 0)
        }
        basic.pause(1)
    }
    basic.showIcon(IconNames.Happy)
    basic.clearScreen()
}
function setServo (数値: number) {
    if (数値 == 0) {
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P14, 1)
        pins.digitalWritePin(DigitalPin.P15, 1)
    } else if (数値 == 1) {
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P15, 0)
    } else if (数値 == 2) {
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P15, 1)
    } else if (数値 == 3) {
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P14, 1)
        pins.digitalWritePin(DigitalPin.P15, 0)
    } else if (数値 == 4) {
        pins.digitalWritePin(DigitalPin.P13, 1)
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P15, 0)
    } else if (数値 == 5) {
        pins.digitalWritePin(DigitalPin.P13, 1)
        pins.digitalWritePin(DigitalPin.P14, 1)
        pins.digitalWritePin(DigitalPin.P15, 0)
    } else if (数値 == 6) {
        pins.digitalWritePin(DigitalPin.P13, 1)
        pins.digitalWritePin(DigitalPin.P14, 1)
        pins.digitalWritePin(DigitalPin.P15, 1)
    } else if (数値 == 7) {
        pins.digitalWritePin(DigitalPin.P13, 1)
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P15, 1)
    }
}
InitServo()
while (true) {
	
}
