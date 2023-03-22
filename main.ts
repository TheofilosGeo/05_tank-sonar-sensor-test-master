/**
 * 1 high
 * 
 * 2 medium
 * 
 * 3 low
 */
/**
 * Κάθε δεξαμενή έχει ύψος 8εκ και η στάθμη της
 * 
 * μπορεί να είναι υψηλή, μέση ή χαμηλή. Ως μέτρηση θα σταλεί ένα από τα λεκτικά (high, med,low) ανάλογα με την περίπτωση, όπου, high για στάθμη >= 5.0εκ, med για στάθμη μεταξύ 2.0 και 4.9εκ, low για στάθμη < 1.9εκ.
 */
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
