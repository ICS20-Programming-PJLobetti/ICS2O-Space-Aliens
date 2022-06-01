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
  }

  create(data) {
  }

  update(time, delta) {
  }
}

  export default SplashScene
