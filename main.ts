input.onButtonPressed(Button.A, function () {
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 30)
})
input.onButtonPressed(Button.B, function () {
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 20)
})
basic.showIcon(IconNames.Yes)
wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 180)
