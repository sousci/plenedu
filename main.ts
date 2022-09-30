function Pattern_Low2 () {
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P16, 1)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
    control.waitMicros(10)
}
function setColor_P () {
    setColor(7, 0, 7)
}
function Pattern_Hi2 () {
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
    control.waitMicros(10)
}
input.onButtonPressed(Button.A, function () {
    setColor_R()
    basic.pause(500)
    setColor_G()
    basic.pause(500)
    setColor_B()
    basic.pause(500)
    setColor_Y()
    basic.pause(500)
    setColor_O()
    basic.pause(500)
    setColor_L()
    basic.pause(500)
    setColor_P()
    basic.pause(500)
    setColor_W()
    basic.pause(500)
    setColor(1, 5, 0)
})
function setColor_W () {
    setColor(10, 8, 10)
}
function setColor_L () {
    setColor(0, 5, 10)
}
function setColor_B () {
    setColor(0, 0, 20)
}
function Pattern_Hi () {
    pins.digitalWritePin(DigitalPin.P16, 1)
    control.waitMicros(10)
    temp = pins.digitalReadPin(DigitalPin.P16)
    control.waitMicros(10)
}
function setColor_O () {
    setColor(10, 2, 0)
}
function LatchTime () {
    control.waitMicros(10000)
}
// P13, P14, P15 | **
// 
// 0, 1, 1 | 0
// 
// 0, 0, 0 | 1
// 
// 0, 0, 1 | 2
// 
// 0, 1, 0 | 3
// 
// 1, 0, 0 | 4
// 
// 1, 1, 0 | 5
// 
// 1, 1, 1 | 6
// 
// 1, 0, 1 | 7
function InitPLEN () {
    setColor(1, 5, 0)
    配列 = [
    0,
    0,
    -45,
    0,
    -10,
    0,
    45,
    0
    ]
    for (let init_i = 0; init_i <= 7; init_i++) {
        for (let i = 0; i <= 100; i++) {
            setServoNumAngle(init_i, 配列[init_i])
            control.waitMicros(1000)
        }
        led.plotBarGraph(
        init_i,
        7
        )
    }
    basic.clearScreen()
}
function setColor_G () {
    setColor(0, 5, 0)
}
function Pattern_Low () {
    pins.digitalWritePin(DigitalPin.P16, 0)
    control.waitMicros(10)
    temp = pins.digitalReadPin(DigitalPin.P16)
    control.waitMicros(10)
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
    control.waitMicros(10)
}
input.onButtonPressed(Button.B, function () {
    for (let カウンター = 0; カウンター <= 255; カウンター++) {
        setColor(255 - カウンター, カウンター / 5, 0)
    }
    for (let カウンター2 = 0; カウンター2 <= 255; カウンター2++) {
        setColor(0, (255 - カウンター2) / 5, カウンター2 / 2.5)
    }
    for (let カウンター3 = 0; カウンター3 <= 255; カウンター3++) {
        setColor(カウンター3, 0, (255 - カウンター3) / 2.5)
    }
    setColor(1, 5, 0)
})
function setColor_R () {
    setColor(10, 0, 0)
}
function setServoNumAngle (num: number, angle: number) {
    setServo(num)
    pins.digitalWritePin(DigitalPin.P1, 1)
    control.waitMicros(1500 + Math.map(angle, -90, 90, -1000, 1000))
    pins.digitalWritePin(DigitalPin.P1, 0)
}
// RGB順
function setColor (value_r: number, value_g: number, value_b: number) {
    LatchTime()
    code_24 = Math.trunc(Math.constrain(value_b, 0, 255)) * 256 * 256 + Math.trunc(Math.constrain(value_g, 0, 255)) * 256 + Math.trunc(Math.constrain(value_r, 0, 255)) * 1
    for (let l = 0; l <= 23; l++) {
        if (code_24 % 2 == 1) {
            配列[l] = 1
            code_24 += -1
        } else {
            配列[l] = 0
        }
        code_24 = code_24 / 2
    }
    // 2個直列の場合、ラッチタイムを挟まず2回繰り返す
    for (let index = 0; index < 2; index++) {
        for (let m = 0; m <= 23; m++) {
            if (配列[23 - m] == 1) {
                if (true) {
                    Pattern_Hi2()
                } else {
                    Pattern_Hi()
                }
            } else {
                if (true) {
                    Pattern_Low2()
                } else {
                    Pattern_Low()
                }
            }
        }
    }
}
function setColor_Y () {
    setColor(10, 7, 0)
}
let code_24 = 0
let 配列: number[] = []
let temp = 0
InitPLEN()
