/* global Phaser */

// Copyright (c) 2022 PJ Lobetti All rights reserved
//
// Created by: PJ Lobetti
// Created on: Jun 2022
// This is the Game Scene

class GameScene extends Phaser.Scene {
  
  // create an alien
  createAlien () {
    const alienXLocation = Math.floor(Math.random() * 1920) + 1
    let alienXVelocity = Math.floor(Math.random() * 50) + 1
    alienXVelocity *= Math.round(Math.random()) ? 1 : -1
    const anAlien = this.physics.add.sprite(alienXLocation, -100, 'alien')
    anAlien.body.velocity.y = 200
    anAlien.body.velocity.x = alienXVelocity
    this.alienGroup.add(anAlien)
  }
  // Adding in all visual aspects for the scene
  constructor() {
    super({ key: 'gameScene' })

    this.ship = null
    this.fireMissile = false
    this.score = 0
    this.scoreText = null
    this.scoreTextStyle = { font: '65px Arial', fill: '#ffffff', align: 'center' }
    this.gameOverTextStyle = { font: '65px Arial', fill: '#EEA00B', align: 'center'}
  }

  init(data) {
    this.cameras.main.setBackgroundColor('#0x5f6e7a')
  }

  preload() {
    console.log('Game Scene')

    // images
    this.load.image('starBackground', 'assets/space.png')
    this.load.image('ship', 'assets/spaceJetski.png')
    this.load.image('missile', 'assets/blast.png')
    this.load.image('alien', 'assets/alien2.png')
    // sound files
    this.load.audio('laser', 'sounds/pewww.mp3')
    this.load.audio('explosion', 'sounds/BOOM.mp3')
    this.load.audio('bomb', 'sounds/deathnoise.mp3')
  }

  create(data) {
    this.background = this.add.image(0, 0, 'starBackground').setScale(2.0)
    this.background.setOrigin(0, 0)
    // score pops up
    this.scoreText = this.add.text(10, 10, 'Score: ' + this.score.toString(), this.scoreTextStyle)
    // creating the ship  
    this.ship = this.physics.add.sprite(1920 / 2, 1080 - 100, 'ship').setScale(0.8)

    // create a group for the missiles
    this.missileGroup = this.physics.add.group()

    // create a group for the aliens
    this.alienGroup = this.add.group()
    this.createAlien()

    // Collisions between missiles and aliens
    this.physics.add.collider(this.missileGroup, this.alienGroup, function (missileCollide, alienCollide) {
      alienCollide.destroy()
      missileCollide.destroy()
      this.sound.play('explosion')
      this.score = this.score + 1
      this.scoreText.setText('Score: ' + this.score.toString())
      this.createAlien()
      this.createAlien()
    }.bind(this))

    // Collision between ship and aliens
    this.physics.add.collider(this.ship, this.alienGroup, function (shipCollide, alienCollide) {
      this.sound.play('bomb')
      this.physics.pause()
      alienCollide.destroy()
      shipCollide.destroy()
      this.gameOverText = this.add.text(1920 / 2, 1080/ 2, 'Game Over!\nClick to play again.', this.gameOverTextStyle).setOrigin(0.5)
      this.gameOverText.setInteractive({ useHandCursor: true })
      this.gameOverText.on('pointerdown', () => this.scene.start('gameScene'))
      this.score = 0
    }.bind(this))
                              
  }

  update(time, delta) {
    // called 60 times a second
    // background music for the game
    var audio = new Audio('sounds/spaceAmbience.mp3');
    audio.play();
    // the diffrent keys being used in game
    const keyLeftObj = this.input.keyboard.addKey('LEFT')
    const keyRightObj = this.input.keyboard.addKey('RIGHT')
    const keySpaceObj = this.input.keyboard.addKey('SPACE')
    // left arrow key
    if (keyLeftObj.isDown === true) {
      this.ship.x = this.ship.x - 15
      if (this.ship.x < 0) {
        this.ship.x = 0
      }
    }
    // right arrow key
    if (keyRightObj.isDown === true) {
      this.ship.x = this.ship.x + 15
      if (this.ship.x > 1920) {
        this.ship.x = 1920
      }
    }
    // spacebar to fire missiles
    if (keySpaceObj.isDown === true) {
      if (this.fireMissile === false) {
        // fire missile
        this.fireMissile = true 
        const aNewMissile = this.physics.add.sprite(this.ship.x, this.ship.y -70, 'missile')
        this.missileGroup.add(aNewMissile)
        this.sound.play('laser')
      }
    }

    if (keySpaceObj.isUp === true) {
      this.fireMissile = false
    }

    this.missileGroup.children.each(function (item) {
      item.y = item.y - 15
      if (item.y < 0) {
        item.destroy()
      }
    })
    // allows for aliens to reset there position after going off the screen.
    this.alienGroup.children.each(function (item) {
      if ((item.y > 1080) || (item.x < 0 || item.x > 1920)) {
        item.y = -20
        const alienYCoordinate = Math.floor(Math.random() * 1920) + 1
        item.x = alienYCoordinate
      }
    })
  }
}
  export default GameScene