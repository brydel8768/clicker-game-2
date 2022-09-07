controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(1)
    info.startCountdown(10)
})
scene.setBackgroundImage(assets.image`TheStage`)
game.splash("Press A Too Start!")
