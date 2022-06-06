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
    this.titleSceneTextStyle = { font: '100px Times', fill: '#8F282B', align: 'center'}
  }

  init(data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  preload() {
    console.log('Title Scene')
    this.load.image('titleSceneBackground', './assets/spacejetski.jpg')
  }

  create(data) {
    this.splashSceneBackground = this.add.sprite(0, 0, 'titleSceneBackground').setScale(2.50)
    this.splashSceneBackground.x = 1920 / 2
    this.splashSceneBackground.y = 1080 / 2

    this.titleSceneText = this.add.text(1920 / 2, (1080 / 2) + 350, 'The Supreme Jetski Of The Universe', this.titleSceneTextStyle).setOrigin(0.5)
  }

  update(time, delta) {
  }
}

  export default TitleScene
