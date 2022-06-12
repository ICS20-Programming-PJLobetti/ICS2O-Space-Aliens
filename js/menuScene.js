/* global Phaser */

// Copyright (c) 2022 PJ Lobetti All rights reserved
//
// Created by: PJ Lobetti
// Created on: Jun 2022
// This is the Menu Scene

class MenuScene extends Phaser.Scene {
  constructor() {
    super({ key: 'menuScene' })

    this.menuSceneBackgroundImage = null
    this.startButton = null
    this.menuSceneTextStyle = { font: '20px Times', fill: '#bf5606', align: 'center'}
  }

  init(data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  preload() {
    console.log('Menu Scene')
    this.load.image('menuSceneBackground', './assets/jetski.png')
    this.load.image('startButton', "./assets/start.png")
  }

  create(data) {
    this.menuSceneBackground = this.add.sprite(0, 0, 'menuSceneBackground').setScale(2.75)
    this.menuSceneBackground.x = 1920 / 2
    this.menuSceneBackground.y = 1080 / 2

    this.startButton = this.add.sprite(1920 / 2, (1080 / 2) + 100, 'startButton')
    this.startButton.setInteractive({ useHandCurser: true })
    this.startButton.on('pointerdown', () => this.clickedButton())

    this.menuSceneText = this.add.text(1920 / 2, (1080 / 2), 'To move around you will need to use the left and right arrow keys. To shoot press the spacebar. After death, click the screen to start over', this.menuSceneTextStyle).setOrigin(0.5)
  }

  update(time, delta) {
  }

    clickedButton () {
    this.scene.start('gameScene')
  }
}

  export default MenuScene
