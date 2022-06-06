/* global Phaser */

// Copyright (c) 2022 PJ Lobetti All rights reserved
//
// Created by: PJ Lobetti
// Created on: Jun 2022
// This is the Splash Scene

class SplashScene extends Phaser.Scene {
  constructor() {
    super({ key: 'splashScene' })
  }

  init(data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  preload() {
    console.log('Splash Scene')
    this.load.image('splashSceneBackground', './assets/splashSceneImage.png')
  }

  create(data) {
    this.splashSceneBackground = this.add.sprite(0, 0, 'splashSceneBackground')
    this.splashSceneBackground.x = 1920 / 2
    this.splashSceneBackground.y = 1080 / 2
  }

  update(time, delta) {
    if (time > 3000) {
      this.scene.switch('titleScene')
    }
  }
}

  export default SplashScene
