let _4digit = grove.createDisplay(DigitalPin.C16, DigitalPin.C17)
_4digit.set(4)
basic.forever(function () {
    for (let Index = 0; Index <= 20; Index++) {
        _4digit.show(20 - Index)
        basic.pause(500)
        _4digit.clear()
    }
})
