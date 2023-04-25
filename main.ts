namespace SpriteKind {
    export const pizzer = SpriteKind.create()
    export const same = SpriteKind.create()
    export const frien = SpriteKind.create()
    export const boss = SpriteKind.create()
    export const playerbomb = SpriteKind.create()
    export const boss_gun = SpriteKind.create()
}
/**
 * i hate and love this engine at the same time
 */
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`skyblock`, function (sprite, location) {
    tiles.setWallAt(location, false)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`poison pit`, function (sprite15, location13) {
    game.over(false, effects.blizzard)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    simplified.gravity_jump(mySprite)
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    150,
    false
    )
    music.play(music.createSoundEffect(WaveShape.Noise, 2638, 3321, 203, 0, 500, SoundExpressionEffect.Vibrato, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile15`, function (sprite16, location14) {
    if (controller.up.isPressed()) {
        animation.runMovementAnimation(
        mySprite,
        animation.animationPresets(animation.flyToCenter),
        2000,
        false
        )
        mySprite.sayText("level 6:the bane", 2000, false)
        tiles.setCurrentTilemap(tilemap`level14`)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`purplebuble`, function (sprite3, location3) {
    game.splash("if you are reading this, you should know the thing that inspired this, pizza tower, also i like a show i have not watched in a while, the owl house")
    info.changeScoreBy(5)
    tiles.setTileAt(location3, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`fire3`, function (sprite16, location14) {
    info.startCountdown(40)
    tiles.setCurrentTilemap(tilemap`level5`)
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`bounce`, function (sprite6, location5) {
    tiles.setWallAt(location5, false)
    tiles.setTileAt(location5, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile12`, function (sprite16, location14) {
    if (controller.up.isPressed()) {
        mySprite.sayText("level 4: 3000 miles to human settelments", 2000, false)
        animation.runMovementAnimation(
        mySprite,
        animation.animationPresets(animation.flyToCenter),
        2000,
        false
        )
        tiles.setCurrentTilemap(tilemap`level16`)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`fire4`, function (sprite16, location14) {
    info.startCountdown(40)
    tiles.setCurrentTilemap(tilemap`level6`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`da door`, function (sprite10, location8) {
    if (controller.up.isPressed()) {
        music.play(music.stringPlayable("E B C5 A B G A F ", 120), music.PlaybackMode.LoopingInBackground)
        mySprite.say("Level 2: Fnatj", 5000)
        scene.setBackgroundImage()
        tiles.setTilemap(tilemap`level2`)
        animation.runMovementAnimation(
        mySprite,
        animation.animationPresets(animation.flyToCenter),
        2000,
        false
        )
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`na noor`, function (sprite10, location8) {
    if (controller.up.isPressed()) {
        music.play(music.stringPlayable("D A B A B A F E ", 120), music.PlaybackMode.UntilDone)
        mySprite.say("Level 1: Jungle gutter", 5000)
        scene.setBackgroundImage()
        tiles.setTilemap(tilemap`level15`)
        animation.runMovementAnimation(
        mySprite,
        animation.animationPresets(animation.flyToCenter),
        2000,
        false
        )
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`fire0`, function (sprite20, location18) {
    music.play(music.stringPlayable("E E E E C5 E D E ", 300), music.PlaybackMode.LoopingInBackground)
    scene.setBackgroundImage()
    tiles.setTilemap(tilemap`level4`)
    info.startCountdown(90)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite16, location14) {
    if (controller.up.isPressed()) {
        mySprite.sayText("World 2: The underland (underland chronicles)", 2000, false)
        animation.runMovementAnimation(
        mySprite,
        animation.animationPresets(animation.flyToCenter),
        2000,
        false
        )
        scene.setBackgroundImage()
        tiles.setCurrentTilemap(tilemap`level19`)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`orange bauble`, function (sprite11, location9) {
    info.changeScoreBy(1)
    tiles.setTileAt(location9, assets.tile`transparency16`)
})
sprites.onOverlap(SpriteKind.pizzer, SpriteKind.Player, function (sprite9, otherSprite2) {
    info.changeLifeBy(-3)
    game.setGameOverMessage(false, "TIME UP!!")
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`fire5`, function (sprite16, location14) {
    info.startCountdown(40)
    tiles.setCurrentTilemap(tilemap`level7`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite16, location14) {
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.doorOpenNorth)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite4, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`the battle pass`, function (sprite18, location16) {
    info.changeScoreBy(20)
    tiles.setTileAt(location16, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`fire6`, function (sprite16, location14) {
    info.startCountdown(40)
    tiles.setCurrentTilemap(tilemap`level8`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile16`, function (sprite16, location14) {
    if (controller.up.isPressed()) {
        mySprite.sayText("level 7:curse of the warmbloods", 2000, false)
        animation.runMovementAnimation(
        mySprite,
        animation.animationPresets(animation.flyToCenter),
        2000,
        false
        )
        tiles.setCurrentTilemap(tilemap`level18`)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    150,
    false
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile14`, function (sprite16, location14) {
    if (controller.up.isPressed()) {
        mySprite.sayText("level 5: thinking in 2 dimensions", 2000, false)
        animation.runMovementAnimation(
        mySprite,
        animation.animationPresets(animation.flyToCenter),
        2000,
        false
        )
        tiles.setCurrentTilemap(tilemap`level17`)
    }
})
// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite10, location8) {
    music.play(music.stringPlayable("F B F E G B A G ", 120), music.PlaybackMode.LoopingInBackground)
    info.stopCountdown()
    tiles.setCurrentTilemap(tilemap`level10`)
    scene.setBackgroundImage()
    animation.runMovementAnimation(
    mySprite,
    animation.animationPresets(animation.flyToCenter),
    2000,
    false
    )
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`poison pit`, function (sprite5, location4) {
    tiles.setWallAt(location4, false)
    tiles.setTileAt(location4, assets.tile`transparency16`)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    150,
    false
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile17`, function (sprite16, location14) {
    if (controller.up.isPressed()) {
        mySprite.sayText("level 8:promise", 2000, false)
        tiles.setCurrentTilemap(tilemap`level12`)
        animation.runMovementAnimation(
        mySprite,
        animation.animationPresets(animation.flyToCenter),
        2000,
        false
        )
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 0, 0)
    projectile.setFlag(SpriteFlag.GhostThroughWalls, true)
    animation.runImageAnimation(
    projectile,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    false
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`fire1`, function (sprite20, location18) {
    music.play(music.stringPlayable("E E E E C5 E D E ", 300), music.PlaybackMode.LoopingInBackground)
    tiles.setCurrentTilemap(tilemap`level3`)
    scene.setBackgroundImage()
    info.startCountdown(90)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tutor raildoor`, function (sprite10, location8) {
    if (controller.up.isPressed()) {
        game.splash("controls: up/w-spawn crate, down/s- taunt, a/d/left/right- walk")
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`fa foor`, function (sprite10, location8) {
    if (controller.up.isPressed()) {
        music.play(music.stringPlayable("B E G A G A F C5 ", 120), music.PlaybackMode.LoopingInBackground)
        mySprite.say("Level 3: Unexpectancy", 5000)
        scene.setBackgroundImage()
        tiles.setTilemap(tilemap`level15`)
        animation.runMovementAnimation(
        mySprite,
        animation.animationPresets(animation.flyToCenter),
        2000,
        false
        )
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorClosedNorth, function (sprite16, location14) {
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.doorLockedNorth)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile18`, function (sprite16, location14) {
    animation.runMovementAnimation(
    mySprite,
    animation.animationPresets(animation.flyToCenter),
    2000,
    false
    )
    info.stopCountdown()
    tiles.setCurrentTilemap(tilemap`level13`)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (randint(1, 3) == 1) {
        music.play(music.stringPlayable("B - - - - - - - ", 120), music.PlaybackMode.UntilDone)
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        500,
        false
        )
        info.changeScoreBy(1)
    } else if (randint(1, 3) == 2) {
        music.play(music.stringPlayable("B - - - - - - - ", 120), music.PlaybackMode.UntilDone)
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        500,
        false
        )
        info.changeScoreBy(1)
    } else {
        music.play(music.stringPlayable("B - - - - - - - ", 120), music.PlaybackMode.UntilDone)
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        200,
        false
        )
        info.changeScoreBy(1)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`fire`, function (sprite20, location18) {
    music.play(music.stringPlayable("E E E E C5 E D E ", 300), music.PlaybackMode.LoopingInBackground)
    tiles.setTilemap(tilemap`level2`)
    scene.setBackgroundImage()
    info.startCountdown(90)
})
info.onCountdownEnd(function () {
    mySprite2 = sprites.create(, SpriteKind.pizzer)
    mySprite2.setFlag(SpriteFlag.GhostThroughWalls, true)
    mySprite2.follow(mySprite, 60)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile13`, function (sprite16, location14) {
    if (controller.up.isPressed()) {
        mySprite.sayText("World 1: The arena (The hunger game trilogy)")
        animation.runMovementAnimation(
        mySprite,
        animation.animationPresets(animation.flyToCenter),
        2000,
        false
        )
        scene.setBackgroundImage()
        tiles.setCurrentTilemap(tilemap`level20`)
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    tiles.setWallAt(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Bottom), true)
    tiles.setTileAt(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Bottom), assets.tile`bounce`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`notpit`, function (sprite12, location10) {
    animation.runMovementAnimation(
    mySprite,
    animation.animationPresets(animation.flyToCenter),
    2000,
    false
    )
    animation.runMovementAnimation(
    mySprite2,
    animation.animationPresets(animation.flyToCenter),
    2000,
    false
    )
    tiles.setCurrentTilemap(tilemap`level11`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`fire2`, function (sprite16, location14) {
    info.startCountdown(40)
    tiles.setCurrentTilemap(tilemap`level9`)
})
let mySprite2: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundImage()
tiles.setTilemap(tilemap`level1`)
mySprite = sprites.create(, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 500
scene.cameraFollowSprite(mySprite)
game.splash("you (gendlin) and your in game bf (katnip) were drawn in the hunger games during a cave excursion", "objective:survive")
music.play(music.stringPlayable("F B F E G B A G ", 120), music.PlaybackMode.LoopingInBackground)
mySprite.sayText("World 1: The arena (The hunger game trilogy)", 2000, false)
