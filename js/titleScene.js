/* global Phaser */

// Copyright (c) 2022 PJ Lobetti All rights reserved
//
// Created by: PJ Lobetti
// Created on: Jun 2022
// This is the Title Scene

class TitleScene extends Phaser.Scene {
  constructor() {
    super({ key: 'titleScene' })

    this.titleSceneBackgroundImage = null
    this.titleScenText = null
    this.titleSceneTextStyle = { font: '100px Times', fill: '#bf5606', align: 'center'}
  }

  init(data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  preload() {
    console.log('Title Scene')
    this.load.image('titleSceneBackground', './assets/jetski.png')
  }

  create(data) {
    this.splashSceneBackground = this.add.sprite(0, 0, 'titleSceneBackground').setScale(2.75)
    this.splashSceneBackground.x = 1920 / 2
    this.splashSceneBackground.y = 1080 / 2

    this.titleSceneText = this.add.text(1920 / 2, (1080 / 2) + 350, 'The Supreme Jetski Of The Universe', this.titleSceneTextStyle).setOrigin(0.5)
  }

  update(time, delta) {
    if (time > 6000) {
      this.scene.switch('menuScene')
    }
  }
}

  export default TitleScene
