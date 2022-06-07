/* global Phaser */

// Copyright (c) 2022 PJ Lobetti All rights reserved
//
// Created by: PJ Lobetti
// Created on: Jun 2022
// This is the Game Scene

class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'gameScene' })
  }

  init(data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  preload() {
    console.log('Game Scene')
  }

  create(data) {
  }

  update(time, delta) {
  }
}

  export default GameScene