/* global Phaser */

// Copyright (c) 2022 PJ Lobetti All rights reserved
//
// Created by: PJ Lobetti
// Created on: Jun 2022
// This is the Menu Scene

class MenuScene extends Phaser.Scene {
  constructor() {
    super({ key: 'menuScene' })
  }

  init(data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  preload() {
    console.log('Menu Scene')
  }

  create(data) {
  }

  update(time, delta) {
  }
}

  export default MenuScene
