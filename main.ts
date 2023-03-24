basic.showString("Connecting...")
serial.redirectToUSB()
serial.setBaudRate(BaudRate.BaudRate115200)
serial.writeLine("Connected!")
basic.forever(function () {
    serial.writeLine("" + (input.temperature()))
    serial.writeLine("" + (input.lightLevel()))
})
