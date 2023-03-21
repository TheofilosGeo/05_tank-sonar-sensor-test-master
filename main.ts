input.onButtonPressed(Button.A, function () {
    TankDistance = sonar.ping(
    DigitalPin.P15,
    DigitalPin.P14,
    PingUnit.Centimeters
    )
    while (TankDistance == 0) {
        TankDistance = sonar.ping(
        DigitalPin.P15,
        DigitalPin.P14,
        PingUnit.Centimeters
        )
    }
    basic.showNumber(TankDistance)
    basic.pause(2000)
    if (TankDistance <= 5) {
        value = 1
        basic.showNumber(value)
    } else if (TankDistance <= 7) {
        value = 2
        basic.showNumber(value)
    } else {
        value = 3
        basic.showNumber(value)
    }
})
let value = 0
let TankDistance = 0
basic.showIcon(IconNames.Yes)
