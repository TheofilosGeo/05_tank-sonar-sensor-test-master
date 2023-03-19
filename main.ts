input.onButtonPressed(Button.A, function () {
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 30)
})
input.onButtonPressed(Button.B, function () {
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 20)
    TankDistance = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P0,
    PingUnit.MicroSeconds
    )
})
let TankDistance = 0
basic.showIcon(IconNames.Yes)
wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 180)
