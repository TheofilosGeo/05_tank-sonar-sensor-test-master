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
})
let TankDistance = 0
basic.showIcon(IconNames.Yes)
